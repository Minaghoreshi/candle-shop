import styled from "styled-components";
import { Counter } from "../Main/Counter";
import { SelectedProductContext } from "../../Context/selected-product-context";
import { useContext } from "react";
import { CounterWrapper } from "../Main/Counter";
export const CartItemSection = styled.div`
  display: flex;
  gap: 80px;
  flex-direction: column;
  justify-content: center;
  width: 550px;
  .cartItem__section__title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
  }
  .OrderCart {
    display: flex;
    gap: 26px;
    .details {
      display: flex;
      flex-direction: column;

      gap: 10px;
      .remove {
        font-size: 20px;
        color: #56b280;
      }
      & span {
        font-size: 26px;
        font-weight: 500;
      }
    }
    .priceDetails {
      display: flex;
      gap: 10px;
      align-items: center;
      & span {
        font-size: 20px;
      }
    }
    .CartItemImage {
      width: 142px;
      height: 120px;
      background-color: #f7f8fa;
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        width: 142px;
        height: 100px;
      }
    }
  }
  .total__order__section {
    display: flex;
    justify-content: end;
    gap: 52px;
    & span {
      font-size: 26px;
      font-weight: 500;
    }
  }
`;

// export const UserOrderCart = (
//   <div className="OrderCart">
//     <div className="CartItemImage">
//       <img src="/img/bluberry.png" alt="bluberyy"></img>
//     </div>
//     <div className="details">
//       <span>bluberry</span>
//       <div className="priceDetails">
//         <span>$99</span>
//         <Counter />
//         <span variant="orderDetails">Total: 1345 $</span>
//       </div>
//       <span className="remove">Remove</span>
//     </div>
//   </div>
// );
export const UserOrderCart = (props) => {
  const { selected, selectedDispatch } = useContext(SelectedProductContext);
  const allorders = selected.selectedProducts;

  const handleIncrement = (order) => {
    order.order += 1;
    selectedDispatch({
      type: "SET_CURRENT_SELECTED",
      payload: order,
      // quantity: 1, // Increment the order by 1
    });
  };
  const handleDecrement = (order) => {
    if (order.order > 0) {
      order.order -= 1;
      selectedDispatch({
        type: "SET_CURRENT_SELECTED",
        payload: order,
        // quantity: 1, // Increment the order by 1
      });
    }
    if (order.order === 0) {
      selectedDispatch({
        type: "REMOVE_SELECTED_PRODUCT",
        payload: order,
      });
    }
  };
  return (
    <>
      {" "}
      {allorders.map((order) => (
        <div className="OrderCart" key={order.id}>
          <div className="CartItemImage">
            <img src="/img/bluberry.png" alt="bluberyy"></img>
          </div>
          <div className="details">
            <span>{order.name}</span>
            <div className="priceDetails">
              <span>$ {order.price}</span>
              <CounterWrapper>
                <span
                  className="counter"
                  onClick={() => {
                    handleIncrement(order);
                  }}
                >
                  +
                </span>
                <span>{order.order}</span>
                <span
                  onClick={() => {
                    handleDecrement(order);
                  }}
                >
                  -
                </span>
              </CounterWrapper>
              <span variant="orderDetails">
                Total: {Number(order.order) * Number(order.price)}
              </span>
            </div>
            <span className="remove">Remove</span>
          </div>
        </div>
      ))}
    </>
  );
};
