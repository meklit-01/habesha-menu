import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import { getOrders } from "../../lib/orders";
import { dishNameById } from "../../lib/dishes";

export default async function KitchenPage() {
  const user = await getSession();

  if (!user) {
    redirect("/signin?next=/kitchen");
  }

  if (user.role !== "staff") {
    return (
      <main>
        <h1>Access Denied</h1>
        <p>Only staff members can access the kitchen.</p>
      </main>
    );
  }

  const orders = await getOrders();
  const active = orders.filter((order) => order.status !== "completed");

  return (
    <main>
      <h1>Kitchen</h1>

      <p>Welcome, {user.name}. Here staff can manage orders.</p>

      <h2>To prepare ({active.length})</h2>

      {active.length === 0 && <p>No open orders.</p>}

      {active.map((order) => (
        <article key={order.id} className="panel">
          <h3>{order.id}</h3>
          <p>
            {order.quantity} × {dishNameById(order.dishId)}
          </p>
          <p>
            Status: <span className={`status ${order.status}`}>{order.status}</span>
          </p>
        </article>
      ))}
    </main>
  );
}
