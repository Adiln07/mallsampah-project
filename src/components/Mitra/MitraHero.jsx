import Mitra from "../../assets/Image/Mitra/Mitra.png"

const MitraHero = () => {
  return (
    <div className='pt-[5.2em] font-redhat text-black flex items-center justify-center xl:gap-24 lg:gap-5'>
        <div className="xl:w-[35em] lg:w-[30em] md:w-[25em] w-[20em] m-auto md:m-0 text-center md:text-start py-10 md:py-0">
            <h1 className="lg:text-5xl text-3xl font-bold " >Mitra MallSampah</h1>
            <p className=" text-xl pt-10 md:pt-0 ">Teknologi untuk pelaku daur ulang sampah di Indonesia. Bergabung, Terhubung dan Dapatkan Manfaatnya</p>
        </div>
        <img src={Mitra} alt="" className="lg:w-[30em] md:w-[20em] md:block hidden" />
    </div>
  )
}

export default MitraHero