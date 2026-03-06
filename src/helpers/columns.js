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
    accessorKey: "Nombre Tienda",
    header: "Nombre Tienda",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "Formato",
    header: "Formato",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "Articulo",
    header: "Articulo",
  },
  {
    accessorKey: "UPC",
    header: "UPC",
  },
  {
    accessorKey: "Inventario",
    header: "Inventario",
  },
  {
    accessorKey: "Transito",
    header: "Tránsito",
  },
  {
    accessorKey: "Fecha",
    header: "Fecha",
  },
];
