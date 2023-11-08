import styled from "styled-components";
const variantWidths = {
  small: "183px",
  medium: "250px",
  large: "350px",
};
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${(props) => variantWidths[props.variant] || "310px"}; // Default width
  background-color: #56b280;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border: none;
  gap: 10px;
  border-radius: 4px;
`;
