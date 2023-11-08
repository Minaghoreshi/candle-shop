import "./App.css";
import Layout from "./Components/layout/layout";
import { AddToCartModalProvider } from "./Context/add-to-cart-modal";
import { CheckoutModalProvider } from "./Context/checkout-modal";
import { ProductContextProvider } from "./Context/Product-context";
import { SelectedProductContextProvider } from "./Context/selected-product-context";

function App() {
  return (
    <ProductContextProvider>
      <SelectedProductContextProvider>
        <AddToCartModalProvider>
          <CheckoutModalProvider>
            <Layout />
          </CheckoutModalProvider>
        </AddToCartModalProvider>
      </SelectedProductContextProvider>
    </ProductContextProvider>
  );
}

export default App;
