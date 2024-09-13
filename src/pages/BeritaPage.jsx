import Header from '../components/Header'
import Footer from '../components/Footer'
import BeritaHero from '../components/Berita/BeritaHero'
import BeritaContainer from '../components/Berita/BeritaContainer'
import { useEffect, useState } from 'react'
import axios from 'axios'



const BeritaPage = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles");
    setArticles(response.data);
  };
  return (
    <div>
        <Header/>
        <BeritaHero />
        <BeritaContainer articless={articles} />
        <Footer />
    </div>
  )
}

export default BeritaPage