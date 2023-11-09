import React, { createContext, useContext, useEffect } from "react";
import { ProductContext } from "../../Context/Product-context";
import { CheckoutModalContext } from "../../Context/checkout-modal";
import { SelectedProductContext } from "../../Context/selected-product-context";
import {
  MainSection,
  Button,
  CartItemSection,
  UserOrderCart,
  AvailableProduct,
} from "../UI";

export function Main() {
  const { checkoutModalState, checkoutDispatch } =
    useContext(CheckoutModalContext);
  const { products, productsDispatch } = useContext(ProductContext);
  const { selected, selectedDispatch } = useContext(SelectedProductContext);

  // useEffect(() => {
  //   productsDispatch({ type: "GET_PRODUCTS" });
  // }, []);
  // console.log(products);
  return (
    <MainSection>
      <div className="Products">
        <span className="product__section__title">Products</span>
        <span>Order it for you or for your beloved ones </span>
        <div className="ProductCardSection">
          <AvailableProduct />
        </div>
      </div>
      <CartItemSection>
        <span className="cartItem__section__title">Cart Items</span>
        {/* {UserOrderCart} {UserOrderCart}{" "} */}
        <UserOrderCart />
        <div className="total__order__section">
          <span>Sub-Total : 457 $</span>
          <Button
            onClick={() => {
              checkoutDispatch({ type: "OPEN_MODAL" });
            }}
            variant="small"
          >
            Checkout
          </Button>
        </div>
      </CartItemSection>
    </MainSection>
  );
}
