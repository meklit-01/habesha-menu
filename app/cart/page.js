"use client";

import Link from "next/link";
import DishCard from "../components/DishCard";
import { useCart } from "../components/CartProvider";
import { etb } from "../../lib/format";

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <p>Review your dishes before you check out.</p>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/menu">Browse the menu</Link>
        </p>
      ) : (
        <div>
          <p>
            {cart.length} {cart.length === 1 ? "dish" : "dishes"} · Total{" "}
            <strong>{etb.format(total)}</strong>
          </p>
          <div className="dishes-container">
            {cart.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
          <p>
            <Link href="/checkout" className="btn">Go to checkout</Link>
          </p>
        </div>
      )}
    </div>
  );
}
