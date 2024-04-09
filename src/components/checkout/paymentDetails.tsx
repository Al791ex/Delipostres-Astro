export default function OrderSummary() {
  return (
    <>
      <div className="form-group">
        <label>Número de tarjeta</label>
        <input type="text" className="form-control" placeholder="Ingresa tu número de tarjeta" />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Fecha de expiración (MM/YY)</label>
            <input type="text" className="form-control" placeholder="Ingresa la fecha" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CVC</label>
            <input type="text" className="form-control" placeholder="Ingresa los 3 dígitos" />
          </div>
        </div>
      </div>
    </>
  );
}