# Events & Seasonal Festivals Silo - Automation Strategy

## Overview
The Events silo automatically fetches, normalizes, and displays local Anna Maria Island events from verified external sources. Pages regenerate weekly without manual intervention.

## Data Sources (Verified Working)
1. **Bradenton Gulf Islands CVB**
   - URL: https://www.bradentongulfislands.com/events/?ical=1
   - Format: ICS calendar feed
   - Content: Official tourism events, festivals, seasonal celebrations

2. **Anna Maria Island Chamber of Commerce**
   - URL: https://www.annamariaislandchamber.org/events/?ical=1&tribe_display=list
   - Format: ICS calendar feed
   - Content: Chamber-sponsored events, community gatherings
   - Note: Slow load time (3-5 seconds) but reliable

3. **Discover Bradenton** (Future Enhancement)
   - URL: https://discoverbradenton.com/bradentonevents/
   - Format: HTML (requires scraping)
   - Content: Regional events and attractions

## Architecture

### Data Flow
```
ICS Feeds → fetchAllEvents() → normalizeEvents() → getEvents() → Pages
              (lib/events-source.ts)   (lib/events-normalize.ts)   (lib/events.ts)
```

### Caching Strategy
- **In-memory cache**: 7-day TTL (604800 seconds)
- **Page revalidation**: `export const revalidate = 604800` on all event pages
- **Fallback**: If all sources fail, cache persists and serves stale data

### Event Processing Pipeline
1. **Fetch** (`lib/events-source.ts`)
   - Parallel fetch from all ICS sources
   - Parse ICS format into `RawEvent` objects
   - Handle errors gracefully (failed sources don't block others)

2. **Normalize** (`lib/events-normalize.ts`)
   - Convert `RawEvent` → `EventRecord`
   - Auto-categorize (music, food, arts, sports, etc.)
   - Infer audience (families, couples, seniors, etc.)
   - Generate SEO-friendly slugs
   - Extract badges (Free, Outdoor, Pet-Friendly, etc.)
   - Filter out events older than 6 months

3. **Serve** (`lib/events.ts`)
   - Cache normalized events in memory
   - Provide helper functions: `getEvents()`, `getEventBySlug()`, `getEventsByCategory()`, `getEventsByMonth()`
   - Expose category and month hub metadata

## Page Structure (30-150 URLs)

### Hub Pages
- `/events` - Main landing page with upcoming events + category/month navigation
- `/events/category/[slug]` - 9 category pages (music-festivals, food-and-wine, etc.)
- `/events/month/[slug]` - 12 month pages (january through december)

### Detail Pages
- `/events/[slug]` - Individual event pages (dynamic, scales with fetched events)
- Each includes Event schema markup for rich snippets

## Automation Schedule

### Current (Passive Revalidation)
- Next.js automatically refetches data every 7 days when pages are accessed
- No manual intervention required
- Works on Vercel, Netlify, or any Next.js host

### Future Enhancement (Active Cron)
To force weekly updates regardless of traffic:

1. **Add API Route** (`app/api/events/revalidate/route.ts`):
```typescript
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  revalidatePath('/events', 'layout');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

2. **Add Vercel Cron** (`vercel.json`):
```json
{
  "crons": [{
    "path": "/api/events/revalidate",
    "schedule": "0 2 * * 1"
  }]
}
```

3. **Set Environment Variable**:
```
CRON_SECRET=your-secure-random-string
```

This triggers a full refresh every Monday at 2 AM UTC.

## Monitoring & Maintenance

### Health Checks
- Check `/events` page weekly to verify events are displaying
- Monitor Vercel/Netlify build logs for fetch errors
- If a source consistently fails, remove it from `fetchAllEvents()` in `lib/events-source.ts`

### Adding New Sources
1. Create new fetch function in `lib/events-source.ts` (follow `fetchBradentonGulfIslandsEvents()` pattern)
2. Add to `fetchAllEvents()` Promise.all array
3. Test locally with `npm run dev`
4. Deploy and verify

### Updating Categories/Badges
- Edit categorization logic in `lib/events-normalize.ts` → `categorizeEvent()` and `generateBadges()`
- Add new categories to `lib/events.ts` → `eventCategories` array
- Regenerate sitemap automatically on next build

## SEO Benefits
- **30-150 indexed pages** (scales with event volume)
- **Event schema markup** on every detail page (rich snippets in Google)
- **Weekly freshness** signals to search engines
- **Internal linking** to availability, open-dates, and guide pages
- **Breadcrumb navigation** on all pages
- **Sitemap integration** (auto-updates with new events)

## Technical Stack
- **Next.js 16** App Router with server components
- **TypeScript** for type safety across data pipeline
- **ICS parsing** (custom parser in `events-source.ts`)
- **Tailwind CSS** for consistent styling
- **Vercel/Netlify** deployment (automatic revalidation)

## Files Created
```
lib/
  events-types.ts          # TypeScript definitions
  events-source.ts         # ICS fetching & parsing
  events-normalize.ts      # Data transformation
  events.ts                # Public API & caching

app/events/
  page.tsx                 # Main hub
  [slug]/page.tsx          # Event detail
  category/[slug]/page.tsx # Category hubs
  month/[slug]/page.tsx    # Month hubs

components/
  EventTopic.tsx           # Event detail template
  EventSchema.tsx          # Structured data
```

## Next Steps (Optional Enhancements)
1. Add Vercel Cron for active weekly refresh
2. Implement HTML scraping for Discover Bradenton
3. Add event images (fetch from source URLs or use placeholder)
4. Create "Featured Events" section on homepage
5. Add email notifications for new high-profile events
6. Implement event filtering UI (date range, category, free/paid)
