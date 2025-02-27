import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import wallpaperCommunity from "../assets/community.png";
import community1 from "../assets/community1.png";
import { FaWhatsapp, FaDiscord, FaTelegram, FaFacebook, FaMap, FaPhone, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa6";
import wallpaperAbout from "../assets/about.png";
import iconAbout from "../assets/aboutIcon.png";

export const Route = createFileRoute("/community")({
	component: Community,
});

function Community() {
	return (
		<>
			<img
				src={wallpaperCommunity}
				alt="wallpaper Community"
				className="absolute inset-0 w-full h-150 md:h-175 object-cover opacity-50  z-2"
			/>
			<div className="absolute top-0 w-full md:w-full bg-[#ACACAC] opacity-50 h-150 md:h-175 z-2"></div>
			<section className="relative w-full bg-white flex flex-col items-center text-center px-5 py-20 md:pt-[30vh]  ">
				<h1 className="text-[#142E38] font-bold text-4xl md:text-6xl mb-5 z-10">
					Join the ReLeaf Fashion Community
				</h1>
				<p className="text-[#142E38] text-lg md:text-2xl max-w-5xl z-10">
					Connect, share, and grow together in a community that cares about sustainable fashion.
				</p>
				<p className="text-[#142E38] text-lg md:text-2xl max-w-2xl z-10">
					Find inspiration, discussions, and exciting challenges to make preloved fashion a lifestyle.
				</p>
				<div className="mt-10 flex flex-col md:flex-row gap-5 z-10 text-md md:text-lg ">
					<button className="bg-white outline outline-[#D5EEC6] w-45 text-[#333333] px-6 py-2 rounded-full hover:bg-green-100" onClick={() => (window.location.href = "#startLearning")}>
						About Us
					</button>
					<button className="bg-[#FFD8BE] text-[#333333] px-6 py-2 rounded-full hover:bg-green-100">
						Forum Discussions
					</button>
					<button className="bg-[#FFD8BE] text-[#333333] px-6 py-2 rounded-full hover:bg-green-100">
						Terms & Conditions
					</button>
				</div>
			</section>

			<section className="pt-50 md:pt-70 bg-white">
				<div className="grid grid-cols-1 md:grid-cols-2 md:ml-30 items-center text-center md:text-left">
					<h1 className="text-[#142E38] text-3xl md:text-5xl font-bold mx-15 md:mx-0">
						ReLeaf Community: Connect, Share, and Make an Impact
					</h1>
					<img
						src={community1}
						alt="community1"
						className="w-2/5 md:w-3/5 pt-10 md:pt-0 md:row-span-2 mx-auto md:self-end"
					/>
					<p className="text-[#142E38] text-lg md:text-xl text-justify mt-5 mx-15 md:mx-0 md:mt-10">
						ReLeaf Fashion Community is a space for those who care about sustainable fashion. Here, you can share information about clothing donations, preloved fashion, and various community actions that support an eco-friendly lifestyle. Join to stay connected, contribute, and inspire positive change together!
					</p>
				</div>
			</section>


			<section className="bg-white pt-20 pb-30 md:pt-40 text-[#142E38] text-center">
				<h1 className="text-3xl md:text-5xl font-bold mt-10 mb:mt-10">Join Us</h1>
				<p className="text-[#142E38] mt-5 md:text-xl md:mt-10  ">
					Be Part of the Change! Connect, share, and support sustainable fashion
					with ReLeaf Fashion.
				</p>
				<div className="flex flex-col md:flex-row mt-10 place-content-stretch mx-40">
					<div className="flex flex-col w-full mb-5 md:w-1/2 justify-center items-center">
						<FaDiscord className="md:w-15 w-13 md:h-15 h-13" />
						<h1 className="text-xl md:text-2xl font-bold mt-5  ">Dicord</h1>
						<a
							target="_blank"
							className="bg-[#FFD8BE] mt-5 px-4 py-2 mb-4 rounded-full w-40 md:w-48 hover:bg-green-100 cursor-pointer font-bold "
							href="https://discord.com/"
						>
							Join
						</a>
					</div>
					<div className="flex flex-col w-full mb-5 md:w-1/2 items-center">
						<FaWhatsapp className="md:w-15 w-13 md:h-15 h-13" />
						<h1 className="text-xl md:text-2xl font-bold mt-5  ">Whatsapp</h1>
						<a
							target="_blank"
							className="bg-[#FFD8BE] mt-5 px-4 py-2 mb-4 rounded-full w-40 md:w-48 hover:bg-green-100 cursor-pointer font-bold "
							href="https://web.whatsapp.com/"
						>
							Join
						</a>
					</div>
					<div className="flex flex-col w-full md:w-1/2 justify-center items-center">
						<FaTelegram className="md:w-15 w-13 md:h-15 h-13" />
						<h1 className="text-xl md:text-2xl font-bold mt-5  ">Telegram</h1>
						<a
							target="_blank"
							className="bg-[#FFD8BE] mt-5 px-4 py-2 mb-4 rounded-full w-40 md:w-48 hover:bg-green-100 cursor-pointer font-bold "
							href="https://web.telegram.org/"
						>
							Join
						</a>
					</div>
				</div>
			</section>

			<section className="relative bg-white text-[#333333]">
				<div className="absolute inset-0">
					<img className="w-full h-full object-cover opacity-60" src={wallpaperAbout} alt="wallpaperAbout" />
					<div className="absolute inset-0 h-full bg-[#CFCFCF] opacity-70"></div>
				</div>
				<div className="relative grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-20 py-10 items-center">
					<div className="flex flex-col text-center md:text-left  md:col-span-2 md:py-10">
						<h1 className="text-3xl md:text-5xl font-bold z-10">About Us</h1>
						<p className="mt-5 text-lg text-justify z-10 md:py-4">
							ReLeaf Fashion is a community that believes in the power of sustainable fashion. We are committed to promoting eco-friendly practices and supporting a circular economy. Our mission is to inspire positive change in the fashion industry by encouraging people to embrace preloved fashion and reduce waste. Join us in our journey to create a greener future for all!
						</p>
						<div className="flex flex-col gap-3 mt-5 z-10">
							<p className="text-md bg-[#D5EEC6] rounded-full px-5 py-2 z-10 min-w-0 text-center md:text-left">
								Hanger melambangkan fashion, sementara daun mewakili keberlanjutan dan eco-friendly.
							</p>
							<p className="text-md bg-[#D5EEC6] rounded-full px-5 py-2 z-10 min-w-0 text-center md:text-left">
								Hijau lembut dan warna earthy mencerminkan alam, kesegaran, dan etika bisnis ramah lingkungan.
							</p>
							<p className="text-md bg-[#D5EEC6] rounded-full px-5 py-2 z-10 min-w-0 text-center md:text-left">
								Minimalis dan modern, mencerminkan transparansi, profesionalisme, dan produksi bertanggung jawab.
							</p>
						</div>
					</div>
					<img
						src={iconAbout}
						alt="iconAbout"
						className="mt-10 md:mt-0 flex justify-center w-3/5 md:w-full object-cover h-80 mx-auto md:ml-18 z-10"
					/>
				</div>
			</section>

			<section className="bg-white text-[#333333] pt-20 text-center pb-20">
				<h1 className="text-3xl md:text-5xl font-bold mt-10 mb:mt-10 ">Contact Us</h1>
				<p className="text-[#142E38] mt-5 md:text-xl md:mt-10  ">
				Be Part of the Change! Connect, share, and support sustainable fashion with ReLeaf Fashion.
				</p>
				<div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-2">
				<iframe
					className="w-full h-60 mb-4"
					src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=Universitas%20Atma%20Jaya%20Yogyakarta%20Kampus%203&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					allowFullScreen
				></iframe> 
				<div className="text-left">
					<div className="flex flex-row space-x-4 mx-4 pb-4">
					<FaMap className="md:w-11 w-10 md:h-11 h-10" />
					<p>Jl. Babarsari No.43, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
					</div>
					<div className="flex flex-row space-x-4 mx-4 pb-4">
					<FaPhone className="md:w-11 w-5 md:h-11 h-5 " />
					<p>(0274) 487711</p>
					</div>
					<div className="flex flex-row space-x-4 mx-4 pb-4">
					<FaEnvelope className="md:w-11 w-5 md:h-11 h-5" />
					<p>releaffashion@gmail.com</p>
					</div>
					<div className="flex flex-row space-x-4 mx-4 pb-4">
					<FaFacebook className="md:w-11 w-5 md:h-11 h-5" />
					<p>releaffashion._</p>
					</div>
					<div className="flex flex-row space-x-4 mx-4 pb-4">
					<FaInstagram className="md:w-11 w-5 md:h-11 h-5" />
					<p>releaffashion._</p>
					</div>
					<div className="flex flex-row space-x-4 mx-4 pb-4">
					<FaTiktok className="md:w-11 w-5 md:h-11 h-5" />
					<p>releaffashion._</p>
					</div>
				</div>
				</div>
			</section>
		</>
	);
}
