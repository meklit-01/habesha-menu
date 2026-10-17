"use client";

import { useState } from "react";

export default function FilterShell({ children }) {
  const [showDishes, setShowDishes] = useState(true);

  return (
    <div>
      <button className="btn btn-outline" onClick={() => setShowDishes(!showDishes)}>
        {showDishes ? "Hide Dishes" : "Show Dishes"}
      </button>
      {showDishes && children}
    </div>
  );
}
