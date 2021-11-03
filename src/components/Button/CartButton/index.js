import React from 'react';
import "../../../styles/styles.scss";
import { FiShoppingCart } from 'react-icons/fi';


const CartButton = (props) => {
  return (
    <div className="cart-button">
      <FiShoppingCart
        size={30} />
        <span className="cart-button-title">Cart</span>
    </div>
  )
}

export default CartButton