import { useEffect, useState } from 'react'
import { Header } from './ui'
import { Buscar, Tabla } from './components'
import { getDatos } from './data/dataInventarios'
import './InventariosApp.css'


function App() {
  
  const [dataInventarios, setDataInventarios] = useState([])
  // const [filteredData, setFilteredData] = useState(inventarios);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDatos();
      if (data) {
        const parsedData = Object.values(data);
        setDataInventarios(parsedData);
      }
    }

    fetchData();
  }, [])
  
  return (
    <>
      <Header />
      {/* <Buscar setFilteredData={ setFilteredData } data={inventarios} /> */}
      <Tabla data={dataInventarios} />
    </>
  )
}

export default App
