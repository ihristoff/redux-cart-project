import React from "react";
import CardItem from "./CardItem";
import { store } from "../store";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

import { openModal } from "../features/modal/modalSlice";

const CardContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag </h2>
          <h4 className="empty-cart">Your bag is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={()=>dispatch(openModal())} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CardContainer;
