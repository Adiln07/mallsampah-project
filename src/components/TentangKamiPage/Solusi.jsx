import Everyone from "../../assets/Image/logo/SolusiLogo/everyone.svg"
import Bussiness from "../../assets/Image/logo/SolusiLogo/bussiness.svg"
import Corporate from "../../assets/Image/logo/SolusiLogo/corporate.svg"
import Government from "../../assets/Image/logo/SolusiLogo/government.svg"
import { Link } from 'react-router-dom'
const Solusi = () => {
  return (
    <div className="py-10">
      <h1 className="font-redhat font-bold text-black text-4xl text-center">
        Solusi Kami
      </h1>
      <div className="py-10 grid  xl:w-[70em] lg:grid-cols-4 md:grid-cols-2 md:w-[35em] lg:w-full gap-y-5 lg:gap-y-0 m-auto ">
        <div className=" w-[15em] h-[17em]  m-auto border-2 border-black  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Everyone}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-black font-redhat font-bold text-xl">
              For Everyone
            </h1>
          </div>
          <p className="font-roboto text-black text-center w-[90%] h-[8.5em] m-auto py-5">
            Ambil langkahmu dan hentikan pencemaran laut terbesar sepanjang
            sejarah dengan daur ulang sampah.{" "}
          </p>
          <div className="text-center ">
            <Link to="/Solusi/0">
              <button className="bg-[#299E63] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[15em] h-[17em]  m-auto border-2 border-black  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Bussiness}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-black font-redhat font-bold text-xl">
              Business
            </h1>
          </div>
          <p className="font-roboto text-black text-center w-[90%] h-[8.5em] m-auto py-5">
            Ciptakan bisnis dan kantor ramah lingkungan dengan mendaur ulang
            sampah yang Anda hasilkan.
          </p>
          <div className="text-center ">
            <Link to="/Solusi/1">
              <button className="bg-[#299E63] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[15em] h-[17em]  m-auto border-2 border-black  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Corporate}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-black font-redhat font-bold text-base">
              Corporate & Brand
            </h1>
          </div>
          <p className="font-roboto text-black text-center w-[90%] h-[8.5em] m-auto py-5">
            membantu perusahaan/brand untuk mengumpulkan dan memulihkan produk
            pasca konsumsi mereka.
          </p>
          <div className="text-center ">
            <Link to='/Solusi/2'>
              <button className="bg-[#299E63] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[15em] h-[17em] m-auto border-2 border-black  rounded-xl">
          <div className="flex  items-center justify-start ml-4 pt-4 gap-4">
            <img
              src={Government}
              alt=""
              className="w-[3em] rounded-3xl object-cover"
            />
            <h1 className="text-black font-redhat font-bold text-xl">
              Goverment{" "}
            </h1>
          </div>
          <p className="font-roboto text-black text-center w-[90%] h-[8.5em] m-auto py-5">
            solusi teknologi pengelolaan sampah dan daur ulang bagi pemerintah
            kota dan desa
          </p>
          <div className="text-center ">
            <Link to="/Solusi/3"> 
              <button className="bg-[#299E63] text-white mb-5 px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Solusi