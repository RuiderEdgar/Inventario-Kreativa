import { useState } from 'react'
import { Header } from './ui'
import { Buscar, Tabla } from './components'
import { inventarios } from './data/fakeData'
import './InventariosApp.css'

function App() {
  const [filteredData, setFilteredData] = useState(inventarios);

  //implementar funcion asincrona para hacer el fetch de los datos

  return (
    <>
      <Header />
      <Buscar setFilteredData={ setFilteredData } data={inventarios} />
      <Tabla data={ filteredData } />
    </>
  )
}

export default App
