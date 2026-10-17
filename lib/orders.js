import { orders } from "../app/data/orders";
import { delay } from "./delay";

export async function getOrders() {
  await delay();
  return orders;
}

export async function getOrderById(id) {
  await delay();
  return orders.find((order) => order.id === id);
}

export async function getOrdersForUser(userId) {
  await delay();
  return orders.filter((order) => order.userId === userId);
}
