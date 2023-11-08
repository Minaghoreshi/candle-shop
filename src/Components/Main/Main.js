import React, { useContext } from "react";
import { CheckoutModalContext } from "../../Context/checkout-modal";
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
  console.log(checkoutModalState);
  return (
    <MainSection>
      <div className="Products">
        <span className="product__section__title">Products</span>
        <span>Order it for you or for your beloved ones </span>
        <div className="ProductCardSection">
          <AvailableProduct />
          <AvailableProduct />
        </div>
      </div>
      <CartItemSection>
        <span className="cartItem__section__title">Cart Items</span>
        {UserOrderCart} {UserOrderCart}{" "}
        <div className="total__order__section">
          <span>Sub-Total : 457 $</span>
          <Button
            onClick={() => {
              console.log(checkoutModalState);
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
