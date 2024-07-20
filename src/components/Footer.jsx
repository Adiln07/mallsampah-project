import Linkedin from "../assets/Image/logo/Sosial/Linkedin.png";
import Facebook from "../assets/Image/logo/Sosial/Facebook.png";
import Youtube from "../assets/Image/logo/Sosial/Youtube.png";
import Whatsapp from "../assets/Image/logo/Sosial/Whatsapp.png";
import Twitter from "../assets/Image/logo/Sosial/Twitter.png";
import Instagram from "../assets/Image/logo/Sosial/Instagram.png";
import Google from "../assets/Image/logo/gplay.svg";
import Apple from "../assets/Image/logo/appstore.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-redhat text-white bg-[#222D33]  w-full pb-10">
      <div className=" md:h-[18em]   flex justify-center xl:gap-44 pt-10 md:flex-row flex-col  lg:gap-20 md:gap-7 gap-5">
        <div className=" lg:w-[20em] md:w-[15em] w-[21em] md:m-0 m-auto">
          <p className=" font-lg xl:text-base lg:text-sm md:text-[.8em] text-center md:text-start md:text-base font-semibold">
            Mallsampah adalah platform daur ulang online yang menghubungkan
            pengguna dengan pemulung dan pengepul. Mereka telah mendaur ulang
            lebih dari 1 juta kg sampah, memiliki 100+ gudang sortir, 500+
            kolektor lokal, dan 30.000+ pengguna.
          </p>
          <div className="flex pt-5 gap-3 md:justify-start justify-center">
            <Link>
              <img src={Linkedin} alt="" className="lg:w-10 md:w-6 w-10 " />
            </Link>
            <Link>
              <img src={Facebook} alt="" className="lg:w-10 md:w-6 w-10 " />
            </Link>
            <Link>
              <img src={Whatsapp} alt="" className="lg:w-10 md:w-6 w-10 " />
            </Link>
            <Link>
              <img src={Youtube} alt="" className="lg:w-10 md:w-6 w-10 " />
            </Link>
            <Link>
              <img src={Twitter} alt="" className="lg:w-10 md:w-6 w-10 " />
            </Link>
            <Link>
              <img src={Instagram} alt="" className="lg:w-10 md:w-6 w-10 " />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-5 md:pl-0">
          <h1 className="text-lg font-bold">Mallsampah</h1>
          <Link>
            <p>Tentang Kami</p>
          </Link>
          <Link>
            <p>Layanan</p>
          </Link>
          <Link>
            <p>Mitra</p>
          </Link>
          <Link>
            <p>Blog</p>
          </Link>
        </div>
        <div className="flex flex-col gap-5 pl-5 md:pl-0">
          <h1 className=" text-lg font-bold">Solusi Kami</h1>
          <Link>
            <p>Everyone</p>
          </Link>
          <Link>
            <p>Business</p>
          </Link>
          <Link>
            <p>Corporate & Brand</p>
          </Link>
          <Link>
            <p>Goverment</p>
          </Link>
        </div>

        <div className="flex flex-col gap-5 pl-5 md:pl-0"> 
          <h1 className="text-lg font-bold">Download</h1>
          <img src={Google} alt="" className="w-48 md:w-fit" />
          <img src={Apple} alt="" className="w-48 md:w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
