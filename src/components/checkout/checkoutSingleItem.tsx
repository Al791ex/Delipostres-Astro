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

  // Función para comprobar si el producto ya está en el carrito
  const isInCart = cartItems.some(item => item.title === title);

  const handleAddToCart = () => {
    addToCart({ thumb_src, thumb_alt, title, color, price });
  };

  return (
    <div className="d-flex mb-4">
      <img className="w-20 rounded-3" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
      <div className="w-60 w-md-70 pt-2 ps-3 ps-md-4">
        <h6 className="text-lg text-white mb-1">{title}</h6>
        <p className="mb-0 text-white opacity-8">{color}</p>
      </div>

      <div className="w-10 text-end">
        <p className="text-white mb-0">${price.toLocaleString()}</p>
        {/* Botón para agregar al carrito */}
        <button onClick={handleAddToCart} disabled={isInCart} className="btn btn-dark">
          {isInCart ? 'En el carrito' : 'Agregar'}
        </button>
      </div>
    </div>
  );
}
