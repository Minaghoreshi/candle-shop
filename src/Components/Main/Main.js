import React from "react";
import {
  MainSection,
  Button,
  CartItemSection,
  UserOrderCart,
  AvailableProduct,
} from "../UI";
export function Main() {
  return (
    <MainSection>
      <div className="Products">
        <span className="product__section__title">Products</span>
        <span>Order it for you or for your beloved ones </span>
        <div className="ProductCardSection">
          {AvailableProduct} {AvailableProduct}{" "}
        </div>
      </div>
      <CartItemSection>
        <span className="cartItem__section__title">Cart Items</span>
        {UserOrderCart} {UserOrderCart}{" "}
        <div className="total__order__section">
          <span>Sub-Total : 457 $</span>
          <Button variant="small">Checkout</Button>
        </div>
      </CartItemSection>
    </MainSection>
  );
}
