import { AddToCartModalContext } from "../../Context/add-to-cart-modal";
import { useContext } from "react";
import { Header } from "../Header";
import { ProductCover } from "../ProductCover";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { AddToCartModal, receiptModal, AddInfoModal } from "../UI";
import { CheckoutModalContext } from "../../Context/checkout-modal";

function Layout() {
  const { addModalState } = useContext(AddToCartModalContext);
  const { checkoutModalState } = useContext(CheckoutModalContext);
  // if (isOpen) {
  //   console.log("sfsfsd");
  // }

  return (
    <div className="app">
      {addModalState.isOpen ? <AddToCartModal /> : ""}
      {checkoutModalState.isOpen ? <AddInfoModal /> : ""}
      {/* {AddToCartModal} */}
      {/* {addInfoModal} */}
      {/* {receiptModal} */}
      <Header />
      <ProductCover />
      <Main />

      <Footer />
    </div>
  );
}

export default Layout;
