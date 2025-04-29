import { useEffect, useState, Suspense, lazy } from 'react'
import { Header, TablaSkeleton } from './ui'
const Tabla = lazy(() => import("./components/Tabla/Tabla.jsx"));
import { getDatos } from './data/dataInventarios'
import './InventariosApp.css'


function App() {
  
  const [dataInventarios, setDataInventarios] = useState([])
  
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
      <Suspense fallback={<TablaSkeleton/>}>
        <Tabla data={dataInventarios} />
      </Suspense>
    </>
  );
}

export default App
