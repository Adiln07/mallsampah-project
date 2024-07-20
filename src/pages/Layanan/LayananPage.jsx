import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderLayanan from '../../components/Layanan/HeaderLayanan'
import LayananContent from '../../components/Layanan/Pickup/LayananContent'
import { pickupData } from '../../utils/LayananUtils/PickupData'

const PickupPage = () => {
  return (
    <div>
        <Header />
        <HeaderLayanan pickups={pickupData()} />
        <LayananContent pickups={pickupData()} />
        <Footer />
    </div>
  )
}

export default PickupPage