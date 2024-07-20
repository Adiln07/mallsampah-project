import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TentangKamiPage from "./pages/TentangKamiPage"
import MitraPage from "./pages/MitraPage"
import LayananPage from "./pages/Layanan/LayananPage"
import SolusiPage from "./pages/SolusiPage"



function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TentangKami" element={<TentangKamiPage />} />
        <Route path="/Mitra" element={<MitraPage />} />
        <Route path="/Layanan/:id" element={<LayananPage />} />
        <Route path="/Solusi/:id" element={<SolusiPage   />} />
      </Routes>
    </div>
  )
}

export default App
