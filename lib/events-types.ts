export type RawEvent = {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  timezone?: string;
  locationName?: string;
  address?: string;
  city?: string;
  state?: string;
  url?: string;
  image?: string;
  categories?: string[];
  tags?: string[];
  source: string;
};

export type EventRecord = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  startDate: string;
  endDate: string;
  timezone: string;
  locationName: string;
  address: string;
  url: string;
  image?: string;
  source: string;
  categories: string[];
  badges: string[];
  audience: string[];
  keywords: string[];
  monthKey: string;
  season: string;
  geoSummary: string;
};

export type EventCategory = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type EventHub = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  focus: string;
};
