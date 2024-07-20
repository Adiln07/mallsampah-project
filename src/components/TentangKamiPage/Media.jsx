
const Media = ({medias}) => {
  return (
    <div className="font-redhat text-black py-10">
        <h1 className="text-center text-3xl font-bold">Partner Kami</h1>
        <div className="grid grid-cols-5 m-auto pt-10  gap-y-5 xl:w-[70em] lg:w-[60em] md:w-[45em] w-[20em]">
        {medias.map((media)=>(
            <div key={media.id}>
                <img src={media.image} alt="" />
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Media