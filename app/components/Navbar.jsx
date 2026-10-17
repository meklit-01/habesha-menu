import Link from "next/link";
import CartLink from "./CartLink";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/menu">Menu</Link>
      <CartLink />
      <Link href="/checkout">Checkout</Link>
      <Link href="/order">Orders</Link>
      <Link href="/kitchen">Kitchen</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
