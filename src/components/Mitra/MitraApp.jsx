import React from 'react'
import Mitra from "../../assets/Image/Mitra/MitraApp.svg"
import gplay from "../../assets/Image/logo/gplay.svg"
import appstore from "../../assets/Image/logo/appstore.svg"
import { Link } from 'react-router-dom'

const MitraApp = () => {
  return (
    <div className=' mb-10 m-auto lg:w-[60em] lg:h-[35em] md:w-[45em] md:h-[30em] font-redhat text-black rounded-xl xl:bg-[#BEF9D5] lg:bg-red-400 md:bg-purple-400 bg-red-500 flex flex-col-reverse md:flex-row w-[20em] gap-10 md:gap-0 py-10 md:py-0 items-center justify-center'>
        <div className=' lg:w-[35em] md:w-[30em]'>
            <h1 className='md:text-5xl md:text-start text-center text-xl font-bold'>Download Aplikasinya dan Bergabunglah Menjadi Mitra Kami!</h1>
            <div className='flex md:flex-row flex-col items-center md:items-start gap-1 md:gap-5 md:pt-20  pt-5'>
                <Link><img src={gplay} alt="" /></Link>
                <Link><img src={appstore} alt="" /></Link>
            </div>
        </div>
        <img src={Mitra} alt="" className='lg:w-[15em] md:w-[12em]' />
    </div>
  )
}

export default MitraApp