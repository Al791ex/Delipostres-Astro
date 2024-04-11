// OrderSummary.tsx
import { useContext } from 'react';
import { CartContext } from '../../../assets/js/CartContext';
import React, { useContext } from 'react';

export default function OrderSummary() {
  const { cartItems } = useContext(CartContext);

  let subtotalCheckout = cartItems.reduce((accumulator, item) =>
    accumulator + item.price * item.quantity, 0
  );

  return (
    <>
      <h3 className="mb-5">${subtotalCheckout.toLocaleString()}</h3>
    </>
  );
}
