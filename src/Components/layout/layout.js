import { AddToCartModalContext } from "../../Context/add-to-cart-modal";
import { useContext } from "react";
import { Header } from "../Header";
import { ProductCover } from "../ProductCover";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { AddToCartModal, receiptModal, addInfoModal } from "../UI";
import {} from "../UI";

function Layout() {
  const { addModalState, addModalDispatch } = useContext(AddToCartModalContext);
  // if (isOpen) {
  //   console.log("sfsfsd");
  // }

  return (
    <div className="app">
      {addModalState.isOpen ? <AddToCartModal /> : ""}
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
