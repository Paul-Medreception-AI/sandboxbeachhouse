import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-sky-200 bg-sky-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold text-slate-900">
          The Sandbox Cottage
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/photos" className="hover:text-sky-900">
            Photos
          </Link>
          <Link href="/location" className="hover:text-sky-900">
            Location
          </Link>
          <Link href="/availability" className="hover:text-sky-900">
            Availability
          </Link>
        </nav>

        <Link
          href="/availability"
          className="rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
        >
          Check Dates
        </Link>
      </div>
    </header>
  );
}
