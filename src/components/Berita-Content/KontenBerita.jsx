import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const KontenBerita = () => {

    const {id} = useParams();
    const [article, setArticle] = useState({});


    useEffect(()=>{
        getArticleById(id, (data)=>{
            setArticle(data);
        });
      }, [id])

      const getArticleById = async() =>{
        const response = await axios.get(`http://localhost:5000/articles/${id}`);
        setArticle(response.data)
      }

  return (
    <div className=' pt-[4em] font-redhat text-black '>
        <div className="xl:w-[70em] lg:w-[60em] md:w-[45em] w-[21em] m-auto flex flex-col py-10 gap-y-10">
            <h1 className="text-center font-bold md:text-4xl lg:text-5xl text-2xl ">{article.judul} </h1>
            <div className="w-fit m-auto">
                <img
                    src={article.url}
                    alt=""
                    className="w-[60em] object-cover rounded-xl"
                />
                <div className="flex font-semibold text-base mt-2 gap-2 ">
                    <p className="border-r-[3px] border-black h-[1.4em] pr-2">{article.tanggal}</p>
                    <p>Admin</p>
                </div>
            </div>
            <p className="text-justify lg:w-[60em] md:w-[45em] m-auto">
            <div dangerouslySetInnerHTML={{__html: article.deskripsi}}>
            </div>
            </p>
        </div>
    </div>
  )
}

export default KontenBerita