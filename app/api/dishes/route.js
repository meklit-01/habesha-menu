import { getDishes } from "../../../lib/dishes";

// GET /api/dishes?category=Meat&q=tibs&page=1
export async function GET(request) {
  const dishes = await getDishes();

  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;

  let result = dishes;

  if (category) {
    result = result.filter((dish) => dish.category === category);
  }

  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (dish) =>
        dish.name.toLowerCase().includes(q) || dish.amharic.includes(query),
    );
  }

  const pageSize = 4;
  const start = (page - 1) * pageSize;

  return Response.json({
    dishes: result.slice(start, start + pageSize),
    total: result.length,
    page,
    totalPages: Math.max(1, Math.ceil(result.length / pageSize)),
  });
}
