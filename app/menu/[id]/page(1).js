import Image from "next/image";
import { notFound } from "next/navigation";
import { getDishById, getReviewsByDishId } from "../../../lib/dishes";
import { etb } from "../../../lib/format";
import AddToCartButton from "../../components/AddToCartButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested dish could not be found.",
    };
  }

  return { title: dish.name, description: dish.description };
}

export default async function SingleDishPage({ params }) {
  const { id } = await params;

  // Fetch both at the same time instead of one after the other
  const [dish, reviews] = await Promise.all([
    getDishById(id),
    getReviewsByDishId(id),
  ]);

  if (!dish) {
    notFound();
  }

  return (
    <div>
      <Image src={dish.image} alt={dish.name} width={320} height={320} />
      <h1>
        {dish.name} <span className="am">{dish.amharic}</span>
      </h1>
      <p>{dish.description}</p>
      <p className="price">{etb.format(dish.price)}</p>
      <p>
        <span className="badge">{dish.category}</span>
        {dish.spicy && <span className="badge hot">Spicy</span>}
      </p>
      <AddToCartButton dish={dish} />

      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.reviewer}</strong>: {review.comment}
              <p>Rating: {"★".repeat(review.rating)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
