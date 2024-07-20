import Gallery from "../../assets/Image/TentangKami/Gallery.jpg";
import DaurUlang from "../../assets/Image/TentangKami/DaurUlang.svg";
import Solusi from "./Solusi";
import Dampak from "./Dampak";
import Awards from "./Awards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutContent = ({ awardss }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="font-redhat text-black pt-10">
      <div className="xl:w-[70em] lg:w-[60em] md:w-[45em] w-[20em] bg-[#7ce9a6]   m-auto rounded-xl flex md:flex-row flex-col-reverse justify-between items-center my-10 ">
        <div className="xl:w-[45em] md:px-0 px-5 py-5 flex flex-col gap-4 lg:pl-10 md:pl-5">
          <h1 className="xl:text-4xl lg:text-3xl md:text-lg font-bold ">
            Mallsampah di desain untuk menangkap sampah dari sumbernya, dengan
            ukuran paling kecil sekalipun
          </h1>
          <p className="lg:text-lg md:text-sm">
            Kami menggunakan jejaring pengepul dan pemulung lokal sebagai
            infrastruktur daur ulang digital yang setara dengan infrastruktur
            fisik di negara negara maju. kami percaya, dengan membawa sektor
            dengan membawa sektor informal ini ke ekosistem digital, dapat
            mempercepat tujuan kita bersama untuk bebas dari polusi sampah pada
            tahun 2025.
          </p>
        </div>
        <img
          src={Gallery}
          alt=""
          className="lg:w-[20em] md:w-[15em] rounded-xl w-[20em]"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center py-10 gap-[5em]">
        <img
          src={DaurUlang}
          alt=""
          className="lg:w-[15em] md:w-[10em] w-[15em]"
        />
        <div className="xl:w-[50em] lg:w-[40em] md:w-[30em] w-[20em] bg-[#D9D9D9]  py-6 rounded-xl flex flex-col gap-5 md:px-10 px-3">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold ">
            Misi Kami Menyediakan Akses Daur Ulang Bagi semua orang
          </h1>
          <p className="xl:text-lg ">
            Puluhan juta ton sampah dihasilkan setiap tahun, sementara angka
            daur ulang nasional masih dibawah 10%. Sebagian besar sampah
            diangkut ke TPA, dibuang illegal atau berakhir dilautan. Layaknya
            Negara berkembang, kita terbatas pada infrastruktur lingkungan yang
            maju. lalu bagaimana solusinya ? <br />
            <br /> Kita memiliki 3.000.000+ pengepul dan pemulung lokal yang
            tersebar di seluruh indonesia, mereka memiliki infrastruktur,
            berjejaring, dan terus berkembang secara tradisional. Ini adalah
            solusi yang kami lihat, Masalahnya tidak banyak yang mendukung
            pekerjaan mereka. Padahal pengepul dan pemulung adalah kunci dari
            rantai daur ulang di Indonesia dan Negara berkembang lainnya. Jika
            mereka sebagai kunci rantai daur ulang? mengapa tidak menggunakan
            kuncinya dengan baik ?{" "}
          </p>
        </div>
      </div>
      <Solusi />
      <Dampak />
      <div className="bg-[#DCFBE8] py-10 font-redhat">
        <div className=" lg:w-[60em] md:w-[45em] w-[20em] m-auto"> 
          <h1 className="text-center text font-bold text-4xl">Penghargaan</h1>
          <Slider {...settings}>
            {awardss.map((award) => (
              <Awards key={award.id} {...award} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
