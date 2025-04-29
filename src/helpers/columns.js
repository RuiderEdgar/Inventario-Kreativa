export const columns = [
  {
    accessorKey: "NumTienda",
    header: "No. Tienda",
  },
  {
    accessorKey: "Cadena",
    header: "Cadena",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "NomTienda",
    header: "Nombre Tienda",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "Formato",
    header: "Formato",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "Descripcion",
    header: "Articulo",
  },
  {
    accessorKey: "UPC",
    header: "UPC",
  },
  {
    accessorKey: "OH Piezas",
    header: "Suma OH Piezas",
  },
  {
    accessorKey: "IT Piezas",
    header: "Tránsito",
  },
  {
    accessorKey: "Tiempo",
    header: "Fecha",
  },
];