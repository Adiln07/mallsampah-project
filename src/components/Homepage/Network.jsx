import Renet from "../../assets/Image/Network3.png";

const Network = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${Renet}')`,
      }}
      className=" w-full xl:h-[30em] lg:h-[25em] md:h-[15em] h-[8em]  m-auto bg-cover text-white font-redhat "
    >
        <div className="xl:pt-20 lg:pt-14 md:pt-10 pt-1">
            <h1 className="text-center xl:text-6xl lg:text-5xl md:text-3xl font-bold text-base">We Are The <br /> Recycling Network</h1>
            <p className="text-center xl:pt-5 lg:pt-3 xl:text-3xl lg:text-2xl md:text-xl text-sm">#ubahjadikebaikan</p>
        </div>
      
    </div>
  );
};

export default Network;
