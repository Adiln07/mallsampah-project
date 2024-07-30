import PickupLogo from "../../assets/Image/logo/layananLogo/mspick_up.svg"
import Pickup1 from "../../assets/Image/Layanan/PickupFolder/Pickup1.png";
import Pickup2 from "../../assets/Image/Layanan/PickupFolder/Pickup2.png";
import Pickup3 from "../../assets/Image/Layanan/PickupFolder/Pickup3.png";
import Pickup4 from "../../assets/Image/Layanan/PickupFolder/Pickup4.png";
import Pickup5 from "../../assets/Image/Layanan/PickupFolder/Pickup5.png";
import Pickup from "../../assets/Image/Layanan/Pickup.jpg"

import DropoffLogo from "../../assets/Image/logo/layananLogo/msdrop_off.svg"
import Dropoff1 from "../../assets/Image/Layanan/DropOffFolder/Dropoff1.png"
import Dropoff2 from "../../assets/Image/Layanan/DropOffFolder/Dropoff2.png"
import Dropoff3 from "../../assets/Image/Layanan/DropOffFolder/Dropoff3.png"
import Dropoff4 from "../../assets/Image/Layanan/DropOffFolder/Dropoff4.png"
import Dropoff5 from "../../assets/Image/Layanan/DropOffFolder/Dropoff5.png"
import Dropoff from "../../assets/Image/Layanan/Dropoff.jpg"

import CompanyLogo from "../../assets/Image/logo/layananLogo/ms_company.svg"
import Service1 from "../../assets/Image/Layanan/CompanyFolder/Service1.png"
import Service2 from "../../assets/Image/Layanan/CompanyFolder/Service2.png"
import Service3 from "../../assets/Image/Layanan/CompanyFolder/Service3.png"
import Company from "../../assets/Image/Layanan/Company.jpg"

import EventLogo from "../../assets/Image/logo/layananLogo/ms_event.svg"
import Event1 from "../../assets/Image/Layanan/EventFolder/Event1.png"
import Event2 from "../../assets/Image/Layanan/EventFolder/Event2.png"
import Event3 from "../../assets/Image/Layanan/EventFolder/Event3.png"
import Event from "../../assets/Image/Layanan/Event.jpg"

import MspointLogo from "../../assets/Image/logo/layananLogo/ms_point.svg"
import Mspoint1 from "../../assets/Image/Layanan/MspointsFolder/Mspoint1.png"
import Mspoint2 from "../../assets/Image/Layanan/MspointsFolder/Mspoint2.svg"
import Mspoints from "../../assets/Image/Layanan/Mspoints.png"

import MsbillsLogo from "../../assets/Image/logo/layananLogo/ms_bills.svg"
import Msbills1 from "../../assets/Image/Layanan/MsbillsFolder/Msbills1.png"
import Msbills from "../../assets/Image/Layanan/Msbills.png"

const pickupData = () =>([
    {
        id: 1,
        name:"Pickup",
        header:[
            {
                logo:PickupLogo,
                judul:"Pick Up",
                desk:"Foto sampah daur ulangmu, upload ke Aplikasi Mallsampah, kolektor Mallsampah terdekat akan menjemput, menimbang dan membayar sampahmu.",
                color:"bg-[#299E63]",
                gambar:Pickup
            }
        ],
        data:[
            {
                title:"Pilih Jenis Sampah",
                content: ["1. Pilih jenis sampah yang akan dijemput", "2. Tentukan perkiraan berat sampah", "3. Pilih sub jenis sampah", "4. Kemudian tekan tombol selanjutnya"],
                image:Pickup1,
            },
            {
                title:"Unggah Jenis Sampah",
                content: ["1. Masukkan foto sampah yang akan dijual", "2. Ambil foto menggunakan kamera atau gallery", "3. Unggah minimal 2 foto sampah"],
                image:Pickup2,
            },
            {
                title:"Masukkan Informasi Penjemputan",
                content: ["1. Masukkan detail alamat, bisa menggunakan google maps untuk menambah alamat.", "2. Pilih tanggal penjemputan sampahmu", "3. Pilih waktu penjemputan (pagi, siang atau sore)"],
                image:Pickup3,
            },
            {
                title:"Pilih Metode Pembayaran",
                content: ["1. Pilih metode pembayaran yang tersedia", "2. Metode pembayaran menggunakan uang tunai atau MS Points", "3. MS Points dapat ditukarkan menjadi Gopay, OVO, Shopee Pay, Pulsa, dsb"],
                image:Pickup4,
            },
            {
                title:"Penjemputan dan pembayaran",
                content: ["1. Lacak progress permintaan Pickup di fitur “My order” ", "2. Terdapat tombol bantuan dan opsi untuk membatalkan di fitur “My Order”", "3. Admin atau Kolektor Mallsampah akan menghubungi untuk peroses penjemputan", "4. Kolektor Mallsampah akan menimbang dan membayar di tempat", "5. Nota penjualan digital dapat dilihat di fitur “History Penjualan”"],
                image:Pickup5,
            },
        ]

    },
    {
        id: 2,
        name:"DropOff",
        header:[
            {
                logo:DropoffLogo,
                judul:"Drop Off",
                desk:"Antar langsung sampahmu ke Recycling Centre terdekat, kamu bisa mendaur ulang dengan ukuran kecil seperti satu botol plastik.",
                color:"bg-[#4287f5]",
                gambar:Dropoff
            }
        ],
        data:[
            {
                title:"Pilih Drop Off",
                content: ["1. Pilih jenis sampah yang akan diantar", "2. Tentukan perkiraan berat sampah", "3. Pilih sub jenis sampah", "4. Kemudian tekan tombol selanjutnya"],
                image:Dropoff1,
            },
            {
                title:"Unggah Foto Sampah",
                content: ["1. Masukkan foto sampah yang akan dijual", "2. Ambil foto menggunakan kamera atau gallery", "3. Unggah minimal 2 foto sampah"],
                image:Dropoff2,
            },
            {
                title:"Masukkan Informasi Pengantaran",
                content: ["1. Masukkan alamat pengguna, untuk pencarian recycling center terdekat dari lokasimu", "2. Pilih tanggal pengantaran sampahmu", "3. Pilih waktu pengantaran (pagi, siang, sore)"],
                image:Dropoff3,
            },
            {
                title:"Pilih Metode Pembayaran",
                content: ["1. Pilih metode pembayaran yang tersedia", "2. Metode pembayaran menggunakan uang tunai atau MS Points", "3. MS Points dapat ditukarkan menjadi Gopay, OVO, Shopee Pay, Pulsa, dsb"],
                image:Dropoff4,
            },
            {
                title:"Penjemputan dan pembayaran",
                content: ["1. Lihat panduan pengantaran, dan lacak progress permintaan Drop Off di fitur “My order” ", "2. Terdapat tombol bantuan dan opsi untuk membatalkan di fitur “My Order”", "3. Admin atau Kolektor Mallsampah akan menghubungi untuk proses Drop Off", "4. Kolektor Mallsampah akan menimbang dan membayar di titik Drop Off", "5. Nota penjualan digital dapat dilihat di fitur “History Penjualan”"],
                image:Dropoff5,
            },
        ]

    },
    {
        id: 3,
        name:"Company",
        header:[
            {
                logo:CompanyLogo,
                judul:"Company",
                desk:"Daur ulang berlangganan untuk bisnis dan kantor, menciptakan bisnis ramah lingkungan bukan sesuatu yang mahal lagi, dapatkan gratis di Mallsampah.",
                color:"bg-[#f57b31]",
                gambar:Company
            }
        ],
        data:[
            {
                title:"Isi Data usaha/perusahaan",
                content: ["1. Masukkan nama perusahaan", "2. Pilih jenis usaha", "3. Masukkan alamat perusahaan"],
                image:Service1,
            },
            {
                title:"Pilih layanan",
                content: ["1. Recyclable (Gratis), berlangganan layanan daur ulang untuk bisnis dan kantormu. Ciptakan zero waste untuk bisnismu", "2. Mixed Waste (Berbayar), bukan hanya sampah anorganik, sampah organik pun bisa kamu kelola dengan fitur Mixed waste"],
                image:Service2,
            },
            {
                title:"Lama Berlangganan",
                content: ["1. Pilih lama berlangganan", "2. Lama berlangganan terdiri dari 6, 12, 18, hingga 24 Bulan"],
                image:Service3,
            },
        ]

    },
    {
        id: 4,
        name:"Event",
        header:[
            {
                logo:EventLogo,
                judul:"Event",
                desk:"Daftarkan eventmu di fitur ini untuk mengakses layanan daur ulang yang didesain khusus untuk event, atau layanan satu waktu.",
                color:"bg-[#d6434c]",
                gambar:Event
            }
        ],
        data:[
            {
                title:"Isi data Event",
                content: ["1. Masukkan nama event", "2. Masukkan alamat event", "3. Masukkan kisaran jumlah peserta"],
                image:Event1,
            },
            {
                title:"Pilih layanan",
                content: ["1. Recyclable (Gratis), berlangganan layanan daur ulang untuk bisnis dan kantormu. Ciptakan zero waste untuk bisnismu", "2. Mixed Waste (Berbayar), bukan hanya sampah anorganik, sampah organik pun bisa kamu kelola dengan fitur Mixed waste"],
                image:Event2,
            },
            {
                title:"Pilih Jenis Sampah",
                content: ["1. Pilih jenis sampah yang dihasilkan dalam event"],
                image:Event3,
            },
        ]

    },
    {
        id: 5,
        name:"Mspoints",
        header:[
            {
                logo:MspointLogo,
                judul:"MS Points",
                desk:"Mallsampah mengkonversi sampahmu menjadi mata uang digital yang dapat kamu belanjakan, atau tukarkan dengan beragam produk menarik.",
                color:"bg-[#299E63]",
                gambar:Mspoints
            }
        ],
        data:[
            {
                title:"Reedem MS Point",
                content: ["1. Kamu dapat menukarkan MS Poin dengan beragam produk dan layanan, seperti saldo Gopay, OVO, ShopeePay, voucher diskon, sedekah online dsb"],
                image:Mspoint1,
            },
            {
                title:"Share MS Point",
                content: ["1. Kamu dapat mentransfer MS Points ke teman-temanmu yang juga menggunakan Mallsampah. transfer gratis dan saat itu juga"],
                image:Mspoint2,
            },
        ]
    },
    {
        id: 6,
        name:"MS Bills",
        header:[
            {
                logo:MsbillsLogo,
                judul:"MS Bills ",
                desk:"Kamu dapat menukarkan sampahmu dengan beragam produk digital seperti Token Listrik, Pulsa, PDAM, BPJS dan banyak lagi.",
                color:"bg-[#f57b31]",
                gambar:Msbills
            }
        ],
        data:[
            {
                title:"Fitur akan segera dirilis",
                content: [""],
                image:Msbills1,
            },
        ]

    },

])

export {pickupData}