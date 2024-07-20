import { useParams } from "react-router-dom";

const HeaderLayanan = ({pickups}) => {

    const {id} = useParams()

  return (
    <div>
      {pickups[id].header.map((pickup, i)=>(
        <div className={`pt-[6.2em] font-redhat ${pickup.color} `} key={i}>
        <div className="w-full xl:h-[26.8em] md:h-[24.8em] h-[25em] text-white flex lg:justify-end justify-center">
          <div className="flex items-center justify-center xl:gap-14 lg:gap-2">
            <div className=" xl:w-[32em] lg:w-[25em] md:w-[40em] w-[20em]">
              <div className="flex items-center gap-4 pb-3">
                <div className="xl:w-[3.5em] xl:h-[3.5em] lg:w-[3em] lg:h-[3em] w-[3.5em] h-[3.5em] bg-white flex items-center justify-center rounded-xl  ">
                  <img
                    src={pickup.logo}
                    alt=""
                    className=" xl:w-[3em] lg:w-[2.5em] w-[3em]"
                  />
                </div>
                <h1 className="xl:text-5xl lg:text-2xl text-3xl font-bold ">
                  {pickup.judul}
                </h1>
              </div>
              <p className="xl:text-xl lg:text-lg text-xl pt-2">
                {pickup.desk}
              </p>
            </div>
            <div className=" border-t-[4px] border-l-[4px] rounded-t-[15em] rounded-bl-[12em] pt-[1.5em] pl-10 hidden lg:block">
              <img
                src={pickup.gambar}
                alt=""
                className=" xl:h-[25em] lg:h-[23em] xl:w-[40em] lg:w-[35em] object-cover rounded-t-[15em] rounded-bl-[12em]"
              />
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    // <div className="pt-[6.2em] font-redhat bg-[#299E63] ">
    //   <div className="w-full xl:h-[26.8em] md:h-[24.8em] h-[25em] text-white flex lg:justify-end justify-center">
    //     <div className="flex items-center justify-center xl:gap-14 lg:gap-2">
    //       <div className=" xl:w-[32em] lg:w-[25em] md:w-[40em] w-[20em]">
    //         <div className="flex items-center gap-4 pb-3">
    //           <div className="xl:w-[3.5em] xl:h-[3.5em] lg:w-[3em] lg:h-[3em] w-[3.5em] h-[3.5em] bg-white flex items-center justify-center rounded-xl  ">
    //             <img
    //               src={MsPickup}
    //               alt=""
    //               className=" xl:w-[3em] lg:w-[2.5em] w-[3em]"
    //             />
    //           </div>
    //           <h1 className="xl:text-5xl lg:text-2xl text-3xl font-bold ">
    //             Pick Up
    //           </h1>
    //         </div>
    //         <p className="xl:text-xl lg:text-lg text-xl pt-2">
    //           Foto sampah daur ulangmu, upload ke Aplikasi Mallsampah, kolektor
    //           Mallsampah terdekat akan menjemput, menimbang dan membayar
    //           sampahmu.{" "}
    //         </p>
    //       </div>
    //       <div className=" border-t-[4px] border-l-[4px] rounded-t-[15em] rounded-bl-[12em] pt-[1.5em] pl-10 hidden lg:block">
    //         <img
    //           src={Pickup}
    //           alt=""
    //           className=" xl:h-[25em] lg:h-[23em] xl:w-[40em] lg:w-[35em] object-cover rounded-t-[15em] rounded-bl-[12em]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeaderLayanan;
