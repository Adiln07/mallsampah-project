
import Kertas from "../../assets/Image/logo/SampahLogo/paper.svg"
import Plastik from "../../assets/Image/logo/SampahLogo/plastic.svg"
import Aluminium from "../../assets/Image/logo/SampahLogo/aluminium.svg"
import Logam from "../../assets/Image/logo/SampahLogo/ilogam.svg"
import Elektronik from "../../assets/Image/logo/SampahLogo/elektronik.svg"
import Botol from "../../assets/Image/logo/SampahLogo/botol.svg"
import Merek from "../../assets/Image/logo/SampahLogo/merek.svg"
import Khusus from "../../assets/Image/logo/SampahLogo/khusus.svg"

import { Link } from 'react-router-dom'
const JenisSampah = () => {
  return (
    <div className='font-redhat text-black py-10  xl:w-[75em] lg:w-[65em] m-auto'>
        <div className='xl:bg-transparent '>
            <h1 className='text-4xl font-bold lg:text-start text-center'>Jenis Sampah</h1>
            <p className='text-xl lg:text-start text-center'>Lihat semua jenis sampah yang kami daur ulang.</p>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 md:w-[40em]  lg:w-[50em] m-auto gap-y-14 pt-10'>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Kertas} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Kertas
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Plastik} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Plastik
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Aluminium} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Aluminium
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Logam} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-xl font-bold">
              Besi & Logam
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Elektronik} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Elektronik
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Botol} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Botol Kaca
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Merek} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Merek
            </p>
          </div>
        </Link>
        <Link to="#">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[10em] w-[10em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Khusus} alt="" className="w-[6em]" />
            <p className="group-hover:text-white text-2xl font-bold">
              Khusus
            </p>
          </div>
        </Link>
        </div>
    </div>
  )
}

export default JenisSampah