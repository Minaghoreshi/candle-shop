import styled from "styled-components";
import React, { useEffect } from "react";
import { Counter } from "../Main/Counter";
import { Button } from "./Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AddToCartModalContext } from "../../Context/add-to-cart-modal";
import { useContext } from "react";

const ProductModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #040404b2;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 18px;
  color: #272727;
  font-weight: 400;
  .modal__left_section {
    width: 482px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    & span {
      align-self: flex-start;
    }
    .description {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px;
      border-radius: 7px;
      border: 1px solid #e6e6e6;
      width: 484.229px;
      height: 164.548px;

      & span {
        color: #1d252c;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        width: 482px;
      }
    }
    .price {
      align-self: flex-start;
      margin-bottom: 8px;
      font-size: 26px;
      font-weight: 600;
      color: #56b280;
    }
  }
  .modalContent {
    width: 1046px;
    height: 652px;
    border-radius: 50px;
    background: rgba(217, 217, 217, 1);
    display: flex;
    justify-content: center;
    padding-top: 105px;
    .modal__right_section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 435px;
      & img {
        height: 350px;
      }
      & P {
        text-align: center;
        font-size: 22px;
        font-weight: 500;
      }
      .shipping {
        color: #56b280;
        font-size: 22px;
        font-weight: 500;
      }
    }
  }
  .info {
    border-radius: 50px;
    background: rgba(217, 217, 217, 1);
    width: 469px;
    height: 382px;
    display: flex;
    flex-direction: column;
    padding: 17px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    align-items: center;
    & img {
      width: 126px;
      height: 34px;
    }
    & form {
      border-radius: 7px;
      border: 1px solid #e6e6e6;
      display: flex;
      flex-direction: column;
      width: 408px;
      padding: 11px 18px;
      gap: 12px;
      & input {
        font-size: 20px;
        padding: 8px 10px;
      }
    }
  }
  .reciept {
    border-radius: 50px;
    background: rgba(217, 217, 217, 1);
    width: 1012px;
    height: 728px;
    display: flex;
    .gray-section {
      width: 566px;
      padding: 55px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      .confirm__text {
        font-size: 26px;
        font-weight: 500;
      }
      .check {
        margin-top: 17px;
      }
      .order__number,
      .print {
        color: #56b280;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
      }
      .print {
        text-decoration: underline;
        font-size: 18px;
        margin-bottom: 7px;
      }
      .buyer__info {
        border-radius: 7px;
        border: 1px solid rgba(86, 178, 128, 0.2);
        width: 360px;
        height: 155px;
        padding: 18px 11px 18px 18px;
        .info__section {
          width: 332px;
          display: flex;
          gap: 5px;
          border-bottom: 1px solid rgba(86, 178, 128, 0.2);
          justify-content: start;
          padding-bottom: 18px;
          padding-left: 5px;
          margin-bottom: 18px;
          font-size: 14px;
          margin-bottom: 18px;
        }
        .info__section :first-child {
          color: #818181;
        }
      }
    }
    .white-section {
      border-radius: 0px 50px 50px 0px;
      background: #f2f2f2;
      width: 446px;
      display: flex;
      flex-direction: column;
      padding: 58px 41px;
      .order__details__total,
      .order__details__total__paid {
        margin-top: 13px;
        margin-bottom: 13px;
        display: flex;
        justify-content: space-between;
        width: 259px;
        font-weight: 500;
      }
      .order__details__total__paid :first-child {
        font-size: 14px;
        color: #56b280;
      }
      .order__details__total__paid :nth-child(2) {
        font-size: 24px;
        color: #56b280;
      }
      & hr {
        margin: 13px 0;
        width: 259px;

        background-color: #56b28033;
        height: 1px;
        border: none;
      }
      .order__total {
        height: 99px;
        width: 259px;
        /* border: 1px 0 1px 0; */
        border-top: 1px solid rgba(86, 178, 128, 0.2);
        border-bottom: 1px solid rgba(86, 178, 128, 0.2);
      }
      .order__cart {
        display: flex;
        gap: 38px;
        margin-bottom: 132px;
        .order__details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .order__details :first-child {
          font-size: 16px;
          font-weight: 500;
        }
        .order__details :nth-child(2) {
          color: #56b280;
          font-size: 21px;
          font-weight: 600;
        }
        .product-img {
          width: 100 !important;
          height: 106;
          padding: 10px 0;
          border-radius: 0px 50px 50px 0px;
          background-color: white;
          & img {
            width: 100px;
          }
        }
        & div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
export const AddToCartModal = () => {
  const { addModalState, addModalDispatch } = useContext(AddToCartModalContext);
  // console.log(isOpen);
  const modalClose = (e) => {
    if (e.target.id === "modal-overlay") {
      addModalDispatch({ type: "CLOSE_MODAL" });
    }
  };
  useEffect(() => {
    if (addModalState) {
      document.addEventListener("click", modalClose);
    }
  }, [addModalState]);
  return (
    <ProductModal id="modal-overlay">
      <div className="modalContent">
        <div className="modal__right_section">
          <img src="/img/bluberry.png" alt="product" />
          <p>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </p>
          <span className="shipping">FREE SHIPPING</span>
        </div>
        <div className="modal__left_section">
          <span className="price">99$</span>
          <div className="description">
            {" "}
            <span>
              Wax: Top grade Soy wax that delivers a smoke less, consistent burn
            </span>
            <span>
              {" "}
              Fragrance: Premium quality ingredients with natural essential oils
            </span>
            <span>
              Burning Time: 70-75 hours Dimension: 10cm x 5cm Weight: 400g{" "}
            </span>
          </div>
          <span className="quantity">Quantity</span>
          <Counter />
          <Button>
            {" "}
            <AiOutlineShoppingCart /> Add to cart
          </Button>
        </div>
      </div>
    </ProductModal>
  );
};
// export const AddToCartModal = (

// );
export const addInfoModal = (
  <ProductModal>
    <div className="info">
      <form>
        <img src="/img/logo.png" alt="logo"></img>
        <span>Buyer Info</span>
        <input placeholder="Name" name="name" />{" "}
        <input placeholder="Email" name="email" />
        <input placeholder="Address" name="address" />
      </form>
      <Button type="submit" variant="small">
        Checkout{" "}
      </Button>
    </div>
  </ProductModal>
);

export const receiptModal = (
  <ProductModal>
    <div className="reciept">
      <div className="gray-section">
        {" "}
        <img src="/img/logo.png" alt="logo" />
        <img className="check" src="/img/CheckCircle.png" alt="check" />
        <span className="confirm__text">Payement Confirm</span>
        <span className="order__number">order number</span>
        <div className="buyer__info">
          <div className="info__section">
            <span>Name:</span>
            <span>ksdufkdfhsdfk</span>
          </div>{" "}
          <div className="info__section">
            <span>Name:</span>
            <span>ksdufkdfhsdfk</span>
          </div>{" "}
          <div className="info__section">
            <span>Name:</span>
            <span>ksdufkdfhsdfk</span>
          </div>
        </div>
        <Button variant="medium">Back to Shopping</Button>
        <span className="print">Print Reciept</span>
      </div>{" "}
      <div className="white-section">
        <div className="order__cart">
          <div className="product-img">
            {" "}
            <img
              // style={{ width: "100px" }}
              src="/img/milky.png"
              alt="product"
            />
          </div>
          <div className="order__details">
            <span>Product Title</span> <span>19$</span>
          </div>
        </div>
        {/* <div className="order__total"></div> */}
        <hr></hr>
        <div className="order__details__total">
          <span>Subtotal</span>
          <span>$ 19.98</span>
        </div>
        <div className="order__details__total">
          <span>Shipping</span>
          <span>Free Shipping</span>
        </div>{" "}
        <hr></hr>{" "}
        <div className="order__details__total__paid">
          <span>Paid</span>
          <span>19$</span>
        </div>{" "}
      </div>{" "}
    </div>
  </ProductModal>
);
