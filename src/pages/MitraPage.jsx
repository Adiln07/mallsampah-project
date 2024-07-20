import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MitraHero from '../components/Mitra/MitraHero'
import MitraContainer from '../components/Mitra/MitraContainer'
import { mitraData } from '../utils/Mitra'
import MitraApp from '../components/Mitra/MitraApp'

const MitraPage = () => {
  return (
    <div>
        <Header />
        <MitraHero />
        <MitraContainer mitras={mitraData()} />
        <MitraApp />
        <Footer />
    </div>
  )
}

export default MitraPage