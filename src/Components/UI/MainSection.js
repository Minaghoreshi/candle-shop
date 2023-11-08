import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../../Context/Product-context";
import { AddToCartModalContext } from "../../Context/add-to-cart-modal";
export const MainSection = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
  padding: 90px 40px 90px 160px;

  .Products {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    .product__section__title {
      font-size: 40px;
      font-weight: 500;
    }
    & span {
      font-size: 18px;
      font-weight: 400;
    }

    .ProductCardSection {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
      column-gap: 20px;
      margin-top: 10px;
      .ProductCard {
        display: flex;
        flex-direction: column;

        box-shadow: 0px 0px 14px 3px rgba(161, 161, 161, 0.2);
        & img {
          background-color: #f7f8fa;
        }
        .ProductDetails {
          padding: 10px 26px 16px 26px;
          display: flex;
          flex-direction: column;
          .product__detail__title {
            font-size: 16px;
            font-weight: 500;
          }
          .product__detail__price {
            font-size: 20px;
            font-weight: 500;
            color: #56b280;
            text-align: right;
          }
        }
      }
    }
  }
`;

export const AvailableProduct = (props) => {
  const { addModalState, addModalDispatch } = useContext(AddToCartModalContext);
  const { products, productsDispatch } = useContext(ProductContext);

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="ProductCard"
          onClick={() => {
            addModalDispatch({ type: "OPEN_MODAL", payload: product.id });
          }}
        >
          <img src={product.url} alt={product.name} />
          <div className="ProductDetails">
            <span className="product__detail__title">{product.name}</span>
            <span className="product__detail__price">${product.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};
// export const AvailableProduct = (
//   <div className="ProductCard">
//     <img src="/img/bluberry.png" alt="bluberyy" />
//     <div className="ProductDetails">
//       <span className="product__detail__title">Spcied Mint</span>
//       <span className="product__detail__price">99$</span>
//     </div>
//   </div>
// );
