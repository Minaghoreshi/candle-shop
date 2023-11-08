import "./App.css";
import Layout from "./Components/layout/layout";
import { AddToCartModalProvider } from "./Context/add-to-cart-modal";
import { CheckoutModalProvider } from "./Context/checkout-modal";
function App() {
  return (
    <AddToCartModalProvider>
      <CheckoutModalProvider>
        <Layout />
      </CheckoutModalProvider>
    </AddToCartModalProvider>
  );
}

export default App;
