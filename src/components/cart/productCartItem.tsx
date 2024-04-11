import React, { useState, useContext } from 'react';
import { CartContext } from '../../../assets/js/CartContext';
import React, { useContext, useState } from 'react';

type Props = {
  id: number,
  thumb_src: string,
  thumb_alt: string,
  title: string,
  color: string,
  price: number,
  stock: boolean
}

export default function ProductCartItem({
  id,
  thumb_src,
  thumb_alt,
  title,
  color,
  price,
  stock,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const { updateCartItem, removeFromCart } = useContext(CartContext); // Asume que existe una función removeFromCart

  const handleQuantityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
      updateCartItem(id, newQuantity);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const calculateSubtotal = () => price * quantity;

  return (
    <>
      <div className="d-block d-md-flex">
        <img className="w-50 w-md-30 rounded-3" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
        <div className="w-100 w-md-50 ps-md-4">
          <h6 className="text-lg mb-1">{title}</h6>
          <div className="d-flex">
            <p className="pe-3 mb-0">{color}</p>
          </div>
          <div className="d-flex align-items-center mt-6">
            <button className="btn btn-danger mt-2" onClick={handleRemoveFromCart()}>
              Quitar del carrito
            </button>
            {stock ? (
              <>
                <i className="fas fa-check text-lg text-success"></i>
                <p className="mb-0 ms-2 text-sm">En existencia</p>
              </>
            ) : (
              <>
                <i className="fas fa-minus-circle text-lg"></i>
                <p className="mb-0 ms-2 text-sm">Sin existencia</p>
              </>
            )}
          </div>
        </div>
        <div className="w-40 w-md-15 mt-4 mt-md-0">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityInputChange}
            className="form-control"
            placeholder="cantidad"
            aria-label="amount"
          />
        </div>
        <h4 className="ms-3">${calculateSubtotal().toLocaleString()}</h4>
      </div>
    </>
  );
}