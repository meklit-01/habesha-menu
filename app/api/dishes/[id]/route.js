import { getDishById } from "../../../../lib/dishes";

// GET /api/dishes/:id
export async function GET(request, { params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    return Response.json({ message: "Dish not found" }, { status: 404 });
  }

  return Response.json(dish);
}
