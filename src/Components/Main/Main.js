import React from "react";
import { Counter } from "./Counter";
import { MainSection, Button, CartItemSection } from "../UI";
export function Main() {
  return (
    <MainSection>
      <div className="Products">
        <span className="product__section__title">Products</span>
        <span>Order it for you or for your beloved ones </span>
        <div className="ProductCardSection">
          <div className="ProductCard">
            <img src="/img/bluberry.png" alt="bluberyy" />
            <div className="ProductDetails">
              <span className="product__detail__title">Spcied Mint</span>
              <span className="product__detail__price">99$</span>
            </div>
          </div>{" "}
          <div className="ProductCard">
            <img src="/img/bluberry.png" alt="bluberyy" />
            <div className="ProductDetails">
              <span className="product__detail__title">Spcied Mint</span>
              <span className="product__detail__price">99$</span>
            </div>
          </div>{" "}
        </div>
      </div>
      <CartItemSection>
        <span className="cartItem__section__title">Cart Items</span>
        <div className="OrderCart">
          <div className="CartItemImage">
            <img src="/img/bluberry.png" alt="bluberyy"></img>
          </div>
          <div className="details">
            <span>bluberry</span>
            <div className="priceDetails">
              <span>$99</span>
              <Counter />
              <span variant="orderDetails">Total: 1345 $</span>
            </div>
            <span className="remove">Remove</span>
          </div>
        </div>{" "}
        <div className="OrderCart">
          <div className="CartItemImage">
            <img src="/img/bluberry.png" alt="bluberyy"></img>
          </div>
          <div className="details">
            <span>bluberry</span>
            <div className="priceDetails">
              <span>$99</span>
              <Counter />
              <span variant="orderDetails">Total: 1345 $</span>
            </div>
            <span className="remove">Remove</span>
          </div>
        </div>
        <div className="total__order__section">
          <span>Sub-Total : 457 $</span>
          <Button variant="small">Checkout</Button>
        </div>
      </CartItemSection>
    </MainSection>
  );
}
