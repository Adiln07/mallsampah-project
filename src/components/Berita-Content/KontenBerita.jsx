import Coba from "../../assets/Image/Layanan/Pickup.jpg"

const KontenBerita = () => {
  return (
    <div className=' pt-[4em] font-redhat text-black '>
        <div className="xl:w-[70em] lg:w-[60em] md:w-[45em] w-[21em] m-auto flex flex-col py-10 gap-y-10">
            <h1 className="text-center font-bold md:text-4xl lg:text-5xl text-2xl ">Lorem Ipsum Dolor Amet </h1>
            <div className="w-fit m-auto">
                <img
                    src={Coba}
                    alt=""
                    className="w-[60em] object-cover rounded-xl"
                />
                <div className="flex font-semibold text-base mt-2 gap-2 ">
                    <p className="border-r-[3px] border-black h-[1.4em] pr-2">21 - Juni - 2020</p>
                    <p>Admin</p>
                </div>
            </div>
            <p className="text-justify lg:w-[60em] md:w-[45em] m-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, atque illum. Itaque doloribus rerum est debitis, architecto corporis. Pariatur ipsum explicabo illo? Porro, esse facilis quas consequatur praesentium ducimus nesciunt quisquam adipisci inventore, dolorum explicabo accusantium, voluptatibus voluptate non! Natus maxime voluptate qui temporibus! Modi quidem incidunt officiis, ab alias reiciendis. Deleniti alias, doloremque officiis eaque ullam eum facilis! Cupiditate, odit animi! Vel laboriosam ad, accusamus magnam iste dicta eum? Pariatur aliquam facere rerum a minus itaque temporibus rem neque aperiam totam labore cumque repellat, atque dignissimos, laudantium officiis molestiae nam amet voluptatum saepe. Tempora labore totam eaque id deserunt fugiat error reprehenderit quam odio sapiente, dolorum harum, iure quibusdam assumenda dignissimos eum nesciunt perferendis ducimus, repudiandae cum aliquam beatae debitis possimus. In quos quia adipisci expedita dolorum tenetur maiores quibusdam eaque laudantium nobis enim ipsum at ducimus libero distinctio vitae omnis saepe, perferendis ea. Nulla veritatis quia placeat maiores.
            </p>
        </div>
    </div>
  )
}

export default KontenBerita