"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoryFilter({ categories }) {
  const current = useSearchParams().get("category");

  return (
    <nav className="category-nav" aria-label="Menu categories">
      <Link href="/menu" className={!current ? "active" : ""}>
        All dishes
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`/menu?category=${encodeURIComponent(category)}`}
          className={current === category ? "active" : ""}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
