import { useContext } from 'react';
import { CartContext } from '../../../assets/js/CartContext';
interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  color: string;
  price: number;
}

export default function CheckoutSingleItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  price,

}: Props) {
  const { addToCart, cartItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  return (
    <>
      <div className="card card-product card-plain d-flex mb-4"> 
        <div className="row">
          <div className="col-4 col-md-0">
            <img className="w-105 max-height-150 rounded-3" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
          </div>
          <div className="col-5 col-md-6">
            <h2 className="text-base mb-1">{title}</h2>
            <h4 className="text-sm font-weight-bold mb-0">${price.toLocaleString()}</h4>
            <p className="text-sm mb-0 opacity-8">{color}</p>
          </div>
          <div className="col-2">
            <div className="d-block d-md-flex align-items-center">
              <button className="btn btn-link text-dark d-block d-md-none"><i className="fas fa-pen"></i></button>
              <button className="btn btn-dark btn-sm d-none d-md-block">Remover</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}