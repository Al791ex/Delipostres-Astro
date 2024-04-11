import { useContext } from 'react';
import ShippingInfo from './shippingInfo';
import CheckoutSingleItemDark from '../checkout/checkoutSingleItemDark';
import React, { useContext } from 'react';
// Asegúrate de ajustar la ruta de importación de CartContext según la estructura real de tu proyecto
import { CartContext } from '../../../assets/js/CartContext';

interface Product {
  thumb_src: string;
  thumb_alt: string;
  color: string;
  title: string;
  price: number;
  stock: string;
  subtotal: number;
}

interface Props {
  products: Product[];
}

export default function CheckoutMultiStep({ products }: Props) {
  const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(CartContext);

  let subtotalCheckout = 0;
  products.forEach(product => (subtotalCheckout += product.price));

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const calculateSubtotal = () => {
    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  };

  return (
    <>
      <section className="bg-gray-100 px-2">
        <div className="row">
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <h5 className="mb-4">Información de contacto</h5>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" className="form-control" placeholder="Ingresa tu nombre" />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" className="form-control" placeholder="Ingrese su correo electrónico" />
            </div>
            <div className="form-group">
              <label>Número de teléfono</label>
              <input type="text" className="form-control" placeholder="Ingresa tu número de teléfono" />
            </div>
            <div className="form-group">
              <label>Ciudad</label>
              <input type="text" className="form-control" placeholder="Ingresa la ciudad" />
            </div>
            <ShippingInfo title="Shipping Information" />
            <button className="btn btn-dark w-100 mt-4">Continuar</button>
          </div>
          <div className="col-12 col-lg-6 p-lg-5">
            <small className="opacity-6">Cantidad</small>
            <h3 className="mb-5">${calculateSubtotal().toLocaleString()}</h3>
            {products.map((product, i) => (
              <CheckoutSingleItemDark
                key={i}
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                title={product.title}
                color={product.color}
                price={product.price}
                onAddToCart={() => handleAddToCart(product)} // Agregar al carrito al hacer clic
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
