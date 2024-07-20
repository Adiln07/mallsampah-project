import Iyia from "../assets/Image/logo/Awards/Iyia.png"
import AseanBowl from "../assets/Image/logo/Awards/AseanBowl.png"
import Ifrc from "../assets/Image/logo/Awards/Ifrc.png"
import IGA from "../assets/Image/logo/Awards/IGA.png"

const awards = () =>([
    {
        id:1,
        judul:"The Gold Medal Winner",
        event: "IYIA 2016",
        deskripsi:"International Young Inventors Award (IYIA) 2016, Surabaya. Awarding ceremony and exhibition for young inventors in Asia.",
        image:Iyia
    },
    {
        id:2,
        judul:"The First Winner",
        event: "IFRC 2017",
        deskripsi:"1st Winner IFRC Flood Resilience Innovation Converence 2017, Jakarta, International Federation of Red Cross and Red Crescent Societies.",
        image:Ifrc
    },
    {
        id:3,
        judul:"The Winner Best Social Impact Startup Category",
        event: "Asean Ricebowl Startup Award 2017",
        deskripsi:"The winner in this category is recognised for its innovation and impact by developing, and implement solutions to social, cultural, and/or environmental issues aligned with the UN’s Sustainable Development Goals. ",
        image:AseanBowl
    },
    {
        id:4,
        judul:"Founder Of The Year",
        event: "Indonesia Rice Bowl startup Award 2017",
        deskripsi:"Founder of The Year, Indonesia Rice Bowl Startup Award 2017, Jakarta. Asean Rice Bowl Startup Award and New Enterpreneurs Foundation. ",
        image:AseanBowl
    },
    {
        id:5,
        judul:"Award Winner",
        event: "Indonesia Green Award (IGA) 2018",
        deskripsi:"Enviromental Awards, Indonesia Green Award 2018, Kategori Eksekutif Milenium, Jakarta. The La Tofi School of CSR.",
        image:IGA
    },
])

export {awards}