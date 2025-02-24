import * as React from "react";
import { createFileRoute } from '@tanstack/react-router'
import wallpaperLearn from "../assets/edukasi1.png";
import maskot3 from "../assets/maskot3.png";
import maskot4 from "../assets/maskot4.png";
import maskot5 from "../assets/maskot5.png";
import maskot6 from "../assets/maskot6.png";
import list from "../assets/check.png";

export const Route = createFileRoute('/learnAndAct')({
  component: LearnAndActComponent,
})

function LearnAndActComponent() {
  return (
    <>
      <section className="h-screen bg-white bg-white h-lg md:h-screen">
          <h1 className="text-[#142E38] absolute z-10 font-bold text-6xl text-center w-screen top-[40%] text-center">Shaping a Sustainable Future Through </h1>
          <h1 className="text-[#142E38] absolute z-10 font-bold text-6xl text-center w-screen top-[50%] text-center">Fashion and Innovation</h1>
          <p className="text-[#142E38] absolute z-10 text-xl text-center w-screen top-[60%] text-center ">Building a more sustainable future of fashion through innovation and </p>
          <p className="text-[#142E38] absolute z-10 text-xl text-center w-screen top-[63%] text-center ">awareness, inspiring change for a greener world.</p>
          <div className="absolute space-x-4 text-lg md:text-xl z-50 top-[70%] text-center w-screen">
              <button
                className="bg-white outline outline-[#D5EEC6] text-[#333333] px-4 py-2 mb-4 rounded-full w-2/3 md:w-48 hover:bg-green-100 cursor-pointer"
                onClick={() => (window.location.href = "#startLearning")}
              >
                Start Learning
              </button>
              <button
                className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mb-4 rounded-full w-2/3 md:w-48 hover:bg-green-100 cursor-pointer"
                onClick={() => (window.location.href = "/marketplace")}
              >
                Make a Donation
              </button>
            </div>
        <img src= {wallpaperLearn} alt="wallpaper learn and act" className="absolute w-screen z-1 opacity-55 h-[100%]"/>
        <div className="w-screen bg-[#ACACAC] opacity-65 h-[98%]">
        </div>
      </section>
      <section className="h-screen bg-white text-[#333333]" id="startLearning">
        <h1 className="text-4xl font-bold pt-20 text-center">What is sustainable fashion, and how can you build a wardrobe with </h1>
        <h1 className="text-4xl font-bold pt-5 text-center">eco-friendly fabrics and materials?</h1>
        <p className="text-xl pt-5 text-center">Watch the following video made by Asia Pacific Rayon (APR)</p>
        <iframe
          src="https://www.youtube.com/embed/s3CbNgJa5Yg"
          className="aspect-video w-[50%] mt-10 mx-auto"
          title="What Is Sustainable Fashion? | Asia Pacific Rayon" 
        ></iframe>
      </section>
      <section className="h-screen bg-white text-[#333333] ">
        <h1 className="text-4xl font-bold pt-15 text-center">Preloved: Pilihan Cerdas untuk Gaya dan Bumi</h1>
        <p className="text-xl pt-5 text-center">Berikan kesempatan kedua pada dunia mode—bergaya lebih cerdas, kurangi pemborosan!</p>
        <div className="flex flex-col justify-center mt-10 mx-30">
          <h2 className="text-xl font-bold mt-4 bg-[#D2D2D2] p-3 w-[50%]">Pakaian Terbuang: Jejak Limbah Fashion di Indonesia</h2>
          <p className="mx-20 p-5 bg-[#E6E6E6]">Pada tahun 2021, limbah pakaian di Indonesia mencapai 2,3 juta ton. Angka tersebut setara dengan 12% dari total limbah rumah tangga. Hanya 0,3 juta ton yang berhasil didaur ulang. Sebagian besar limbah pakaian berakhir di TPA tanpa pengelolaan yang tepat. Fakta ini menyoroti dampak besar industri fashion terhadap lingkungan.</p>
        </div>
        <div className="flex flex-col justify-center mt-10 mx-30">
          <h2 className="text-xl font-bold bg-[#D2D2D2] p-3 w-[50%]">Preloved: Langkah Kecil untuk Bumi yang Lebih Hijau</h2>
          <p className="mx-20 p-5 bg-[#E6E6E6]">Membeli preloved membantu mengurangi produksi baru dan emisi karbon, memperpanjang siklus hidup pakaian, mengurangi limbah tekstil yang berakhir di TPA, serta mendukung ekonomi sirkular yang lebih berkelanjutan.</p>
        </div>
        <div className="flex flex-col justify-center mt-10 mx-30">
          <h2 className="text-xl font-bold bg-[#D2D2D2] p-3 w-[50%]">Panjangkan Usia Pakaian, Kurangi Jejak Limbah</h2>
          <p className="mx-20 p-5 bg-[#E6E6E6]">Memperpanjang siklus hidup pakaian membantu mengurangi limbah tekstil, menekan penggunaan sumber daya, dan mengurangi emisi karbon dari produksi baru. Dengan mendukung ekonomi sirkular, langkah ini menciptakan pola konsumsi yang lebih berkelanjutan dan ramah lingkungan.</p>
        </div>
      </section>
      <section className="h-screen bg-white text-[#333333]">
        <div className="flex flex-row justify-center pt-20 gap-20 ml-20">
          <img src= {maskot3} alt="maskot3"/>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold pt-15 text-left">Tips Cerdas Merawat Pakaian </h1>
            <ul className={`list-image-[url(${list})] mt-10 ml-10 `}>
              <li className="mb-5 align-top">Menggunakan air dingin membantu menjaga warna dan serat kain agar tidak mudah rusak.</li>
              <li className="mb-5 align-top">Pilih deterjen yang ramah lingkungan dan bebas bahan keras agar pakaian tetap awet.</li>
              <li className="mb-5 align-top">Jemur pakaian secara alami untuk mencegah penyusutan dan menjaga elastisitas kain.</li>
              <li className="mb-5 align-top">Lipat pakaian berbahan lembut dan gantung yang mudah kusut untuk mempertahankan bentuknya.</li>
              <li className="mb-5 align-top">Jahit kancing lepas atau robekan kecil agar pakaian bisa digunakan lebih lama dan tidak cepat berakhir sebagai limbah.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white text-[#333333]">
        <h1 className="text-4xl font-bold text-center">Keuntungan Menukar Pakaian Dibanding Membeli Baru</h1>
          <div className="absolute bg-[#D2D2D2] w-full h-50 md:top-[475%]"></div>
        <div className="grid grid-flow-col grid-cols-3 gap-20 text-center mt-30 mx-40">
          <div className="flex flex-col justify-center p-5 rounded-3xl shadow-xl bg-white z-10">
            <img src={maskot4} alt="maskot4" className="w-40 mx-auto"/>
            <h2 className="text-2xl font-bold pt-5">Mengurangi Limbah & Jejak Karbon</h2>
            <p className="pt-5">Menukar pakaian mengurangi limbah tekstil yang berakhir di tempat pembuangan sampah dan memperlambat pencemaran lingkungan akibat produksi pakaian baru.</p>
          </div>
          <div className="flex flex-col justify-center p-5 rounded-3xl shadow-xl bg-white z-10">
            <img src={maskot5} alt="maskot5" className="w-40 mx-auto"/>
            <h2 className="text-2xl font-bold pt-5">Menghemat Sumber Daya Alam</h2>
            <p className="pt-5">Menukar pakaian membantu menghemat air dan energi yang digunakan dalam produksi pakaian baru serta mengurangi emisi karbon dari proses manufaktur dan distribusi.</p>
          </div>
          <div className="flex flex-col justify-center p-5 rounded-3xl shadow-xl bg-white z-10">
            <img src={maskot6} alt="maskot6" className="w-40 mx-auto"/>
            <h2 className="text-2xl font-bold pt-5">Mendukung Ekonomi Sirkular</h2>
            <p className="pt-5">Menukar pakaian memperpanjang siklus hidup pakaian dengan memanfaatkannya kembali, sekaligus mendorong pola konsumsi yang lebih berkelanjutan dan bertanggung jawab.</p>
          </div>
        </div>
      </section>
    </>
  )
}
