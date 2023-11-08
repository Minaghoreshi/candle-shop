import styled from "styled-components";
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
