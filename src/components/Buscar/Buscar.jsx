import { useEffect, useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { filteredByCadena, filteredByTienda } from "../../helpers";
import s from './Buscar.module.css'

export const Buscar = ({data, setFilteredData}) => {
  const filters = ["Cadena", "Tienda"];
  const [selected, setSelected] = useState("-Seleccione una opción-");
  const [filterByCadena, setFilterByCadena] = useState("");
  const [filterByTienda, setFilterByTienda] = useState("");

  // Capturando lo que el usuario esta escribiendo
  const handleFilterByCadena = (e) => {
    setFilterByCadena(e.target.value);
  };
  const handleFilterByTienda = (e) => {
    setFilterByTienda(e.target.value);
  };

  useEffect(() => {
    //Limpiando los input cuando se cambia el filtro a usar
    if (selected !== "Cadena") {
      setFilterByCadena("");
    }
    if (selected !== "Tienda") {
      setFilterByTienda("");
    }
    
  }, [selected])
  
  //Aplicando los filtros
  useEffect(() => {
      filteredByCadena(data, filterByCadena, setFilteredData)
  }, [data, filterByCadena, setFilteredData])

  useEffect(() => {
      filteredByTienda(data, filterByTienda, setFilteredData)
  }, [data, filterByTienda, setFilteredData])

  return (
    <div className={s.container}>
      {/* //Listbox */}
      <div className={s.firstForm}>
        <span className={s.spanForm}>Buscar por: </span>
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton className={s.listbox}>
            <div className={s.container_listbox}>
              <span className={s.textListbox}>{selected}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffc629"
                stroke="black"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className="absolute w-80 mt-2 bg-yellow-400 text-black  shadow-md  border-black"
          >
            {filters.map((filter, index) => (
              <ListboxOption
                key={index}
                value={filter}
                className="cursor-pointer h-9 border-1 text-xl text-center hover:bg-yellow-500 flex justify-center items-center"
              >
                {filter}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>

      {/* //Filtro Tienda */}
      <div className={`${s.secondForm} ${selected !== "Tienda" ? s.hide : ""}`}>
        <span>Introduce el nombre de la tienda:</span>
        <div className={s.input_container}>
          <input
            type="text"
            className={s.input}
            placeholder="Ej. Walmart plaza oriente"
            value={filterByTienda}
            onChange={handleFilterByTienda}
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

      {/* //Filtro Cadena */}
      <div className={`${s.secondForm} ${selected !== "Cadena" ? s.hide : ""}`}>
        <span>Introduce el nombre de la cadena:</span>
        <div className={s.input_container}>
          <input
            type="text"
            className={s.input}
            placeholder="Ej. Walmart"
            value={filterByCadena}
            onChange={handleFilterByCadena}
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
    </div>
  );
}
