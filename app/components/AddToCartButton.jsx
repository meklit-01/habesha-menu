"use client";

import { useCart } from "./CartProvider";

export default function AddToCartButton({ dish }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const isAdded = cart.some((item) => item.id === dish.id);

  function handleClick() {
    if (isAdded) {
      removeFromCart(dish.id);
    } else {
      addToCart(dish);
    }
  }

  return (
    <button className={isAdded ? "btn btn-outline" : "btn"} onClick={handleClick}>
      {isAdded ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}
