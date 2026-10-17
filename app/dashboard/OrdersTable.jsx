import { etb } from "../../lib/format";

export default function OrderTable({ orders }) {
  return (
    <table className="table">
      <caption>Orders, most recent first</caption>

      <thead>
        <tr>
          <th scope="col">Order</th>
          <th scope="col">Dish</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.dishName}</td>
            <td>{order.quantity}</td>
            <td>{etb.format(order.total)}</td>
            <td>
              <span className={`status ${order.status}`}>{order.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
