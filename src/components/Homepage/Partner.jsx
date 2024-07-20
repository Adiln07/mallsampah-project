

const Partner = ({amigoss}) => {

  return (
    <div className="font-redhat text-black py-10">
        <h1 className="text-center text-3xl font-bold">Partner Kami</h1>
        <div className="grid grid-cols-6 m-auto pt-10  gap-y-5 xl:w-[70em] lg:w-[60em] md:w-[45em] w-[20em]">
        {amigoss.map((amigo)=>(
            <div key={amigo.id}>
                <img src={amigo.image} alt="" />
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Partner