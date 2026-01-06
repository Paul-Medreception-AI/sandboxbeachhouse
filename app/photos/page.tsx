"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

const photos: { src: string; alt: string }[] = [
  { src: "/Backyard.avif", alt: "Backyard" },
  { src: "/Front.webp", alt: "Exterior" },
  { src: "/61108cdc.jpg", alt: "House" },
  { src: "/w1918h1079x0y1-13973549.avif", alt: "Property" },
  { src: "/64de59fb.webp", alt: "Sandbox Beach House" },
  { src: "/6972a927.avif", alt: "Sandbox Beach House" },
  { src: "/w1912h1078x0y2-b5ba18e3.webp", alt: "Pool" },
  { src: "/w1920h1078x0y2-9e58e659.webp", alt: "Beach" },
];

export default function PhotosPage() {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const current = photos[index];

  const canNavigate = useMemo(() => photos.length > 1, []);

  function goNext() {
    setIndex((prev) => (prev + 1) % photos.length);
  }

  function goPrev() {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!canNavigate) return;
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [canNavigate]);

  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-4xl font-bold">Sandbox Beach House Photos</h1>
            <p className="text-sm text-gray-600">
              {index + 1} / {photos.length}
            </p>
          </div>

          <div
            className="relative mt-10 overflow-hidden rounded-2xl border bg-gray-100"
            onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
            onTouchEnd={(e) => {
              const start = touchStartX;
              const end = e.changedTouches[0]?.clientX;

              setTouchStartX(null);

              if (!canNavigate || start === null || end === undefined) return;
              const delta = end - start;
              if (Math.abs(delta) < 40) return;
              if (delta < 0) goNext();
              if (delta > 0) goPrev();
            }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>

            {canNavigate ? (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white"
                >
                  →
                </button>
              </>
            ) : null}
          </div>

          <div className="mt-14 text-center">
            <a
              href="/availability"
              className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
