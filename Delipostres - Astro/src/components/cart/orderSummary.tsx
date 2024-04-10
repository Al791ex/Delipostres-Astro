import { CartItemProps } from './productCartItem';

interface Props {
  cartItems: CartItemProps[];
}

export default function OrderSummary({
  products,
}: Props) {

  let subtotalCheckout = 0;
  products.map(product => 
    subtotalCheckout += product.price
  )

  return (
    <>
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className="opacity-8">Subtotal</p>
            <h3 className="mb-5">${subtotalCheckout.toLocaleString()}</h3>
          </div>
        </li>
    </>
  );
};