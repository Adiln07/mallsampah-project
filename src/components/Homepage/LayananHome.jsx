
import Pickup from "../../assets/Image/logo/layananLogo/mspick_up.svg";
import Dropoff from "../../assets/Image/logo/layananLogo/msdrop_off.svg";
import Company from "../../assets/Image/logo/layananLogo/ms_company.svg";
import Event from "../../assets/Image/logo/layananLogo/ms_event.svg";
import Point from "../../assets/Image/logo/layananLogo/ms_point.svg";
import Bills from "../../assets/Image/logo/layananLogo/ms_bills.svg";
import { Link } from "react-router-dom";

const LayananHome = () => {
  return (
    <div className="font-redhat py-10  m-auto  ">
      <h1 className=" text-black text-5xl font-bold xl:pl-36 lg:pl-8  lg:text-start text-center">Layanan</h1>
      <div className=" text-black flex flex-col md:grid grid-cols-2 gap-y-10 py-10 lg:w-[60em] md:w-[35em] m-auto">
        <Link to="/Layanan/0">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[13em] w-[13em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center "
          >
            <img src={Pickup} alt="" className="w-[8em]" />
            <p className="group-hover:text-white text-3xl font-bold">
              Pick Up
            </p>
          </div>
        </Link>
        <Link to="/Layanan/4">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[13em] w-[13em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Point} alt="" className="w-[8em]" />
            <p className="group-hover:text-white text-3xl font-bold">
              MS Point
            </p>
          </div>
        </Link>
        <Link to="/Layanan/1">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[13em] w-[13em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Dropoff} alt="" className="w-[8em]" />
            <p className="group-hover:text-white text-3xl font-bold">
              Drop Off
            </p>
          </div>
        </Link>
        <Link to="/Layanan/5">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[13em] w-[13em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Bills} alt="" className="w-[8em]" />
            <p className="group-hover:text-white text-3xl font-bold">
              MS Bills
            </p>
          </div>
        </Link>
        <Link to="/Layanan/2">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[13em] w-[13em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Company} alt="" className="w-[8em]" />
            <p className="group-hover:text-white text-3xl font-bold">
              Company 
            </p>
          </div>
        </Link>
        <Link to="/Layanan/3">
          <div
            style={{
              boxShadow: "7px 10px 0px #d9d9d9 ",
            }}
            className=" group h-[13em] w-[13em] bg-white m-auto rounded-lg hover:bg-[#28AF5D] flex flex-col justify-center gap-3 items-center"
          >
            <img src={Event} alt="" className="w-[8em]" />
            <p className="group-hover:text-white text-3xl font-bold">
              Event
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LayananHome;
