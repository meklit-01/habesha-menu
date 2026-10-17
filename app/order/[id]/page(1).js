import Link from "next/link";
import { getOrderById } from "../../../lib/orders";
import OrderStatus from "../OrderStatus";

export default async function OrderPage({ params }) {
  const { id } = await params;

  const order = await getOrderById(id);

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <main>
      <h1>Order {order.id}</h1>

      <p>Initial status: {order.status}</p>

      <OrderStatus id={order.id} initialOrder={order} />

      <p>
        <Link href={`/track/${order.id}`}>Track delivery on the map</Link>
      </p>
    </main>
  );
}
