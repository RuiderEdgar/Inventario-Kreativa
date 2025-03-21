export const filteredByCadena = (data, filtro, setFilteredData) => {
  if (filtro === "") {
    setFilteredData(data);
    return;
  }

  const filtered = data.filter((registro) => {
    return registro.cadena.toLowerCase().includes(filtro.toLowerCase())
  })
  
  setFilteredData(filtered);
}

export const filteredByTienda = (data, filtro, setFilteredData) => {
  if (filtro === "") {
    setFilteredData(data);
    return;
  }

  const filtered = data.filter((registro) => {
    return registro.nombre_tienda.toLowerCase().includes(filtro.toLowerCase());
  });

  setFilteredData(filtered);
};