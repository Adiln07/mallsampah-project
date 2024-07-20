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

import Company from "../../assets/Image/Layanan/Company.jpg"



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
    

])

export {pickupData}