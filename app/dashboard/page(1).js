import { dishes } from "../data/dishes";
import { orders } from "../data/orders";
import { categories, dishNameById } from "../../lib/dishes";
import DownloadCsvButton from "./DownloadCsvButton";
import OrdersChart from "./OrdersChart";
import OrderTable from "./OrdersTable";
import RevenueChart from "./RevenueChart";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const byCategory = categories.map((category) => {
    const dishIds = dishes
      .filter((dish) => dish.category === category)
      .map((dish) => dish.id);

    const revenue = orders
      .filter((order) => dishIds.includes(order.dishId))
      .reduce((sum, order) => sum + order.total, 0);

    return { category, revenue };
  });

  const byDate = Object.values(
    orders.reduce((result, order) => {
      if (!result[order.date]) {
        result[order.date] = { date: order.date, orders: 0 };
      }

      result[order.date].orders += 1;

      return result;
    }, {}),
  );

  const rows = orders.map((order) => ({
    ...order,
    dishName: dishNameById(order.dishId),
  }));

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Revenue and orders at a glance.</p>

      <h2>Revenue by category</h2>
      <RevenueChart data={byCategory} />

      <h2>Orders per day</h2>
      <OrdersChart data={byDate} />

      <OrderTable orders={rows} />

      <DownloadCsvButton orders={rows} />
    </div>
  );
}
