import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import wallpaperLearn from "../assets/edukasi1.png";
import maskot3 from "../assets/maskot3.png";
import maskot4 from "../assets/maskot4.png";
import maskot5 from "../assets/maskot5.png";
import maskot6 from "../assets/maskot6.png";
import list from "../assets/check.png";

export const Route = createFileRoute("/learnAndAct")({
	component: LearnAndActComponent,
});

function LearnAndActComponent() {
	return (
		<>
			<img
				src={wallpaperLearn}
				alt="wallpaper Learn and Act"
				className="absolute inset-0 w-full h-150 md:h-175 object-cover opacity-50  z-2"
			/>
			<div className="absolute top-0 w-full md:w-full bg-[#ACACAC] opacity-50 h-150 md:h-175 z-2"></div>
			<section className="relative w-full bg-white flex flex-col items-center text-center px-5 py-20 md:pt-[30vh] pt-35 ">
				<h1 className="text-[#142E38] font-bold text-4xl md:text-6xl mb-5 z-10">
					Shaping a Sustainable Future Through Fashion and Innovation
				</h1>
				<p className="text-[#142E38] text-lg md:text-2xl max-w-5xl z-10">
					Building a more sustainable future of fashion through innovation and
				</p>
				<p className="text-[#142E38] text-lg md:text-2xl max-w-2xl z-10">
					awareness, inspiring change for a greener world.
				</p>
				<div className="mt-10 flex flex-col md:flex-row gap-5 z-10 text-md md:text-lg ">
					<button
						className="bg-white outline outline-[#D5EEC6] w-45 text-[#333333] px-6 py-2 rounded-full hover:bg-green-100"
						onClick={() => (window.location.href = "#startLearning")}
					>
						Start Learning
					</button>
					<button className="bg-[#FFD8BE] text-[#333333] px-6 py-2 rounded-full hover:bg-green-100">
						Make a Donation
					</button>
				</div>
			</section>

			<section className="bg-white text-[#333333]" id="startLearning">
				<h1 className="text-3xl  md:text-5xl px-5 font-bold pt-10 md:pt-60 text-center">
					What is sustainable fashion, and how can you build a wardrobe with
					eco-friendly fabrics and materials?
				</h1>
				<p className="text-xl pt-5 md:pt-10 text-center px-5">
					Watch the following video made by Asia Pacific Rayon (APR)
				</p>
				<iframe
					src="https://www.youtube.com/embed/s3CbNgJa5Yg"
					className="aspect-video w-[100%] md:w-[50%] mt-10 mx-auto"
					title="What Is Sustainable Fashion? | Asia Pacific Rayon"
				></iframe>
			</section>

			<section className="pt-20 md:pt-46 bg-white text-[#333333] ">
				<h1 className="text-3xl md:text-4xl font-bold text-center">
					Preloved: Pilihan Cerdas untuk Gaya dan Bumi
				</h1>
				<p className="text-xl pt-5 text-center px-5">
					Berikan kesempatan kedua pada dunia mode bergaya lebih cerdas, kurangi
					pemborosan!
				</p>
				<div className="flex flex-col md:justify-center mt-10 md:mx-30 mx-4">
					<h2 className="text-xl font-bold md:mt-4 bg-[#D2D2D2] p-3 md:w-[50%] ">
						Pakaian Terbuang: Jejak Limbah Fashion di Indonesia
					</h2>
					<p className="text-lg md:mx-20 mx-5 p-5 bg-[#E6E6E6] ">
						Pada tahun 2021, limbah pakaian di Indonesia mencapai 2,3 juta ton.
						Angka tersebut setara dengan 12% dari total limbah rumah tangga.
						Hanya 0,3 juta ton yang berhasil didaur ulang. Sebagian besar limbah
						pakaian berakhir di TPA tanpa pengelolaan yang tepat. Fakta ini
						menyoroti dampak besar industri fashion terhadap lingkungan.
					</p>
				</div>
				<div className="flex flex-col justify-center mt-10 md:mx-30 mx-4">
					<h2 className="text-xl font-bold bg-[#D2D2D2] p-3 md:w-[50%]">
						Preloved: Langkah Kecil untuk Bumi yang Lebih Hijau
					</h2>
					<p className="text-lg md:mx-20 mx-5 p-5 bg-[#E6E6E6]">
						Membeli preloved membantu mengurangi produksi baru dan emisi karbon,
						memperpanjang siklus hidup pakaian, mengurangi limbah tekstil yang
						berakhir di TPA, serta mendukung ekonomi sirkular yang lebih
						berkelanjutan.
					</p>
				</div>
				<div className="flex flex-col justify-center mt-10 md:mx-30 mx-4">
					<h2 className="text-xl font-bold bg-[#D2D2D2] p-3 md:w-[50%]">
						Panjangkan Usia Pakaian, Kurangi Jejak Limbah
					</h2>
					<p className="text-lg md:mx-20 mx-5 p-5 bg-[#E6E6E6]">
						Memperpanjang siklus hidup pakaian membantu mengurangi limbah
						tekstil, menekan penggunaan sumber daya, dan mengurangi emisi karbon
						dari produksi baru. Dengan mendukung ekonomi sirkular, langkah ini
						menciptakan pola konsumsi yang lebih berkelanjutan dan ramah
						lingkungan.
					</p>
				</div>
			</section>

			<section className="bg-white text-[#333333]">
				<div className="flex flex-col md:flex-row justify-center pt-20 md:pt-40 gap-20 md:ml-20">
					<img
						src={maskot3}
						alt="maskot3"
						className="w-[50%] md:w-[20%] mx-auto"
					/>
					<div className="flex flex-col">
						<h1 className="text-3xl md:text-4xl font-bold pt-0 md:pt-15 mx-3 md:text-left text-center">
							Tips Cerdas Merawat Pakaian{" "}
						</h1>
						<ul
							className={`list-image-[url(${list})] mt-10 md:ml-10 mx-20 max-sm:text-justify text-left`}
						>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Menggunakan air dingin membantu menjaga warna dan serat kain
								agar tidak mudah rusak.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Pilih deterjen yang ramah lingkungan dan bebas bahan keras agar
								pakaian tetap awet.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Jemur pakaian secara alami untuk mencegah penyusutan dan menjaga
								elastisitas kain.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Lipat pakaian berbahan lembut dan gantung yang mudah kusut untuk
								mempertahankan bentuknya.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Jahit kancing lepas atau robekan kecil agar pakaian bisa
								digunakan lebih lama dan tidak cepat berakhir sebagai limbah.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="pt-20 md:pt-40 px-5 md:px-0 bg-white text-[#333333] pb-20 md:pb-30">
				<h1 className="text-3xl md:text-4xl font-bold text-center">
					Keuntungan Menukar Pakaian Dibanding Membeli Baru
				</h1>
				<div className="max-sm:hidden absolute bg-[#D2D2D2] w-full h-50 md:top-[473%]"></div>
				<div className="grid grid-flow-col grid-cols-3 max-sm:grid-rows-3 gap-20 text-center mt-0 md:mt-30 mx-10 md:mx-40 max-sm:h-400 max-sm:pt-10">
					<div className="flex flex-col justify-center p-3 md:p-5 rounded-3xl shadow-xl bg-white z-10 max-sm:w-70 ">
						<img src={maskot4} alt="maskot4" className="w-30 md:w-40 mx-auto" />
						<h2 className="text-2xl font-bold pt-5">
							Mengurangi Limbah & Jejak Karbon
						</h2>
						<p className="pt-5">
							Menukar pakaian mengurangi limbah tekstil yang berakhir di tempat
							pembuangan sampah dan memperlambat pencemaran lingkungan akibat
							produksi pakaian baru.
						</p>
					</div>
					<div className="flex flex-col justify-center p-3 md:p-5 rounded-3xl shadow-xl bg-white z-10 max-sm:w-70">
						<img src={maskot5} alt="maskot5" className="w-30 md:w-40 mx-auto" />
						<h2 className="text-2xl font-bold pt-5">
							Menghemat Sumber Daya Alam
						</h2>
						<p className="pt-5">
							Menukar pakaian membantu menghemat air dan energi yang digunakan
							dalam produksi pakaian baru serta mengurangi emisi karbon dari
							proses manufaktur dan distribusi.
						</p>
					</div>
					<div className="flex flex-col justify-center p-3 md:p-5 rounded-3xl shadow-xl bg-white z-10 max-sm:w-70">
						<img src={maskot6} alt="maskot6" className="w-30 md:w-40 mx-auto" />
						<h2 className="text-2xl font-bold pt-5">
							Mendukung Ekonomi Sirkular
						</h2>
						<p className="pt-5">
							Menukar pakaian memperpanjang siklus hidup pakaian dengan
							memanfaatkannya kembali, sekaligus mendorong pola konsumsi yang
							lebih berkelanjutan dan bertanggung jawab.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
