import React from 'react'

const SolusiCard = ({title, deskripsi, image}) => {
  return (
    <div
      className=" m-auto lg:w-[50em] lg:h-[20em] md:w-[45em] md:h-[15em] w-[20em] h-[35em] bg-cover rounded-2xl my-10 bg-center font-redhat group flex relative"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
        <h1 className="text-4xl text-[white] font-bold pt-3 pl-5  "
            style={{
                textShadow:"3px 5px 1px black"
            }}
        >{title}</h1>
        <div className="lg:w-[50em] lg:h-[20em] md:w-[45em] md:h-[15em] absolute opacity-0  bg-[#D1FFD3]  rounded-2xl inset-0  group-hover:opacity-100  transition-all duration-500 flex justify-center items-center">
            <div className=" lg:w-[45em] md:w-[40em] w-[18em]">
                <h1 className="md:text-4xl text-2xl font-bold" >{title}</h1>
                <p className="pt-5 md:text-lg">{deskripsi}</p>
            </div>

        </div>
    </div>
  )
}

export default SolusiCard