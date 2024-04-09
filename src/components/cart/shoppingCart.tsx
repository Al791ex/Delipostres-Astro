import ProductCartItem from './productCartItem';
import OrderSummary from './orderSummary';
import React, { useState } from 'react';
// Remove the unused 'Props' interface declaration
interface Props {
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    sizes: string;
    stock: boolean

  })[];
}

export default function ShoppingCart({
  products
}: Props) {
  const [cartItems, setCartItems] = useState<Props[]>([]);

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter((item: Props) => item.id !== id));
  };


  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3 text-center">Carrito</h2>
        <h5 className="text-center mb-5">Tu envío podría salir Gratis</h5>
        <div className="row">
          <div className="col-12 col-lg-7">
            {products.map((product, i) => 
              <>
              {i != 0 &&
                <hr className="horizontal dark my-4" />  
              }
                <ProductCartItem
                  id={product.id}
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  color={product.color}
                  sizes={product.sizes}
                  price={product.price}
                  stock={product.stock}
                />
              </>
            )}
            
          </div>
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Detalles de la orden</h5>
                <OrderSummary 
                  cartItems={cartItems}
                />
                <button
                  className="btn btn-danger btn-lg w-100 mt-3"
                  onClick={() => handleRemoveFromCart(id)}
                >
                  Quitar del carrito
                </button>
                <button className="btn btn-dark btn-lg w-100">Finalizar compra</button>
                <button className="btn btn-white btn-lg w-100">Seguir comprando</button>
                <p className="text-center">Impuesto incluido junto al precio de envio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};