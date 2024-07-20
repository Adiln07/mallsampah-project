import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SolusiHeader from '../components/Solusi/SolusiHeader'
import SoluciContent from '../components/Solusi/SoluciContent'
import { solusiData } from "../utils/SolusiUtils/SolusiData"

const SolusiPage = () => {

  
  return (
    <div>
        <Header />
        <SolusiHeader  solusis={solusiData()}/>
        <SoluciContent solusis={solusiData()} />
        <Footer />
    </div>
  )
}

export default SolusiPage