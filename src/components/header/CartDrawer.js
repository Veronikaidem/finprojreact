import { Drawer, Box, Button } from "@mui/material";
import { border, fontSize, textAlign } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart, useCartItems, useUserInfo, saveCart } from "../../redux";
import { Typography } from "../shared";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StyledBox = styled(Box)(() => ({
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid green",
  marginBottom: "10px",
  borderRadius: "20px",
  color: "black",
  fontWeight: "700",
}));
const StyledTotalBox = styled(Box)(() => ({
  textAlign: "right",
  padding: "10px",
  border: "2px solid  blue",
  fontWeight: "700",
  borderRadius: "20px",
}));
const StyledButton = styled(Button)(() => ({
  backgroundColor: "green",
  marginTop: "12px",
  color: "white",
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: "pink",
  },
}));
const StyledEmpyBasketBox = styled(Box)(() => ({
  display: "flex",
  fontSize: "30px",
}));

export const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = useCartItems();
  console.log("cartItems", cartItems);
  const userInfo = useUserInfo();
  const dispatch = useDispatch();
  const Total = () => {
    return cartItems?.reduce((acc, curr) => {
      const total = curr.product.price * curr.quantity;

      return acc + total;
    }, 0);
  };

  const isProductInCart = cartItems.length;

  console.log("isProductInCart", isProductInCart);

  return (
    <Drawer open={isOpen} onClose={onClose} anchor="right">
      {cartItems.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id } = product;
        const total = price * quantity;
        return (
          <StyledBox key={_id}>
            <Typography>{name}</Typography>
            <Typography>x {quantity}</Typography>
            <Typography>{total}</Typography>
          </StyledBox>
        );
      })}

      {isProductInCart > 0 && (
        <StyledTotalBox>
          {" "}
          Total <Total />
        </StyledTotalBox>
      )}

      {isProductInCart > 0 ? (
        <>
          {" "}
          <StyledButton
            onClick={() => {
              dispatch(clearCart());
              dispatch(saveCart({ userId: userInfo._id, cartItems: [] }));
            }}
          >
            clear Cart
          </StyledButton>
          {userInfo && (
            <StyledButton
              onClick={() => {
                dispatch(saveCart({ userId: userInfo._id, cartItems }));
              }}
            >
              save cart
            </StyledButton>
          )}
        </>
      ) : (
        <StyledEmpyBasketBox>
          <AiOutlineShoppingCart size={35} color="green" /> Basket is empty
        </StyledEmpyBasketBox>
      )}
    </Drawer>
  );
};