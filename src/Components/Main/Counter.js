import { useContext, useState } from "react";
import styled from "styled-components";
import { SelectedProductContext } from "../../Context/selected-product-context";
const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border: 1px solid #56b280;
  width: 66.614px;
  height: 30px;
  & span {
    font-size: 18px;
    color: #56b280;
  }
  & .counter {
    font-size: 20px;
    color: #272727;
  }
`;
export function Counter() {
  const [count, setCounter] = useState(0);
  const { selected, selectedDispatch } = useContext(SelectedProductContext);
  const currentProduct = selected.currentSelected;

  const handleIncrement = () => {
    currentProduct.order += 1;
    selectedDispatch({
      type: "SET_CURRENT_SELECTED",
      payload: currentProduct,
      // quantity: 1, // Increment the order by 1
    });
  };

  const handleDecrement = () => {
    currentProduct.order -= 1;
    selectedDispatch({
      type: "SET_CURRENT_SELECTED",
      payload: currentProduct,
      // quantity: 1, // Increment the order by 1
    });
  };
  return (
    <CounterWrapper>
      <span className="counter" onClick={handleIncrement}>
        +
      </span>
      <span>
        {currentProduct && currentProduct.order ? currentProduct.order : 0}
      </span>
      <span onClick={handleDecrement}>-</span>
    </CounterWrapper>
  );
}
