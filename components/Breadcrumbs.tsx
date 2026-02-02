"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : ""))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null;
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    return { label: formatSegment(segment), href, isLast: index === segments.length - 1 };
  });

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="font-semibold text-slate-700 hover:text-sky-900">
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span className="text-slate-400">/</span>
            {crumb.isLast ? (
              <span className="text-slate-500">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="font-semibold text-slate-700 hover:text-sky-900">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
