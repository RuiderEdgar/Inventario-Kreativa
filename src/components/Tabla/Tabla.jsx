import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { columns } from '../../helpers/columns';
import s from './Tabla.module.css'
import { useState } from 'react';

export const Tabla = ({ data }) => { 
  const [columnFilters, setColumnFilters] = useState([]);
  
  const tableInventarios = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualFiltering: false,
    enableColumnFilters: true,
    enableColumnFilter: true,
    enableFilters: true,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters
  });

  const limpiarFiltros = () => {
    tableInventarios.resetColumnFilters(); 
  };

  return (
    <main className={s.table_container}>
      <section className={s.filters_container}>
        <div>
          <span>Cadena:</span>
          <div className={s.input_container}>
            <input
              type="text"
              className={s.input}
              placeholder="Filtrar por Cadena"
              value={
                tableInventarios.getColumn("Cadena")?.getFilterValue() ?? ""
              }
              onChange={(e) => {
                tableInventarios
                  .getColumn("Cadena")
                  ?.setFilterValue(e.target.value.trimStart());
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>

        <div>
          <span>Tienda:</span>
          <div className={s.input_container}>
            <input
              type="text"
              className={s.input}
              placeholder="Filtrar por Tienda"
              value={
                tableInventarios.getColumn("NomTienda")?.getFilterValue() ?? ""
              }
              onChange={(e) =>
                tableInventarios
                  .getColumn("NomTienda")
                  ?.setFilterValue(e.target.value.trimStart())
              }
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>

        <div>
          <span>Formato:</span>
          <div className={s.input_container}>
            <input
              type="text"
              className={s.input}
              placeholder="Filtrar por Formato"
              value={
                tableInventarios.getColumn("Formato")?.getFilterValue() ?? ""
              }
              onChange={(e) =>
                tableInventarios
                  .getColumn("Formato")
                  ?.setFilterValue(e.target.value.trimStart())
              }
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>
      </section>

      <button className={s.cleanButton} onClick={() => limpiarFiltros()}>Limpiar filtros</button>

      <section className={s.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th colSpan="9" className={s.titleTable}>
                Inventarios
              </th>
            </tr>
            {tableInventarios.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInventarios.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className={s.navegacionContainer}>
        <button onClick={() => tableInventarios.setPageIndex(0)}>
          Primer Página
        </button>
        <button onClick={() => tableInventarios.previousPage()}>
          Página Anterior
        </button>
        <button onClick={() => tableInventarios.nextPage()}>
          Página Siguiente
        </button>
        <button
          onClick={() =>
            tableInventarios.setPageIndex(tableInventarios.getPageCount() - 1)
          }
        >
          Ultima Página
        </button>
      </div>
    </main>
  );
}