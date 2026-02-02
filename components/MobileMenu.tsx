"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2 md:hidden"
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-6 bg-slate-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`h-0.5 w-6 bg-slate-900 transition-all ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-slate-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed right-0 top-16 z-50 w-64 border-l border-slate-200 bg-white shadow-xl md:hidden sm:top-20">
            <div className="flex flex-col p-4">
              <Link
                href="/photos"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Photos
              </Link>
              <Link
                href="/pool"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Pool
              </Link>
              <Link
                href="/location"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Location
              </Link>
              <Link
                href="/availability"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Availability
              </Link>
              <Link
                href="/open-dates"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Open Dates
              </Link>
              <Link
                href="/faq"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
