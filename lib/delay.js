// Simulates a slow database or API so loading states and Suspense are visible.
// Set to 0 when you connect a real database.
export const SIMULATED_DELAY_MS = 800;

export const delay = (ms = SIMULATED_DELAY_MS) =>
  new Promise((resolve) => setTimeout(resolve, ms));
