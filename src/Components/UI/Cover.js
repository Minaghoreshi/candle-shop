import styled from "styled-components";
export const Cover = styled.div`
  height: 705px;
  background-image: url("/img/bg-image.png");
  display: flex;
  align-items: center;
  justify-content: center;
  .CoverCard {
    width: 730px;
    height: 349px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #f7f8facc;
    .title {
      font-size: 40px;
      font-weight: 500;
    }
    & span {
      font-size: 18px;
      font-weight: 400;
      width: 537px;
      text-align: center;
    }
  }
`;
