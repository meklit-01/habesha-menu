"use client";

import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { etb } from "../../lib/format";

export default function OrderStatus({ id, initialOrder }) {
  const { data, error, isLoading } = useSWR(`/api/orders/${id}`, fetcher, {
    fallbackData: initialOrder,
    refreshInterval: 5000,
  });

  if (error) {
    return <p className="error">Could not load the order.</p>;
  }

  if (isLoading && !data) {
    return <p>Loading order...</p>;
  }

  return (
    <div className="panel">
      <h2>Live Order Status</h2>
      <p>Order: {data.id}</p>
      <p>
        Status: <span className={`status ${data.status}`}>{data.status}</span>
      </p>
      <p>Total: {etb.format(data.total)}</p>
    </div>
  );
}
