import { useParams } from "react-router-dom";


const PickupContent = ({pickups}) => {

      const {id} = useParams()

  return (
    <div className="lg:w-[60em] md:w-[45em] w-[20em] m-auto font-redhat text-black py-10">
      <h1 className="text-3xl font-bold">Cara Pakai</h1>
      {pickups[id].data.map((pickup, index)=>(
        <div key={index} className="collapse collapse-arrow font-redhat rounded-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          {pickup.title}
        </div>
        <div className="collapse-content flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0  ">
          <ul>
            {/* {pickup.content.map((konten, i)=>(
                <li key={i}>{konten}</li>
            ))} */}
            {pickup.content.map((konten, i)=>(
              <li key={i} >{konten}</li>
            ))}
          </ul>
          <img src={pickup.image} alt="" className="w-[25em]" />
        </div>
      </div>
      ))}
    </div>
  );
};

export default PickupContent;
