import "./App.css";
import Layout from "./Components/layout/layout";
import { AddToCartModalProvider } from "./Context/add-to-cart-modal";
import { CheckoutModalProvider } from "./Context/checkout-modal";
import { ProductContextProvider } from "./Context/Product-context";
import { SelectedProductContextProvider } from "./Context/selected-product-context";
import { ReceiptModalProvider } from "./Context/receipt-modal-context";
import { BuyerInfoProvider } from "./Context/buye-info-context";

function App() {
  return (
    <ProductContextProvider>
      <SelectedProductContextProvider>
        <ReceiptModalProvider>
          <AddToCartModalProvider>
            <CheckoutModalProvider>
              <BuyerInfoProvider>
                <Layout />
              </BuyerInfoProvider>
            </CheckoutModalProvider>
          </AddToCartModalProvider>
        </ReceiptModalProvider>
      </SelectedProductContextProvider>
    </ProductContextProvider>
  );
}

export default App;
