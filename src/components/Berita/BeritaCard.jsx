import Coba from "../../assets/Image/Layanan/Pickup.jpg"
import { Link } from 'react-router-dom'

const BeritaCard = () => {
  return (
    <div>
        <Link to="#">
        <div className='flex md:flex-row flex-col xl:bg-white lg:bg-white md:bg-white  md:gap-10 gap-5 xl:w-[70em] lg:w-[60em] md:w-[45em] w-[20em] justify-center '> 
        <img src={Coba} alt="" className='xl:w-[30em] lg:w-[25em] md:w-[20em] object-cover rounded-xl' />
        <div className='xl:w-[30em] lg:w-[25em] md:w-[20em] font-redhat text-black  flex flex-col gap-2'>
            <h1 className='font-bold xl:text-3xl lg:text-2xl text-lg'>Mallsampah Box: Cara Kekinian Menukar Sampah Jadi E-Wallet</h1>
            <p className='xl:text-base lg:text-sm text-xs' >7 Desember 2021</p>
            <p className='xl:text-lg lg:text-base text-sm'>Pada 7 Desember 2021, Mallsampah meluncurkan Ms Box, sebuah Reverse Vending Machine (RVM) inovatif untuk mendukung daur ulang botol plastik. Inisiatif ini melibatkan kemitraan dengan Kopi Soe dan mendapatkan dukungan positif dari GreenMakers. </p>
        </div>
    </div>
        </Link>
    </div>
    
  )
}

export default BeritaCard