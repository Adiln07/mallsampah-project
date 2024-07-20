import Botol from "../../assets/Image/botoll.png"

const Recycle = () => {
  return (
    <div className="font-redhat py-10">
      <div className="flex flex-col items-center md:pt-[14em] pt-20 relative">
        <div className=" bg-[#A6FFCA] lg:w-[40em] lg:h-[40em] md:w-[30em] md:h-[30em] w-[16em] h-[16em] rounded-full absolute opacity-100 md:top-[5em] top-[1em]">
          <h1 className=" text-black text-center font-bold md:text-6xl text-2xl absolute right-0 left-0 top-[-.9em] m-auto ">
            Recycling For <br /> Everyone
          </h1>
        </div>
        <div className=" flex-col md:flex-row  bg-[#28AF5D]  xl:w-[70em] lg:w-[65em] md:w-[45em] lg:h-[35em] md:h-[30em] w-[21em] rounded-xl z-[1] flex justify-center items-center lg:gap-[21em] md:gap-[15em] ">
            <h1 className="md:w-[6em] text-center md:text-start text-xl text-white  font-bold lg:text-6xl md:text-[2.6em] lg:leading-0 md:leading-10 w-[15em] py-10">Misi Kami Menyediakan Akses Daur Ulang Sampah Bagi Semua Orang</h1>
            <img src={Botol} alt=""  className="hidden md:block lg:w-[19em] md:w-[16em] top-[8.5em] absolute "/>
            <div className="flex flex-col gap-6 pb-5 md:pb-0 ">
                <div className="bg-[#7CE4A5] lg:w-[16em] md:w-[11em] py-3 rounded-full w-[18em] ">
                    <div className="flex  flex-col justify-center items-center font-bold text-black">
                      <h1 className="text-2xl">1jt KG+</h1>
                      <p className="lg:text-lg">Sampah Daur Ulang</p>
                    </div>
                </div>
                <div className="bg-[#7CE4A5] lg:w-[16em] md:w-[11em] py-3 rounded-full w-[18em] ">
                    <div className="flex  flex-col justify-center items-center font-bold text-black">
                      <h1 className="text-2xl">100+</h1>
                      <p className="lg:text-lg">Gudang Sortir</p>
                    </div>
                </div>
                <div className="bg-[#7CE4A5] lg:w-[16em] md:w-[11em] py-3 rounded-full w-[18em] ">
                    <div className="flex  flex-col justify-center items-center font-bold text-black">
                      <h1 className="text-2xl">500+</h1>
                      <p className="lg:text-lg">Kolektor Lokal</p>
                    </div>
                </div>
                <div className="bg-[#7CE4A5] lg:w-[16em] md:w-[11em] py-3 rounded-full w-[18em] ">
                    <div className="flex  flex-col justify-center items-center font-bold text-black">
                      <h1 className="text-2xl">30rb+</h1>
                      <p className="lg:text-lg">Pengguna</p>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Recycle;
