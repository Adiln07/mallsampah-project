import Botoll from "../../assets/Image/Botol2.png";
import { Link } from "react-router-dom";
const SolusiHome = () => {
  return (
    <div className="xl:w-[75em] m-auto py-10">
      <div className="font-redhat flex  justify-center flex-col md:items-center lg:items-start lg:flex-row lg:gap-12 gap-20 ">
        <div className="text-black  lg:w-[20em]">
          <div className=" ">
            <h1 className="lg:text-5xl md:text-6xl text-5xl font-bold text-center lg:text-start ">
              Solusi Kami
            </h1>
            <p className=" text-2xl lg:text-xl text-center lg:text-start">
              Sebuah Teknologi Untuk <br /> Mengakhiri Sampah
            </p>
          </div>
          <Link to="">
            <div className="flex items-center justify-end m-auto lg:m-0 w-[15em] h-[2.5em] gap-6 bg-[#BEF9D5] rounded-full xl:mt-52 lg:mt-48 mt-8">
              <h1 className="font-bold text-xl">Ayo Cari Tahu! </h1>
              <div className="w-[3.5em] rounded-full h-full bg-[#7CE4A5] flex justify-center items-center">
                <div className="text-4xl">
                  <ion-icon
                    className=""
                    name="chevron-forward-outline"
                  ></ion-icon>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" xl:w-[25em] xl:h-[25em] lg:w-[21em] lg:h-[21em] md:w-[20em] md:h-[20em] w-[18em] h-[18em] m-auto lg:m-0 bg-[#28AF5D] flex justify-center items-center rounded-full">
          <img
            src={Botoll}
            alt=""
            className="absolute  xl:w-[35em] lg:w-[28em] md:w-[25em] w-[20em]"
          />
        </div>
        <div className="flex flex-col gap-4 text-black">
          <div className="xl:w-[22em] h-[7em] lg:w-[20em] md:w-[35em] w-[21em] m-auto bg-[#7CE4A5] rounded-xl flex flex-col justify-center">
            <h1 className="xl:text-xl lg:text-lg md:text-xl lg:text-start text-center font-bold lg:pl-4">
              For Everyone
            </h1>
            <p className="lg:pl-4 lg:text-sm xl:text-base lg:text-start text-center md:text-lg">
              Daur ulang sampah yang kamu hasilkan melalui aplikasi Mall sampah.
            </p>
          </div>
          <div className="xl:w-[22em] h-[7em] lg:w-[20em] md:w-[35em] w-[21em] m-auto bg-[#7CE4A5] rounded-xl flex flex-col justify-center">
            <h1 className="xl:text-xl lg:text-lg md:text-xl lg:text-start text-center font-bold lg:pl-4">
              For Business
            </h1>
            <p className="lg:pl-4 lg:text-sm xl:text-base lg:text-start text-center md:text-lg">
              Ciptakan bisnis dankantor ramah lingkungan dengan mendaur ualng
              sampah yang anda hasilkan.
            </p>
          </div>
          <div className="xl:w-[22em] h-[7em] lg:w-[20em] md:w-[35em] w-[21em] m-auto bg-[#7CE4A5] rounded-xl flex flex-col justify-center">
            <h1 className="xl:text-xl lg:text-lg md:text-xl lg:text-start text-center font-bold lg:pl-4">
              For Corporate & Brand
            </h1>
            <p className="lg:pl-4 lg:text-sm xl:text-base lg:text-start text-center md:text-lg">
              Teknologi kami membantu perusahaan/brand untuk mengumpulkan dan
              memulihkan produk pasca konsumsi mereka.
            </p>
          </div>
          <div className="xl:w-[22em] h-[7em] lg:w-[20em] md:w-[35em] w-[21em] m-auto bg-[#7CE4A5] rounded-xl flex flex-col justify-center">
            <h1 className="xl:text-xl lg:text-lg md:text-xl lg:text-start text-center font-bold lg:pl-4">
              For Goverment
            </h1>
            <p className="lg:pl-4 lg:text-sm xl:text-base lg:text-start text-center md:text-lg">
              Mallsampah menyediakan solusi teknologi pengelolaan sampah dan
              daur ulang bagi pemerintah kota dan desa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolusiHome;
