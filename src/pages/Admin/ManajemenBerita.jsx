import DashboardAdmin from "../../components/Layout/DashboardAdmin";
import { Link } from "react-router-dom";
import Coba from "../../assets/Image/Layanan/Pickup.jpg"
const ManajemenBerita = () => {
  return (
    <DashboardAdmin>
      <div className="font-inter py-16  ">
        <div className={` m-auto `}>
          <div className="md:text-end mb-2 mr-2 ">
            <Link to="/Form-Berita">
              <button className="bg-[#000] text-white px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                Tambah Berita
              </button>
            </Link>
          </div>
          
            <table className="table bg-white text-black">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul</th>
                  <th>Gambar</th>
                  <th> Tanggal</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <h1 className="line-clamp-2 hover:line-clamp-none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae?
                      </h1>
                    </td>
                    <td>
                      <img
                        src={Coba}
                        alt="Image"
                        className="rounded-xl  h-[5em] object-cover"
                      />
                    </td>
                    <td>21 - Juni - 2020</td>
                    <td className="">
                      <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum ad veniam, fuga id saepe exercitationem quos accusantium nesciunt sunt, excepturi tempora! Architecto, voluptatum aut saepe amet repudiandae quas corrupti necessitatibus sit recusandae enim aliquid molestiae asperiores deserunt illo excepturi autem consequuntur esse odio aperiam placeat quod. Laudantium, dolore mollitia.
                      </p>
                    </td>

                    <td>
                      <div className="xl:flex">
                        <Link to="Edit-Form-Berita">
                          <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
        </div>
      </div>
    </DashboardAdmin>
  );
};

export default ManajemenBerita;
