import { useState } from 'react'
import { Header } from './ui'
import { Buscar, Tabla } from './components'
import { inventarios } from './data/fakeData'
import './InventariosApp.css'
import { fetchData } from './data/drive.js'


function App() {
  const [filteredData, setFilteredData] = useState(inventarios);
  async function getData() {
    try{
      const data = await fetchData()
      console.log(data)
    } catch(e){
      console.log(e)
    }
  }
  getData()
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
