import Pickup from "../../assets/Image/Solusi/Everyone/Pickup.jpg"
import Dropoff from "../../assets/Image/Solusi/Everyone/Dropoff.jpg"
import Mspoints from "../../assets/Image/Solusi/Everyone/Mspoints.png"
import Msbills from "../../assets/Image/Solusi/Everyone/Msbills.png"
import Everyone from "../../assets/Image/Solusi/Everyone/Everyone.jpg"

import Recycle from "../../assets/Image/Solusi/Business/Recycle.jpg"
import MixedWaste from "../../assets/Image/Solusi/Business/MixedWaste.jpeg"
import OffWaste from "../../assets/Image/Solusi/Business/OffWaste.jpeg"
import Business from "../../assets/Image/Solusi/Business/Business.webp"

import PlasticRecovery from "../../assets/Image/Solusi/Corporate/PlasticRecovery.jpg"
import Infra from "../../assets/Image/Solusi/Corporate/Infra.jpg"
import RecycleCampaign from "../../assets/Image/Solusi/Corporate/RecycleCampaign.jpg"
import WasteNeutral from "../../assets/Image/Solusi/Corporate/WasteNeutral.jpg"
import Corporate from "../../assets/Image/Solusi/Corporate/Corporate.jpg"

import City from "../../assets/Image/Solusi/Goverment/City.jpg"
import Village from "../../assets/Image/Solusi/Goverment/Village.jpg"
import Goverment from "../../assets/Image/Solusi/Goverment/Goverment.jpg"

const solusiData = () =>([
    {
        id: 1,
        name:"everyone",
        data:[
            {
                title:"Pick Up",
                deskripsi:"Foto sampah daur ulangmu, kemudian tentukan waktu dan lokasi penjemputan, selanjutnya mitra Mallsampah akan mengkonfirmasi penjemputan sesuai waktu dan lokasi yang telah kamu tentukan, mitra akan menimbang dan membayar sampahmu dalam bentuk tunai atau MS Points, dapatkan nota penjualan online ketika transaksi telah sukses. Kamu juga dapat memberi penilaian dan saran kepada mitra kolektor kami di setiap akhir transaksi. dengan mallsampah, mendaur ulang jadi lebih mudah.",
                image:Pickup,
            },
            {
                title:"Drop Off",
                deskripsi:"Antar langsung sampah daur ulangmu ke Recycling Centre terdekat, kamu bisa mendaur ulang dengan ukuran kecil mulai dari satu botol plastik. sampahmu akan ditimbang kemudian mitra akan membayar dalam bentuk tunai atau MS Points, dapatkan laporan penjualan setelah transaksi sukses. kamu juga dapat memberi penilaian dan saran kepada mitra kolektor di setiap akhir transaksi, dengan Mallsampah, daur ulang jadi lebih mudah.",
                image:Dropoff,
            },
            {
                title:"Ms Points",
                deskripsi:"Hasil penjualan sampah dapat kamu konversi menjadi mata uang digital dari Mallsampah (MS Points) MS Points dapat Kamu tukarkan dengan beragam produk dan layanan merchant partner di aplikasi Mallsampah, mulai dari segelas kopi, saldo e-walet, sampai voucher diskon, dan banyak lagi. MS Point menjadi sarana pembayaran non tunai yang dapat mempermudah proses transaksi dengan metode cashless dan tanpa kontak langsung.",
                image:Mspoints,
            },
            {
                title:"Ms Bills",
                deskripsi:"Hasil penjualan sampah yang telah kamu konversi menjadi MS Points juga dapat Kamu tukarkan dengan beragam produk digital dan tagihan-tagihan, untuk kebutuhan harian seperti Token Listrik, Pulsa, kuota internet, PDAM, BPJS, saldo e-wallet, dan banyak lagi. semuanya dapat kamu bayar pakai sampah.",
                image:Msbills,
            },

        ],
        header:[
            {
                title:"Everyone",
                judul:"Waste Less & Recycle More",
                desk:"Semua bisa mendaur ulang, dunia akan terlihat sangat berbeda jika semua orang memulai untuk mendaur ulang. Ambil langkahmu dan hentikan pencemaran laut terbesar sepanjang sejarah.",
                color: "bg-[#299E63]",
                gambar:Everyone
            }
        ]
    },
    {
        id: 2,
        name:"Business",
        data:[
            {
                title:"Recycling",
                deskripsi:"Layanan berlangganan ini gratis, tanpa biaya apapun. Layanan ini ditujukan untuk bisnis yang ingin memaksimalkan potensi daur ulang dari limbah yang mereka hasilkan sekaligus mengurangi jumlah limbah yang dibuang. Dapatkan laporan daur ulang yang dapat Anda akses secara real-time di dasbor tertentu. Selain menghasilkan uang dari daur ulang, program ini dapat membantu meningkatkan citra lingkungan merek Anda. Ini dapat meningkatkan kepercayaan konsumen dan mempengaruhi daya tawar bisnis Anda di pasar.",
                image:Recycle,
            },
            {
                title:"Mixed Waste",
                deskripsi:"Layanan Mixed Waste adalah layanan berbayar yang memungkinkan bisnis Anda mengelola semua limbah dengan cara yang ramah lingkungan dan legal. Kami memaksimalkan daur ulang untuk sampah non-organik, membuat kompos untuk sampah organik, dan mencoba menghasilkan sampah sesedikit mungkin sebelum dibuang secara legal di TPA. Kami bekerja sama dengan mitra tepercaya untuk layanan transportasi dan pengelolaan sampah organik dan residu. Menyediakan layanan satu atap untuk semua layanan limbah berkelanjutan di perusahaan Anda.",
                image:MixedWaste,
            },
            {
                title:"Offset Waste Program",
                deskripsi:"Offset waste program adalah program pemulihan limbah sebagai ganti dari jumlah limbah yang dihasilkan oleh bisnismu. Caranya dengan mendanai upaya pengumpulan dari pengepul-pemulung lokal. Ini berarti kamu akan mendanai upaya pengumpulan dan daur ulang untuk jenis sampah tertentu, sebagai tebusan dari jumlah sampah yang dihasilkan oleh bisnismu, terutama jika sampah tersebut tidak terkelola dengan baik. Program ini dapat menjadi program strategis bagi bisnismu, misalnya setiap penjualan satu produk akan berkontribusi mendaur ulang ½ kg botol plastik, atau jumlah lain yang kamu pilih. Inisiatif ini dapat menjadi kampanye lingkungan yang berpengaruh bagi pertumbuhan bisnismu.",
                image:OffWaste,
            },

        ],
        header:[
            {
                title:"Business",
                judul:"Waste Less & Recycle More",
                desk:"Ciptakan bisnis yang ramah lingkungan dengan fitur dan program inovatif dari mallsampah, buat inisiatif lingkungan yang sesuai dengan kebutuhan bisnismu.",
                color:"bg-[#F57B31]",
                gambar:Business
            }
        ]
    },
    {
        id: 3,
        name:"Corporate",
        data:[
            {
                title:"Plastic Recovery",
                deskripsi:"Program ini ditujukan untuk perusahaan yang memproduksi kemasan, khususnya kemasan sekali pakai. Program ini memungkinkan perusahaan untuk mengumpulkan kembali dan memulihkan produk pasca konsumsi mereka, melalui ekosistem daur ulang Mallsampah. Program ini didukung teknologi AI/ML untuk melacak aliran pemulihan limbah dari hulu ke hilir secara real-time. Inisiatif ini dapat dihubungkan dengan program keberlanjutan perusahaan, seperti Extended Stakeholders Responsiblity (ESR), Faktor Environmental, Social, and Governance (ESG) dan sebagainya.",
                image:PlasticRecovery,
            },
            {
                title:"Waste Neutral (Offset Waste)",
                deskripsi:"Program Waste Neutral memungkinkan perusahaan untuk menetralkan jumlah limbah yang mereka hasilkan, Anda melakukannya dengan mendanai upaya pengumpulan dan daur ulang limbah, dari pengepul-pemulung lokal atau pengguna pada umumnya. Program ini dapat menjadi langkah strategis bagi perusahaan, misalnya setiap penjualan produk akan berkontribusi mendaur ulang 1 botol plastik atau jumlah lain yang diinginkan. Metode lain, seperti melibatkan pelanggan Anda untuk menetralkan jejak limbah mereka, juga dapat dilakukan. Aliran pemulihan limbah dari hulu ke hilir dapat dilacak secara real-time menggunakan dashboard khusus dari MallSampah.",
                image:WasteNeutral,
            },
            {
                title:"Recycling Campaign",
                deskripsi:"Program ini dapat membantu perusahaan untuk membuat program daur ulang bagi konsumen mereka, dengan menggunakan ekosistem daur ulang Mallsampah. Sebagai contoh, sebuah perusahaan minuman kemasan dapat membuat program pengumpulan botol plastik melalui aplikasi Mallsampah atau program daur ulang yang serupa. Setiap campaign yang dibuat akan terhubung dengan ekosistem teknologi Mallsampah.",
                image:RecycleCampaign,
            },
            {
                title:"Recycle Infrastructure Support",
                deskripsi:"Program ini diperuntukkan bagi perusahaan yang ingin memberikan dampak sosial-lingkungan di area yang terkena polusi sampah plastik atau sampah lainnya. Melalui kemitraan ini, Anda akan membantu menciptakan infrastruktur daur ulang di daerah yang terkena dampak, sambil memberikan solusi ekonomi bagi komunitas pengumpul-pemulung setempat. Infrastruktur yang dimaksud berupa gudang pengumpulan sampah atau lokasi pusat daur ulang.",
                image:Infra,
            },

        ],
        header:[
            {
                title:"Corporate & Brand",
                judul:"Circular Economy for Business",
                desk:"Masa depan bukan hanya tentang digitalisasi seluruh sektor kehidupan, tapi juga tentang bertransformasi ke dunia yang berkelanjutan. program ini membantu perusahaan anda bertransformasi ke sirkular ekonomi, bersama menciptakan ekonomi tanpa limbah.",
                color:"bg-[#D6434C]",
                gambar:Corporate,
            }
        ]
    },
    {
        id: 4,
        name:"Goverment",
        data:[
            {
                title:"Smart City",
                deskripsi:"Mallsampah for Smartcity adalah beberapa komponen teknologi yang saling terintegrasi untuk meningkatkan efesiensi dan efektitas pengelolaan sampah pada masyarakat urban. Teknologi mallsampah membantu kota anda dalam mencapai efektitas system pengangkutan sampah, sambil terus meningkatkan angka daur ulang dan pengurangan sampah dari sumbernya.",
                image:City,
            },
            {
                title:"Smart Village",
                deskripsi:"Mallsampah memberikan solusi pengelolaan sampah berbasis gotong royong bagi warga desa. Sebuah layanan software bagi warga dan aparat desa untuk memudahkan pengolahan sampah di desa. Program ini dikelola secara sukarela, hasil penjualan sampah digunakan untuk membangun fasilitas umum di desa, seperti sarana olah raga, WC umum dan lain sebagainya.",
                image:Village,
            },
        ],
        header:[
            {
                title:"Goverment",
                judul:"Smart City & Smart Village",
                desk:"Ciptakan kota dan desa pintar yang ramah lingkungan dengan infrastruktur daur ulang digital dari MallSampah, teknologi ini dapat mengintegrasikan semua data pengelolaan sampah dalam satu pintu.",
                color:"bg-[#337BD5]",
                gambar: Goverment

            }
        ]
    },
])

export {solusiData}