import { Suspense } from "react";
import CategoryFilter from "../components/CategoryFilter";
import { categories } from "../../lib/dishes";

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <aside>
        <h2>Categories</h2>
        <Suspense fallback={null}>
          <CategoryFilter categories={categories} />
        </Suspense>
        <p className="legend">
          <span className="badge hot">Spicy</span> served with berbere
        </p>
      </aside>
      <main>{children}</main>
    </div>
  );
}
