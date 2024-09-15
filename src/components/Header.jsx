import { useState } from "react";
import Logo from "../assets/Image/logo/Logo.svg";
import Pickup from "../assets/Image/logo/layananLogo/mspick_up.svg";
import Dropoff from "../assets/Image/logo/layananLogo/msdrop_off.svg";
import Company from "../assets/Image/logo/layananLogo/ms_company.svg";
import Event from "../assets/Image/logo/layananLogo/ms_event.svg";
import Point from "../assets/Image/logo/layananLogo/ms_point.svg";
import Bills from "../assets/Image/logo/layananLogo/ms_bills.svg";

import Everyone from "../assets/Image/logo/SolusiLogo/everyone.svg";
import Business from "../assets/Image/logo/SolusiLogo/bussiness.svg";
import Corporate from "../assets/Image/logo/SolusiLogo/corporate.svg";
import Goverment from "../assets/Image/logo/SolusiLogo/government.svg";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-redhat ">
      <header className="bg-white  text-black fixed w-full z-50 top-0">
        <nav className=" flex lg:justify-center justify-between items-center gap-48 W-[92%] py-4  ">
          <div>
            <a href="/">
              <img src={Logo} alt="" className=" lg:w-48 w-42 pl-4 lg:pl-0" />
            </a>
          </div>
          <div
            className={`lg:static absolute  lg:min-h-fit min-h-[60vh] bg-white left-0 ${
              open ? "top-[100%]" : "top-[-1000%]"
            }  duration-700 lg:w-auto w-full flex items-center px-5 font-semibold`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center  lg:gap-[4vw] gap-10">
              <li>
                <a
                  href="/TentangKami"
                  className=" font-semibold hover:text-[#28AF5D]"
                >
                  Tentang Kami
                </a>
              </li>
              <li className="group">
                <a
                  tabIndex={0}
                  role=""
                  className=" font-semibold hover:text-[#28AF5D]"
                  href="#"
                >
                  Layanan
                </a>
                <ul
                  tabIndex={0}
                  className=" hidden group-hover:block lg:absolute  w-[20em]  bg-white text-black"
                >
                  <a href="/Layanan/0">
                    <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                      <div className="flex items-center px-5 ">
                        <img src={Pickup} alt="" className="w-8 lg:w-9" />
                        <h1 className="text-lg px-3">Pick Up</h1>
                      </div>
                    </li>
                  </a>

                  <a href="/Layanan/1">
                    <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                      <div className="flex items-center px-5 ">
                        <img src={Dropoff} alt="" className="w-8 lg:w-9" />
                        <h1 className="text-lg px-3">Drop Off</h1>
                      </div>
                    </li>
                  </a>

                  <a href="/Layanan/2">
                  <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                    <div className="flex items-center px-5 ">
                      <img src={Company} alt="" className="w-8 lg:w-9" />
                      <h1 className="text-lg px-3">Company</h1>
                    </div>
                  </li>
                  </a>

                  <a href="/Layanan/3">
                  <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                    <div className="flex items-center px-5 ">
                      <img src={Event} alt="" className="w-8 lg:w-9" />
                      <h1 className="text-lg px-3">Event</h1>
                    </div>
                  </li>
                  </a>

                  <a href="/Layanan/4">
                  <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                    <div className="flex items-center px-5 ">
                      <img src={Point} alt="" className="w-8 lg:w-9" />
                      <h1 className="text-lg px-3">Point</h1>
                    </div>
                  </li>
                  </a>

                  <a href="/Layanan/5">
                  <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                    <div className="flex items-center px-5 ">
                      <img src={Bills} alt="" className="w-8 lg:w-9" />
                      <h1 className="text-lg px-3">Bills</h1>
                    </div>
                  </li>
                  </a>
                </ul>
              </li>
              <li className="group">
                <a
                  tabIndex={0}
                  role=""
                  className=" font-semibold hover:text-[#28AF5D]"
                >
                  Solusi
                </a>
                <ul
                  tabIndex={0}
                  className=" hidden group-hover:block lg:absolute  w-[20em]  bg-white text-black"
                >
                  <a href="/Solusi/0">
                    <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                      <div className="flex items-center px-5 ">
                        <img src={Everyone} alt="" className="w-8 lg:w-9" />
                        <h1 className="text-lg px-3">Eveyone</h1>
                      </div>
                    </li>
                  </a>

                  <a href="/Solusi/1">
                    <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                      <div className="flex items-center px-5 ">
                        <img src={Business} alt="" className="w-8 lg:w-9" />
                        <h1 className="text-lg px-3">Business</h1>
                      </div>
                    </li>
                  </a>

                  <a href="/Solusi/2">
                    <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                      <div className="flex items-center px-5 ">
                        <img src={Corporate} alt="" className="w-8 lg:w-9" />
                        <h1 className="text-lg px-3">Corporate</h1>
                      </div>
                    </li>
                  </a>

                  <a href="/Solusi/3">
                    <li className=" py-4 hover:bg-[#28AF5D] hover:text-white">
                      <div className="flex items-center px-5 ">
                        <img src={Goverment} alt="" className="w-8 lg:w-9" />
                        <h1 className="text-lg px-3">Goverment</h1>
                      </div>
                    </li>
                  </a>
                </ul>
              </li>
              <li>
                <a
                  className=" font-semibold hover:text-[#28AF5D]"
                  href="/Mitra"
                >
                  Mitra
                </a>
              </li>
              <li>
                <a className=" font-semibold hover:text-[#28AF5D]" href="/Berita">
                  Berita
                </a>
              </li>
              <li>
                <a className=" font-semibold hover:text-[#28AF5D]" href="/Kontak">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
          <div className=" lg:hidden ">
            <div className="text-4xl flex items-center justify-center pr-3 lg:pr-0">
              <ion-icon
                name={!open ? "reorder-three-outline" : "close-outline"}
                className=" cursor-pointer"
                onClick={() => setOpen(!open)}
              ></ion-icon>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
