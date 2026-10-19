import { Suspense } from "react";
import DishSkeleton from "../components/DishSkeleton";
import DishList from "../components/DishList";
import { getDishes } from "../../lib/dishes";

export const metadata = {
  title: "Menu",
  description: "Meat, fasting, breakfast and drinks from our Habesha kitchen.",
};

export default async function MenuPage({ searchParams }) {
  const { category } = await searchParams;
  const all = await getDishes();
  const dishes = category ? all.filter((dish) => dish.category === category) : all;

  return (
    <div>
      <h1>Our Menu{category ? `: ${category}` : ""}</h1>
      <p>Every dish is served with fresh injera.</p>

      <Suspense key={category ?? "all"} fallback={<DishSkeleton />}>
        
          <DishList dishes={dishes} />
        
      </Suspense>

      

     
    </div>
  );
}
