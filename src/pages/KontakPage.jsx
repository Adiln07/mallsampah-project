import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const KontakPage = () => {
  return (
    <div>
        <Header />
        <div className=" pt-[4.2em] ">
            <div className="md:w-[40em] m-auto py-10 ">
                <h1 className="md:text-5xl md:text-start text-center font-redhat font-bold text-[#28AF5D] text-2xl">
                    Waktunya Mendaur Ulang Sampah
                </h1>
                <form action="" className="">
                    <div className="md:w-[40em] w-[20em]  m-auto md:mt-5 mt-3 flex flex-col gap-y-5">
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            className="  font-semibold input input-bordered  md:h-[3.5em] border-[#28AF5D] bg-white placeholder-black border-[3.5px]  w-full mt-5"
                        />
                        <input
                            type="text"
                            placeholder="Nomor Ponsel"
                            className=" md:h-[3.5em]  font-semibold input input-bordered border-[#28AF5D] bg-white placeholder-black border-[3.5px] w-full"
                        />
                        <input
                            type="text"
                            placeholder="Alamat Email"
                            className=" md:h-[3.5em]  font-semibold border-[#28AF5D] bg-white placeholder-black border-[3.5px] input input-bordered w-full"
                        />
                        <textarea
                            className="textarea block w-full h-28 mt-1 font-semibold border-[#28AF5D] bg-white placeholder-black border-[3.5px]"
                            placeholder="Harapan"
                        ></textarea>

                        <div className="text-end ">
                            <Link>
                                <button className="bg-[#28AF5D] text-white px-8 py-[0.5em] rounded-xl text-sm font-semibold font-roboto">
                                    Kirim
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default KontakPage