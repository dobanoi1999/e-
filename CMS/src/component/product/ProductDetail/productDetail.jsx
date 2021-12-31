import cartApi from "api/cartApi";
import Toast from "component/shared/Toast/Toast";
import { Button } from "globalCss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory, useParams } from "react-router-dom";
import { addProductToCart } from "redux/action/cart";
import styled from "styled-components";

import {
  Desc,
  Detail,
  DetailProduct,
  Image,
  Name,
  Price,
  Wrapper,
  WrapperQuantity,
} from "./productDetail.element";

// install Swiper modules

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    :hover {
      transform: scale(1.2);
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
  p {
    display: inline;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  span {
    color: red;
  }
  transition: transform 600ms ease-in-out;
`;
export default function ProductDetail() {
  const param = useParams();
  const { data } = useSelector((state) => state.product);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  useEffect(() => {
    if (param && data.length > 0) {
      const product = data.find((i) => i._id === param.id);
      setProduct(product);
    }
  }, [param, data]);

  const handleDetailProduct = (_id) => {
    return history.push(`/product/${_id}`);
  };
  const handleAddProduct = () => {
    if (!isLogged) return alert("please login to add");
    cartApi
      .addToCart(product, quantity)
      .then((res) => {
        if (res.status === 500) {
          return Toast.warn(res.data.msg);
        }

        dispatch(addProductToCart({ product, quantity }));
        Toast.success("add success", {
          autoClose: 2000,
        });
      })
      .catch((err) => console.log(err));
  };
  const handleChangeQuantity = (e) => {
    if (typeof e === "number" && e <= 0) return;
    if (e === "") return setQuantity("");
    if (isNaN(e)) return;
    setQuantity(+e);
  };
  if (!product)
    return (
      <p style={{ fontSize: "2rem", textAlign: "center" }}>Product not found</p>
    );
  return (
    <>
      <DetailProduct>
        <Image>
          <img src={product.image.url} />
        </Image>
        <Detail>
          <Name>{product.title}</Name>
          <Price>${product.price}</Price>
          <Desc>{product.description}</Desc>
          <Wrapper>
            <WrapperQuantity>
              <button
                type="button"
                onClick={() => handleChangeQuantity(quantity - 1)}
              >
                -
              </button>
              <input
                type="text"
                name="quantity"
                onChange={(e) => handleChangeQuantity(e.target.value)}
                value={quantity}
              />
              <button
                type="button"
                onClick={() => handleChangeQuantity(quantity + 1)}
              >
                +
              </button>
            </WrapperQuantity>
            <Button bgColor="primary" onClick={handleAddProduct}>
              add to cart
            </Button>
          </Wrapper>
        </Detail>
      </DetailProduct>
    </>
  );
}
