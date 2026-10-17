// Server component: static, no state or client-side logic.
import Image from "next/image";
import Link from "next/link";
import DishCard from "./components/DishCard";
import { dishes } from "./data/dishes";

export default function Home() {
  const featured = dishes.filter((dish) => ["1", "3", "9"].includes(dish.id));

  return (
    <div>
      <Image
        src="/dishes/doro-wat.jpg"
        alt="Injera platter with stews"
        width={1200}
        height={420}
        priority
        className="hero-img"
      />
      <h1>Welcome to Mesob Habesha Kitchen</h1>
      <p>Slow-cooked stews, fresh injera and Ethiopian coffee, the way it is served at home.</p>
      <p>
        <Link href="/menu" className="btn">View the menu</Link>
      </p>

      <h2>Favourites</h2>
      <div className="dishes-container">
        {featured.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
