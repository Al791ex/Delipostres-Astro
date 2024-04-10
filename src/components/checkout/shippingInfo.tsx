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
    </>
  );
}