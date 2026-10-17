import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { etb } from "../../lib/format";

export default function DishCard({ dish }) {
  return (
    <div className="dish-item">
      <Image src={dish.image} alt={dish.name} width={200} height={200} />
      <h2>
        {dish.name} <span className="am">{dish.amharic}</span>
      </h2>
      <p>{dish.description}</p>
      <p className="price">{etb.format(dish.price)}</p>
      <p>
        <span className="badge">{dish.category}</span>
        {dish.spicy && <span className="badge hot">Spicy</span>}
      </p>
      <div className="card-actions">
        <Link href={`/menu/${dish.id}`}>View Details</Link>
        <AddToCartButton dish={dish} />
      </div>
    </div>
  );
}
