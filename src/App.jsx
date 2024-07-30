import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TentangKamiPage from "./pages/TentangKamiPage"
import MitraPage from "./pages/MitraPage"
import LayananPage from "./pages/Layanan/LayananPage"
import SolusiPage from "./pages/SolusiPage"
import BeritaPage from "./pages/BeritaPage"
import BeritaContent from "./pages/BeritaContent"
import ManajemenBerita from "./pages/Admin/ManajemenBerita"
import Berita from "./pages/Admin/Berita"
import EditBerita from "./pages/Admin/EditBerita"
import LoginAdmin from "./pages/Auth/LoginAdmin"



function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TentangKami" element={<TentangKamiPage />} />
        <Route path="/Mitra" element={<MitraPage />} />
        <Route path="/Layanan/:id" element={<LayananPage />} />
        <Route path="/Solusi/:id" element={<SolusiPage   />} />
        <Route path="/Berita" element={<BeritaPage   />} />
        <Route path="/Berita-Content" element={<BeritaContent   />} />
        <Route path="/Admin" element={<ManajemenBerita   />} />
        <Route path="/Form-Berita" element={<Berita   />} />
        <Route path="/Edit-Form-Berita" element={<EditBerita   />} />
        <Route path="/Login" element={<LoginAdmin   />} />
      </Routes>
    </div>
  )
}

export default App
