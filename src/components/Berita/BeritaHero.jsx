import Msputih from "../../assets/Image/logo/Msputih.svg"
import Berita from "../../assets/Image/Berita/BeritaHero.jpg"

const BeritaHero = () => {
  return (
    <div className="pt-[6.2em] font-redhat bg-[#299E63] ">
      <div
        className="w-full xl:h-[26.8em] md:h-[24.8em] h-[25em] text-white flex lg:justify-end justify-center"
        
      >
        <div className="flex items-center justify-center xl:gap-14 lg:gap-2">
        <div className=" xl:w-[32em] lg:w-[25em] md:w-[40em] w-[20em]">
          <div className="flex items-center gap-4 pb-3">
            <img src={Msputih} alt="" className=" xl:w-[3em] lg:w-[2.5em] w-[3em]" />
            <h1 className="xl:text-5xl lg:text-2xl text-3xl font-bold ">Blog</h1>
          </div>
          <h1 className="xl:text-3xl lg:text-xl md:text-2xl font-semibold text-xl">Berita dan Artikel dari Mall Sampah</h1>
          <p className="xl:text-xl lg:text-lg text-xl pt-5">#ubahjadikebaikan</p>

        </div>
        <div className=" border-t-[4px] border-l-[4px] rounded-t-[15em] rounded-bl-[12em] pt-[1.5em] pl-10 hidden lg:block">
          <img
            src={Berita}
            alt=""
            className=" xl:h-[25em] lg:h-[23em] xl:w-[40em] lg:w-[35em] object-cover rounded-t-[15em] rounded-bl-[12em]"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default BeritaHero