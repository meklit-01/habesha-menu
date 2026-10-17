"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function DishQuery() {
  const [page, setPage] = useState(1);

  const { data, error, isPending } = useQuery({
    queryKey: ["dishes", page],
    queryFn: () => fetch(`/api/dishes?page=${page}`).then((response) => response.json()),
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });

  if (isPending) {
    return <p>Loading dishes...</p>;
  }

  if (error) {
    return <p className="error">Could not load dishes.</p>;
  }

  return (
    <section>
      <ul>
        {data.dishes?.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>

      <div className="pager">
        <button
          className="btn btn-small"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {data.page} of {data.totalPages}
        </span>
        <button
          className="btn btn-small"
          onClick={() => setPage((current) => Math.min(data.totalPages, current + 1))}
          disabled={page === data.totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
