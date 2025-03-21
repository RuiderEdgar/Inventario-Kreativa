import s from './Tabla.module.css'

export const Tabla = ({ data }) => {

  return (
    <main className={s.table_container}>
      <table>
        <thead>
          <tr>
            <th colSpan="6" className={s.titleTable}>
              Inventarios
            </th>
          </tr>
          <tr>
            <th className={`${s.th} ${s.nuTienda}`}>No. Tienda</th>
            <th className={s.th}>Nombre Tienda</th>
            <th className={`${s.th} ${s.articulo}`}>Artículo</th>
            <th className={`${s.th} ${s.upc}`}>UPC</th>
            <th className={`${s.th} ${s.piezas}`}>Suma OH Piezas</th>
            <th className={s.th}>Tránsito</th>
          </tr>
        </thead>
        <tbody>
          {data.map((registro, index) => {
            return (
              <tr key={index}>
                <td className={s.nuTienda}>{registro.no_tienda}</td>
                <td>{registro.nombre_tienda}</td>
                <td>{registro.articulo}</td>
                <td className={s.upc}>{registro.upc}</td>
                <td className={s.piezas}>{registro.suma_oh_piezas}</td>
                <td>{registro.transito}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
