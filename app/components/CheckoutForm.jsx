"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function CheckoutForm({ dishes }) {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    dishId: cart[0]?.id ?? "",
    quantity: 1,
  });

  const [serverErrors, setServerErrors] = useState({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setServerErrors({});
    setMessage("");

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.status === 422) {
      const data = await response.json();
      setServerErrors(data.fieldErrors);
      return;
    }

    if (!response.ok) {
      setMessage("Something went wrong.");
      return;
    }

    const data = await response.json();

    setMessage(
      `Hi ${data.order.name}, your order ${data.order.id} was created successfully! ${data.order.totalPrice} ${data.order.currency}`,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
        {serverErrors.name && <p className="error">{serverErrors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          placeholder="09XXXXXXXX"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
        />
        {serverErrors.phone && <p className="error">{serverErrors.phone[0]}</p>}
      </div>

      <div>
        <label htmlFor="dish">Dish</label>
        <select
          id="dish"
          value={form.dishId}
          onChange={(event) => setForm({ ...form, dishId: event.target.value })}
        >
          <option value="">Choose a dish</option>
          {dishes.map((dish) => (
            <option key={dish.id} value={dish.id}>
              {dish.name} ({dish.amharic}) - {dish.price} ETB
            </option>
          ))}
        </select>
        {serverErrors.dishId && <p className="error">{serverErrors.dishId[0]}</p>}
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={form.quantity}
          onChange={(event) =>
            setForm({ ...form, quantity: parseInt(event.target.value) || 0 })
          }
        />
        {serverErrors.quantity && <p className="error">{serverErrors.quantity[0]}</p>}
      </div>

      <button type="submit" className="btn">Place Order</button>

      {message && <p className="success">{message}</p>}
    </form>
  );
}
