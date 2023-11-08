import { useState } from "react";
import styled from "styled-components";
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
  return (
    <CounterWrapper>
      <span>+</span>
      <span
        className="counter"
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        {count}
      </span>
      <span
        onClick={() => {
          setCounter((prevCounter) => prevCounter - 1);
        }}
      >
        -
      </span>
    </CounterWrapper>
  );
}
