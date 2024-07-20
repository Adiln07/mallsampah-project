
const Awards = ({ judul, event, deskripsi, image }) => {
  return (
    <div className="flex justify-center py-10 items-center">
      <div className="lg:w-[60em] md:w-[45em] w-[20em]  bg-white h-[30em] flex flex-col  justify-center px-5 ">
        <h1 className="md:text-4xl text-2xl font-bold">{judul}</h1>
        <div className="flex justify-center items-center gap-5 pt-10">
          <div>
            <h1 className="text-2xl font-bold">{event}</h1>
            <p className="text-lg pt-5">
              {deskripsi}
            </p>
          </div>
          <img
            src={image}
            alt=""
            className="lg:w-[30em] md:w-[20em] w-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
