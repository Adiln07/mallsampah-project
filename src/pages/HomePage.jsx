import Header from "../components/Header"
import JenisSampah from "../components/Homepage/JenisSampah"
import LayananHome from "../components/Homepage/LayananHome"
import Network from "../components/Homepage/Network"
import Partner from "../components/Homepage/Partner"
import Penghargaan from "../components/Homepage/Penghargaan"
import Recycle from "../components/Homepage/Recycle"
import SolusiHome from "../components/Homepage/SolusiHome"
import Video from "../components/Homepage/Video"
import { penghargaanData } from "../utils/Penghargaan"
import { partnerData } from "../utils/Patner"
import Footer from "../components/Footer"

const HomePage = () => {

  const awards = penghargaanData();
  const amigos = partnerData();
  
  

  return (
    <div>
        <Header />
        <Video />
        <Recycle />
        <LayananHome />
        <SolusiHome />
        <Network />
        <JenisSampah />
        <Penghargaan awardss={awards} />
        <Partner amigoss={amigos} />
        <Footer />
    </div>
  )
}

export default HomePage