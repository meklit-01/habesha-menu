import { z } from "zod";
import { orderSchema } from "@/lib/schema";
import { getDishById } from "@/lib/dishes";

// POST /api/orders
// Server steps:
// - receive JSON
// - validate it with the zod schema
// - find the dish
// - calculate the total price
// - create the order (saved to a database later)
// - return the confirmation

export async function POST(request) {
  const body = await request.json();

  const result = orderSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        errors: "Validation failed",
        fieldErrors: z.flattenError(result.error).fieldErrors,
      },
      { status: 422 },
    );
  }

  const dish = await getDishById(result.data.dishId);

  if (!dish) {
    return Response.json({ errors: "Dish not found" }, { status: 404 });
  }

  // SIMULATED DATABASE SAVE
  const order = {
    id: `Order-${Date.now()}`,
    name: result.data.name,
    phone: result.data.phone,
    dishId: dish.id,
    dishName: dish.name,
    quantity: result.data.quantity,
    totalPrice: dish.price * result.data.quantity,
    currency: "ETB",
    createdAt: new Date().toISOString(),
  };

  return Response.json(
    { message: "Order created successfully", order },
    { status: 201 },
  );
}

// 200 success, 201 created, 400 bad request, 401 unauthenticated,
// 403 not allowed, 404 not found, 422 validation error, 500 server error
