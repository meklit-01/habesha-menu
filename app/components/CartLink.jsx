"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartLink() {
  const { cart } = useCart();

  return (
    <Link href="/cart">
      Cart{cart.length > 0 && <span className="count">{cart.length}</span>}
    </Link>
  );
}
