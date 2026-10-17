import DishCard from "./DishCard";
import { delay } from "../../lib/delay";

export default async function DishList({ dishes }) {
  await delay(); // simulate a slow load so the Suspense fallback shows

  if (dishes.length === 0) {
    return <p>No dishes in this category yet.</p>;
  }

  return (
    <div className="dishes-container">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
