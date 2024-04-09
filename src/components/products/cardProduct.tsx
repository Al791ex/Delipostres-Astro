import ProductSizes from './productSizes';
import ProductCartItem from '../cart/productCartItem';
import { useState } from 'react';

interface Props {
  id: string; // Asegúrate de incluir el id
  thumb_src: string;
  thumb_alt: string;
  title: string;
  price: number;
  color: string;
  position: string;
  category: string;
  stock: number;
  sizes: Map<string, number>; // Añadir soporte para recibir los tamaños del producto
}

export default function CardProduct({
  id, // incluir el id aquí también
  thumb_src,
  thumb_alt,
  title,
  price,
  color,
  category,
  position,
  stock,
  full_description,
  sizes
}: Props) {

  const classList = "card-body " + "text-" + position;

  // Usar el id para generar identificadores únicos para el modal y el botón
  const modalId = `productModal-${id}`;
  const modalTarget = `#${modalId}`;

  const [cartItems, setCartItems] = useState<Props[]>([]);

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter((item: Props) => item.id !== id));
  };

  const handleAddToCart = (product: Props) => {
    // Check if the product is in stock
    if (!product.stock) {
      console.log("Product is out of stock");
      return;
    }

    // Check if the product is already in the cart
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (isProductInCart) {
      alert("Product is already in the cart");
      return;
    }

    // Add the product to the cart
    setCartItems([...cartItems, product]);
  };

  const [quantity, setQuantity] = useState(1);

  const handleSizeSelection = (size: string) => {
    // Update the quantity based on the selected size
    const newSizeQuantity = sizes.get(size) || 1;
    setQuantity(newSizeQuantity);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">
        <a className="card-link">
          <div className="height-400">
            <img className="w-100 h-100 p-0 rounded-top" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
          </div>
          <div className={classList}>
            {(color) && <h6  className="text-md mb-1 text-body">{color}</h6>}
            {(title) && <h4 className="font-weight-bold">{title}</h4>}
            {(price) && <h4 className="mb-0 text-lg mt-1 mb-3">${price.toLocaleString()}</h4>}
            <button type="button" className="btn btn-dark w-auto" data-bs-toggle="modal" data-bs-target={modalTarget}>
                Más Detalles
            </button>
          </div>

        </a>
      </div>

      <div className="modal fade" id={modalId} role="dialog" aria-labelledby={modalId + 'Label'} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="card card-product  border mb-4 shadow-xs border-radius-lg">
              
              <div className="card-body d-block d-lg-flex p-4"> 
                <button type="button" className="btn-close text-dark position-absolute end-0 me-4" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="w-100 w-lg-50 text-center">
                  
                  {(thumb_src) && 
                  
                    <img class="w-100 h-100 rounded-top " src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={title} />
                  }
                 
                </div>
                <div className="w-100 w-lg-50 ps-4 text-center"> 
                <div className="">
                    {(title.length !== 0) && 
                      <h3 className="mt-md-2 mb-3 text-center">{title}  
                        <hr class="dark horizontal my-2" />
                      </h3>
                      
                    } 
                    {(full_description) && <h6  className="text-md mb-0 text-body">{full_description}</h6>}
                  </div>

                  
                  <div className="d-flex justify-content-center align-items-center mx-auto">
                  <div className="w-30 w-md-20 mt-4 mt-md-0"></div>
                  <div className="row mb-2">
                    {(sizes.size !== 0) && 
                      <ProductSizes 
                        sizes={sizes}
                      />
                    }
                    </div>

                  </div>
                  <input type="number" min="0" className="form-control" placeholder={quantity.toString()}  aria-label="amount" value={quantity} onChange={handleQuantityChange} />
                  <div className="d-block text-center">
                    <p className="mt-md-7 mb-4">¿Qué debería comprar? <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to sizes" data-container="body" data-animation="true"><i className="fas fa-question-circle ms-1"></i></span></p>
                    
                    <button
                      className="btn btn-dark btn-lg w-100"
                      onClick={() => handleAddToCart({
                        id, thumb_src, thumb_alt, title, price, color, sizes, position, category, stock
                      })}
                    >
                      Añadir al carrito
                    </button>
                    <button
                      className="btn btn-danger btn-lg w-100 mt-3"
                      onClick={() => handleRemoveFromCart(id)}
                    >
                      Quitar del carrito
                    </button>
                    <p className="mb-0 d-inline text-xl">
                      <i className="fas fa-shield-alt me-2"></i>
                      Calidad Premium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};