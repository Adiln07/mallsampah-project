import Header from '../components/Header'
import Footer from '../components/Footer'
import BeritaHero from '../components/Berita/BeritaHero'
import BeritaContainer from '../components/Berita/BeritaContainer'

const BeritaPage = () => {
  return (
    <div>
        <Header/>
        <BeritaHero />
        <BeritaContainer />
        <Footer />
    </div>
  )
}

export default BeritaPage