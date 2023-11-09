import { AddToCartModalContext } from "../../Context/add-to-cart-modal";
import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { Header } from "../Header";
import { ProductCover } from "../ProductCover";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { AddToCartModal, ReceiptModal, AddInfoModal } from "../UI";
import { CheckoutModalContext } from "../../Context/checkout-modal";
import { ReceiptModalContext } from "../../Context/receipt-modal-context";
function Layout() {
  const { addModalState } = useContext(AddToCartModalContext);
  const { checkoutModalState } = useContext(CheckoutModalContext);
  const { receiptModalState, receiptModalDispatch } =
    useContext(ReceiptModalContext);
  // if (isOpen) {
  //   console.log("sfsfsd");
  // }
  console.log(receiptModalState);
  return (
    <div className="app">
      {addModalState.isOpen ? <AddToCartModal /> : ""}
      {checkoutModalState.isOpen ? <AddInfoModal /> : ""}
      {receiptModalState.isOpen ? <ReceiptModal /> : ""}
      <Header />
      <ProductCover />
      <Main />

      <Footer />
    </div>
  );
}

export default Layout;
