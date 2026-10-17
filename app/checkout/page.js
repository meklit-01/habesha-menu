import CheckoutForm from "../components/CheckoutForm";
import { dishes } from "../data/dishes";

export const metadata = {
  title: "Checkout",
  description: "Complete your order and provide your contact details.",
};

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>
      <CheckoutForm dishes={dishes} />
      <p>Complete your order.</p>
    </main>
  );
}
