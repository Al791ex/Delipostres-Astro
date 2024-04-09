interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-group">
        <label>Dirección</label>
        <input type="text" className="form-control" placeholder="Calle, número" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>Ciudad</label>
            <input type="text" className="form-control" placeholder="Ingresa la ciudad" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>País</label>
            <input type="text" className="form-control" placeholder="Ingresa tu país" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Código Postal</label>
            <input type="text" className="form-control" placeholder="Ingresa tu código postal" />
          </div>
        </div>
      </div>
    </>
  );
}