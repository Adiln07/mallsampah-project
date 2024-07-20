import { useParams } from "react-router-dom";
import Everyone from "../../assets/Image/Solusi/Everyone/Everyone.jpg";
import Msputih from "../../assets/Image/logo/Msputih.svg";


const SolusiHeader = ({solusis}) => {

  const { id } = useParams();

  return (
    <div>
      {solusis[id].header.map((solusi, index)=>(
          <div className={`pt-[6.2em] font-redhat ${solusi.color} `} key={index}>
          <div className="w-full xl:h-[26.8em] md:h-[24.8em] h-[25em] text-white flex lg:justify-end justify-center">
            <div className="flex items-center justify-center xl:gap-14 lg:gap-2">
              <div className=" xl:w-[32em] lg:w-[25em] md:w-[40em] w-[20em]">
                <div className="flex items-center gap-4 pb-3">
                  <img
                    src={Msputih}
                    alt=""
                    className=" xl:w-[3em] lg:w-[2.5em] w-[3em]"
                  />
  
                  <h1 className="xl:text-5xl lg:text-2xl text-3xl font-bold ">
                    {solusi.title}
                  </h1>
                </div>
                <h1 className="xl:text-3xl lg:text-xl md:text-2xl font-semibold text-xl">
                  {solusi.judul}
                </h1>
                <p className="xl:text-xl lg:text-lg text-xl pt-2">
                  {solusi.desk}
                </p>
              </div>
              <div className=" border-t-[4px] border-l-[4px] rounded-t-[15em] rounded-bl-[12em] pt-[1.5em] pl-10 hidden lg:block">
                <img
                  src={solusi.gambar}
                  alt=""
                  className=" xl:h-[25em] lg:h-[23em] xl:w-[40em] lg:w-[35em] object-cover rounded-t-[15em] rounded-bl-[12em]"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="pt-[6.2em] font-redhat bg-[#299E63] ">
        <div className="w-full xl:h-[26.8em] md:h-[24.8em] h-[25em] text-white flex lg:justify-end justify-center">
          <div className="flex items-center justify-center xl:gap-14 lg:gap-2">
            <div className=" xl:w-[32em] lg:w-[25em] md:w-[40em] w-[20em]">
              <div className="flex items-center gap-4 pb-3">
                <img
                  src={Msputih}
                  alt=""
                  className=" xl:w-[3em] lg:w-[2.5em] w-[3em]"
                />

                <h1 className="xl:text-5xl lg:text-2xl text-3xl font-bold ">
                  Everyone
                </h1>
              </div>
              <h1 className="xl:text-3xl lg:text-xl md:text-2xl font-semibold text-xl">
                Waste Less & Recycle More
              </h1>
              <p className="xl:text-xl lg:text-lg text-xl pt-2">
                Semua bisa mendaur ulang, dunia akan terlihat sangat berbeda
                jika semua orang memulai untuk mendaur ulang. Ambil langkahmu
                dan hentikan pencemaran laut terbesar sepanjang sejarah.
              </p>
            </div>
            <div className=" border-t-[4px] border-l-[4px] rounded-t-[15em] rounded-bl-[12em] pt-[1.5em] pl-10 hidden lg:block">
              <img
                src={Everyone}
                alt=""
                className=" xl:h-[25em] lg:h-[23em] xl:w-[40em] lg:w-[35em] object-cover rounded-t-[15em] rounded-bl-[12em]"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SolusiHeader;
