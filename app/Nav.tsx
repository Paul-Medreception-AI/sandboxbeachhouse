import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-sky-200 bg-sky-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 sm:h-20 md:h-24 max-w-7xl items-center justify-between px-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-bold text-slate-900">
          <Image
            src="/SandboxLogo.png"
            alt="The Sandbox Cottage"
            width={96}
            height={96}
            className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-sm object-contain"
            priority
          />
          <span className="hidden sm:inline">The Sandbox Cottage</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/photos" className="hover:text-sky-900">
            Photos
          </Link>
          <Link href="/pool" className="hover:text-sky-900">
            Pool
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
            className="rounded-md bg-sky-700 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white hover:bg-sky-800"
          >
            Check Dates
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
