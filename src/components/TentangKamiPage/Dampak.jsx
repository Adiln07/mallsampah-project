import Earth from "../../assets/Image/logo/Dampak/Earth.png";
import Ekonomi from "../../assets/Image/logo/Dampak/Ekonomi.png";
import Health from "../../assets/Image/logo/Dampak/Health.png";
import Sosial from "../../assets/Image/logo/Dampak/Sosial.png";

const Dampak = () => {
  return (
    <div className="bg-[#299E63] py-5 m-auto text-white">
      <h1 className="text-center font-redhat font-bold text-3xl lg:text-4xl">
        Save The World
      </h1>
      <div className="py-5 lg:py-10 sm:flex  lg:w-[90%] m-auto">
        <div className="">
          <img
            src={Earth}
            alt=""
            className="bg-[#DAD7CD] m-auto w-36 lg:w-40 rounded-full"
          />
          <h2 className="text-center py-5 font-redhat font-bold text-2xl">
            Lingkungan
          </h2>
          <p className=" m-auto text-justify w-[80%] lg:w-[65%] font-roboto">
            Krisis sampah global bukan hanya mencemari ekosistem, tetapi juga
            menyumbang karbon dan mempercepat pemanasan global. Terlibatlah
            untuk mendaur ulang lebih banyak, ciptakan ekonomi sirkular mulai
            dari rumahmu.
          </p>
        </div>
        <div className="py-14  sm:py-0 ">
          <div className="w-36 lg:w-40 lg:h-40 h-36 bg-[#DAD7CD] rounded-full m-auto flex items-center justify-center ">
            <div className="">
              <img src={Ekonomi} alt="" className=" lg:w-36  w-32" />
            </div>
          </div>
          <h2 className="text-center py-5 font-redhat font-bold text-2xl">
            Ekonomi
          </h2>
          <p className=" m-auto text-justify w-[80%] lg:w-[65%] font-roboto">
          Polusi sampah plastik menimbulkan kerugian ekonomi yang tidak sedikit, dan bersekala global. Mallsampah mengubah sampahmu menjadi mata uang. Membawa ekonomi sirkular sekaligus inklusi ekonomi bagi semua orang.
          </p>
        </div>
        <div className="">
          <div className="w-36 lg:w-40 lg:h-40 h-36 bg-[#DAD7CD] rounded-full m-auto flex items-center justify-center ">
            <div className="">
              <img src={Sosial} alt="" className=" lg:w-36 w-32 " />
            </div>
          </div>
          <h2 className="text-center py-5 font-redhat font-bold text-2xl">
            Sosial
          </h2>
          <p className=" m-auto text-justify w-[80%] lg:w-[65%] font-roboto">
          Teknologi kami mendukung pekerjaan pengepul dan pemulung agar lebih efisien dan efektif. Meningkatkan kesejahteraan mereka, meningkatkan martabat mereka di masyarakat, dan menghapus batasan kelas antara miskin dan kaya.
          </p>
        </div>
        <div className="sm:py-0 py-10">
          <div className="w-36 lg:w-40 lg:h-40 h-36 bg-[#DAD7CD] rounded-full m-auto flex items-center justify-center ">
            <div className="">
              <img src={Health} alt="" className=" lg:w-36 w-32 " />
            </div>
          </div>
          <h2 className="text-center py-5 font-redhat font-bold text-2xl">
            Kesehatan
          </h2>
          <p className=" m-auto text-justify w-[80%] lg:w-[65%] font-roboto">
          Polusi sampah tidak hanya berdampak pada hewan laut dan estetika. Tetapi juga mencemari rantai makanan, termasuk di dalamnya manusia. Ikan, garam dan air yang kita minum mungkin saja mengandung mikro plastik. Daur ulang dengan Mallsampah..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dampak;
