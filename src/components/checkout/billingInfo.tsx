interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" checked />
        <label className="custom-control-label">Misma información de envío</label>
      </div>
    </>
  );
}

/*
import { useEffect, useState } from 'react';
import mysql from 'mysql';

interface Props {
  title: string;
}

export default function OrderSummary({}: Props) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Configura la conexión a la base de datos
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'username',
      password: 'password',
      database: 'database_name',
    });

    // Realiza la consulta a la base de datos
    connection.query('SELECT * FROM table_name', (error, results) => {
      if (error) {
        console.error('Error al obtener los datos:', error);
      } else {
        setData(results);
      }
    });

    // Cierra la conexión a la base de datos cuando el componente se desmonta
    return () => {
      connection.end();
    };
  }, []);

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" checked />
        <label className="custom-control-label">Misma información de envío</label>
      </div>

      {data && (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
*/