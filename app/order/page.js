import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import { getOrdersForUser, getOrders } from "../../lib/orders";
import { dishNameById } from "../../lib/dishes";
import { etb, when } from "../../lib/format";

export default async function OrdersPage() {
  const user = await getSession();

  if (!user) {
    redirect("/signin?next=/order");
  }

  const orders =
    user.role === "customer" ? await getOrdersForUser(user.id) : await getOrders();

  return (
    <main>
      <h1>My Orders</h1>

      {orders.length === 0 && <p>You have no orders.</p>}

      {orders.map((order) => (
        <article key={order.id} className="panel">
          <h2>
            <Link href={`/order/${order.id}`}>{order.id}</Link>
          </h2>
          <p>Dish: {dishNameById(order.dishId)}</p>
          <p>Quantity: {order.quantity}</p>
          <p>
            Status: <span className={`status ${order.status}`}>{order.status}</span>
          </p>
          <p>Total: {etb.format(order.total)}</p>
          <p>Date: {when.format(new Date(order.date))}</p>
        </article>
      ))}
    </main>
  );
}
