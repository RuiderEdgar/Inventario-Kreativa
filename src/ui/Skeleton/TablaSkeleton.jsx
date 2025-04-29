import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from "../../components/Tabla/Tabla.module.css";

export const TablaSkeleton = () => {
  return (
    <main className={s.table_container}>
      <section className={s.filters_container}>
        <div>
          <span>Cadena:</span>
          <div className={s.input_container}>
            <input type="text" className={s.input} />
            <Skeleton />
          </div>
        </div>

        <div>
          <span>Tienda:</span>
          <div className={s.input_container}>
            <input type="text" className={s.input} />
            <Skeleton />
          </div>
        </div>

        <div>
          <span>Formato:</span>
          <div className={s.input_container}>
            <input type="text" className={s.input} />
            <Skeleton />
          </div>
        </div>
      </section>

      <button className={s.cleanButton}>Limpiar filtros</button>

      <section className={s.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th colSpan="9" className={s.titleTable}>
                Inventarios
              </th>
            </tr>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
              <th>
                <Skeleton />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
            </tr>
            <tr>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
            </tr>
            <tr>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
            </tr>
            <tr>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
            </tr>
            <tr>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
              <td><Skeleton/></td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className={s.navegacionContainer}>
        <button>Primer Página</button>
        <button>Página Anterior</button>
        <button>Página Siguiente</button>
        <button>Ultima Página</button>
      </div>
    </main>
  );
};
