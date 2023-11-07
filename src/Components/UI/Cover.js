import styled from "styled-components";
export const Cover = styled.div`
  height: 705px;
  background-image: url("/img/bg-image.png");
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CoverCard = styled.span`
  width: 730px;
  height: 349px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f8facc;
`;

export const CoverTitle = styled.span`
  font-size: 40px;
  font-weight: 500;
`;
export const CoverText = styled.span`
  width: 537px;
  text-align: center;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
`;
