import ProductBadge from './productBadge';
import ProductSizes from './productSizes';
import ProductGallery from './productGallery'


interface Props {
  thumb_src: string;
  title: string;
  price: number;
  rating: number;
  sizes: Map<string,number>;
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductQuickview({
  thumb_src,
  title,
  price,
  rating,
  sizes,
  images
}: Props) {

  return (
    <>
    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
      
      Vista rápida del producto
    </button>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="card card-product">
            <div className="card-body d-block d-lg-flex p-4">
              <button type="button" className="btn-close text-dark position-absolute me-4 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
              {(thumb_src) && 
                <ProductGallery images={images} />
              }
              <div className="w-100 w-lg-70 ps-lg-5 mt-4 mt-md-5">
                <div className="d-flex align-items-center">
                  {(title.length != 0) && 
                    <h3 className="me-4">{title}</h3>
                  }
                {(price) && 
                  <>
                    <div className="d-flex">
                      <h4 className="mb-0">${price.toLocaleString()}</h4>
                      <input className="opacity-0 d-none" defaultValue={price} />
                    </div>
                  </>
                }
                </div>

                <p className="mt-4">sadasdas.</p>
                {(sizes.size != 0) && 
                  <ProductSizes sizes={sizes}/>
                }
                <div className="d-block text-center">
                  <button className="btn btn-dark w-100"> Verificar Compra </button>
                  <button className="btn btn-white w-100"> Continuar Compra </button>
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