import Coba from "../../assets/Image/Layanan/Pickup.jpg"
import { Link } from 'react-router-dom'

const BeritaCard = ({id, judul, deskripsi, url, tanggal }) => {
  return (
    <div>
        <Link to={`/Berita-Content/${id}`}>
        <div className='flex md:flex-row flex-col xl:bg-white lg:bg-white md:bg-white  md:gap-10 gap-5 xl:w-[70em] lg:w-[60em] md:w-[45em] w-[20em] justify-center '> 
        <img src={url} alt="" className='xl:w-[30em] lg:w-[25em] md:w-[20em] object-cover rounded-xl' />
        <div className='xl:w-[30em] lg:w-[25em] md:w-[20em] font-redhat text-black  flex flex-col gap-2'>
            <h1 className='font-bold xl:text-3xl lg:text-2xl text-lg'>{judul}</h1>
            <p className='xl:text-base lg:text-sm text-xs' >{tanggal}</p>
            <p className='xl:text-lg lg:text-base text-sm'>{deskripsi.substring(0, 350)}</p>
        </div>
    </div>
        </Link>
    </div>
    
  )
}

export default BeritaCard