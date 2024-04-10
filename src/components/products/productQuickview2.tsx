import ProductSizes from './productSizes';
interface Props {
  id: string;
  thumb_src: string;
  title: string;
  price: number;
  full_description: string;
}

export default function ProductQuickview2({
  id,
  thumb_src,
  title,
  price,
  full_description
}: Props) {

  // Usar el id para generar identificadores únicos para el modal y el botón
  const modalId = `productModal-${id}`;
  const modalTarget = `#${modalId}`;

  return (
    <>
      <button type="button" className="btn btn-dark w-auto" data-bs-toggle="modal" data-bs-target={modalTarget}>
        Click
      </button>

      <div className="modal fade" id={modalId} role="dialog" aria-labelledby={modalId + 'Label'} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="card card-product">
              <div className="card-body d-block d-lg-flex p-4">
                <button type="button" className="btn-close text-dark position-absolute end-0 me-4" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="w-100 w-lg-50 text-center">
                  {thumb_src && <img className="w-100 rounded-3 mb-4 mt-5 mt-lg-0" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={title} />}
                </div>
                <div className="w-100 w-lg-50 ps-4 text-center">
                  {title && <h3 className="mt-md-5 mb-3 text-center">{title}</h3>}
                  {full_description && <h3 className="mt-md-5 mb-3 text-center">{full_description}</h3>}

                  {price && (
                    <>
                      <h4 className="text-center">${price.toLocaleString()}</h4>
                      <input className="opacity-0 d-none" defaultValue={price} />
                      <div className="d-flex justify-content-center mb-3"></div>
                    </>
                  )}
                  <div className="row">
                    <div className="col">
                      <input type="number" min="0" className="form-control" placeholder="1" aria-label="amount" />
                      <h6 className="-4">Tamaño</h6>
                      <div className="row mb-2">
                        <p className="mt-4">¿Qué debería comprar? <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to sizes" data-container="body" data-animation="true"><i className="fas fa-question-circle ms-1"></i></span></p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-block text-center">
                        <button className="btn btn-dark btn-lg w-100">Añadir al carrito</button>
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
        </div>
      </div>
    </>
  );
};