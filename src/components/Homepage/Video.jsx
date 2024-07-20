import Mallsampah from "../../assets/video/mallsampah.mp4"
import Google from "../../assets/Image/logo/gplay.svg"
import Apple from "../../assets/Image/logo/appstore.svg"

const Video = () => {
  return ( 
    <div className="font-redhat pt-[4.2em]">
        <video src={Mallsampah} autoPlay loop muted className='h-[90vh] object-cover w-[100%]'/>
        <div className="absolute w-[100%] h-[100%] top-0 flex flex-col justify-center items-center text-white">
            <h1 className="md:text-6xl text-3xl font-bold">Join Our Movement</h1>
            <p className="md:text-3xl  text-2xl pt-2 font-semibold">#ubahjadikebaikan</p>
            <div className="flex pt-4 gap-4">
              <img src={Google} alt="" className=" md:w-48 w-36 " />
              <img src={Apple} alt=""  className=" md:w-48 w-36 "/>
            </div>
        </div>
    </div>
  )
}

export default Video