import React, { useState } from 'react'
import HeaderForm from '../../components/Admin/HeaderForm'

const Berita = () => {

    const [title, setTitle] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [date, setDate ] = useState('')
    // const [file, setFile ] = useState('')

  return (
    <div>
        <HeaderForm />

        <div className="flex w-full justify-center items-center py-10 font-inter bg-[#a9a9a9]">
            <div className="lg:w-[55em] md:h-[41em] md:w-[45em] h-[38em] w-[21em] bg-[white] m-auto rounded-lg">
                <form action="" className="">
                    <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                        <h1 className="md:text-4xl text-3xl font-bold  color-black">
                            Isi Berita 
                        </h1>
                        <div className="mt-5">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input input-bordered  md:h-[3.5em] border-[black] bg-[#a9a9a9] placeholder-black   w-full mt-1 "
                                value={title}
                                onChange={ (e)=>setTitle(e.target.value)}
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Gambar
                            </label>
                            <input
                                type="file"
                                className="file-input md:h-[3.5em] border-[black] bg-[#a9a9a9] placeholder-black   w-full mt-1 flex items-center justify-center "
                                // onChange={loadImage}
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Tanggal
                            </label>
                            <input
                                type="date"
                                placeholder="Tanggal"
                                className="input input-bordered  md:h-[3.5em] border-[black] bg-[#a9a9a9] placeholder-black   w-full mt-1 "
                                value={date}
                                onChange={(e)=> setDate(e.target.value)}
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                className="textarea block w-full h-28 mt-1 border-[black] bg-[#a9a9a9] placeholder-black"
                                placeholder="Deskripsi Berita"
                                value={deskripsi}
                                onChange={(e)=> setDeskripsi(e.target.value)}
                            ></textarea>
                        </div>
                        
                            <button className="btn bg-[black] hover:bg-[#a9a9a9] mt-2  text-white text-lg w-full" type='submit'>
                                Submit
                            </button>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Berita