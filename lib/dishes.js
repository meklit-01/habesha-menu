import { dishes } from "../app/data/dishes";
import { reviews } from "../app/data/reviews";
import { delay } from "./delay";

// Category names are static, so no delay is needed.
export const categories = [...new Set(dishes.map((dish) => dish.category))];

export async function getDishes() {
  // const response = await fetch("https://api.example.com/dishes");
  // return response.json();
  await delay();
  return dishes;
}

export async function getDishById(id) {
  await delay();
  return dishes.find((dish) => dish.id === id);
}

export async function getReviewsByDishId(dishId) {
  await delay();
  return reviews.filter((review) => review.dishId === dishId);
}

// Instant lookup for display names (no delay), used by order lists and the dashboard.
export const dishNameById = (id) =>
  dishes.find((dish) => dish.id === id)?.name ?? id;
