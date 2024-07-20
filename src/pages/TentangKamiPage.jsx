import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutContent from "../components/TentangKamiPage/AboutContent"
import AboutHero from "../components/TentangKamiPage/AboutHero"
import Media from "../components/TentangKamiPage/Media"
import { awards } from "../utils/Awards"
import { mediaData } from "../utils/Media"


const TentangKamiPage = () => {


  return (
    <div>
        <Header />
        <AboutHero />
        <AboutContent awardss={awards()} />
        <Media   medias={mediaData()} />
        <Footer />
    </div>
  )
}

export default TentangKamiPage