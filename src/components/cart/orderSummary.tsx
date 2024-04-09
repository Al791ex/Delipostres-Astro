import ProductCartItem from './productCartItem';
interface Props {
  cartItems: typeof ProductCartItem[];
}

export default function OrderSummary({ cartItems }: Props) {
  const taxRate = 0.16;
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.sizes), 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <>
      <ul className="list-unstyled">
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className="opacity-8">Subtotal</p>
            <p className="fw-bold opacity-8">${subtotal.toFixed(2)}</p>
          </div>
        </li>
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className="opacity-8">Impuestos</p>
            <p className="fw-bold opacity-8">${tax.toFixed(2)}</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5>Total</h5>
            <h5>${total.toFixed(2)}</h5>
          </div>
        </li>
      </ul>
    </>
  );
}