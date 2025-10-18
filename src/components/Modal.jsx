import React from "react";

import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(clearCart()), dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            onClick={() => handleConfirm()}
            className="btn confirm-btn"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => dispatch(closeModal())}
            className="btn clear-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
