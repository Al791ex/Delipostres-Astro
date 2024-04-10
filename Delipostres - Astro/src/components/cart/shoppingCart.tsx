import React, { useState } from 'react';
import ProductCartItem from './productCartItem';

interface Props {
  products: {
    id: string;
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    subtotal:number;
    onQuantityChange: (newQuantity: number) => void;
  }[];
}

export default function ShoppingCart({ products }: Props) {
  const [cartItems, setCartItems] = useState<(typeof products[number] & { quantity: number })[]>(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
    setCartItems(updatedCart);
  };

  let TotalCheckout = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-3 text-center">Carrito</h2>
      <h5 className="text-center mb-5">Tu envío podría salir Gratis</h5>
      <div className="row">
        <div className="col-12 col-lg-7">
          {cartItems.map((product) => (
            <div key={product.id}>
              <ProductCartItem
                id={product.id}
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                title={product.title}
                color={product.color}
                price={product.price}
                subtotal={0}
                onQuantityChange={(newQuantity) => handleQuantityChange(product.id, newQuantity)}
              />
              <button className="btn btn-danger mt-2" onClick={() => handleRemoveFromCart(product.id)}>
                Quitar del carrito
              </button>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Detalles de la orden</h5>
                  <div className="d-flex justify-content-between">
                    <p className="opacity-8">Total</p>
                    <h3 className="mb-5">${TotalCheckout.toLocaleString()}</h3>
                  </div>
                <a href="/delipostres/pago" className="btn btn-dark btn-lg w-100 mt-3">Finalizar compra</a>
                <a href="/delipostres/productos" className="btn btn-white btn-lg w-100 mt-2">Seguir comprando</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
