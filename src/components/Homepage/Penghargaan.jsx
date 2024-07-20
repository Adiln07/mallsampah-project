
const Penghargaan = ({awardss}) => {

  return (
    <div className="font-redhat text-black py-10">
        <h1 className="text-center text-3xl font-bold">Penghargaan dan Pengakuan</h1>
        <div className="grid grid-cols-7 m-auto pt-10   xl:w-[70em] lg:w-[60em] md:w-[45em] w-[20em]">
        {awardss.map((award)=>(
            <div key={award.id}>
                <img src={award.image} alt="" />
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Penghargaan