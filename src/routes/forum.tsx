import { createFileRoute } from "@tanstack/react-router";
import wallpaperDiscuss from "../assets/discus.png";
import { useState } from "react";

const diskusi = [
	{
		id: 1,
		author: "Kalvin Lawinata",
		topic: "Swap & Style: Preloved Fashion Stories",
		message:
			"Hey everyone! I recently swapped a jacket through ReLeaf Fashion, and it was such a smooth experience. The best part? I found a vintage denim jacket that perfectly matches my style! It feels great knowing that my old clothes are getting a second life instead of ending up in landfills. Have you had any successful exchanges? Let’s share our experiences, swap tips, and inspire each other to embrace sustainable fashion!",
		date: "1 day ago",
		kategori: "Preloved",
	},
	{
		id: 2,
		author: "Hary",
		topic: "Bagaimana Alur Donasi di ReLeaf Fashion?",
		message:
			"Saya tertarik untuk berdonasi pakaian di ReLeaf Fashion. Bagaimana prosesnya? Apakah saya cukup menghubungi kontak yang tersedia, lalu tim akan datang untuk mengambil donasi? Setelah pakaian dikumpulkan, bagaimana cara penyortiran dan pendistribusiannya kepada mereka yang membutuhkan? Saya ingin memastikan",
		date: "2 day ago",
		kategori: "Donasi",
	},
	{
		id: 3,
		author: "Rere",
		topic: "Sustainable Fashion Tips & Tricks",
		message:
			"Hi all! Ive been trying to build a more eco-friendly wardrobe by shopping preloved and upcycling old clothes. I recently learned how to remove stains from secondhand fabrics and refresh old materials with natural dyes! Does anyone have recommendations on where to find high-quality preloved items or the best ways to maintai",
		date: "7 day ago",
		kategori: "Lainnya",
	},
];

export const Route = createFileRoute("/forum")({
	component: ForumComponent,
});

function ForumComponent() {
	const [search, setSearch] = useState("");

	return (
		<>
			<div className="min-h-full bg-white text-black">
				<div className="mx-7 mt-17 md:mx-32">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						<li className="inline-flex items-center">
							<a
								href="/"
								className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-green-300"
							>
								Home
							</a>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="w-6 h-6 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<a
									href="/community"
									className="ml-1 text-sm font-medium text-gray-500 hover:text-green-300 md:ml-2"
								>
									Community
								</a>
							</div>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="w-6 h-6 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
									Forum
								</span>
							</div>
						</li>
					</ol>
				</div>
				<div className="mx-7 mt-5 md:mt-20 md:mx-32 items-start">
					<h1 className="text-3xl md:text-5xl font-bold md:w-[50%]">
						Forum Discussions
					</h1>
					<img
						src={wallpaperDiscuss}
						alt="wallpaper-discuss"
						className="w-66 h-66 mx-auto object-cover md:w-92 md:float-right md:self-start"
					/>
					<p className="text-xl text-justify md:mt-10 md:w-3/5">
						Temukan ruang untuk berdiskusi, berbagi pengalaman, dan bertukar inspirasi
						seputar fashion berkelanjutan. Dari preloved fashion, donasi pakaian,
						hingga tips merawat busana agar lebih awet—bergabunglah dan jadilah bagian
						dari perubahan!
					</p>
					<button
						type="submit"
						className="md:mt-10 bg-[#FFD8BE] mt-5 place-self-start justify-center rounded-full font-boldflex w-1/4 px-3 py-2 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
						onClick={() => (window.location.href = "#more")}
					>
						Explore Discussions
					</button>
				</div>
				<div className="mx-7 mt-10 md:mt-40 md:clear-right">
					<form className="bg-white p-4 shadow-md md:shadow-xl rounded-lg text-[#18171D] md:mx-35 md:px-10">
						<h1 className="text-xl md:text-3xl font-medium text-center md:mb-10">
							Buat Diskusi Baru
						</h1>
						<input
							type="text"
							placeholder="Your Name"
							className="w-full py-2 px-5 mt-5 border-none rounded-full bg-[#F5F5F5]"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full py-2 px-5 mt-5 border-none rounded-full bg-[#F5F5F5]"
						/>
						<input
							type="text"
							placeholder="Your Topic"
							className="w-full py-2 px-5 mt-5 border-none rounded-full bg-[#F5F5F5]"
						/>
						<textarea
							placeholder="Your Message"
							className="w-full py-2 px-5 mt-5 border-none rounded-lg bg-[#F5F5F5]"
						/>
						<h3 className="font-medium my-2">Keyword</h3>
						<div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-4">
							<div>
								<input type="radio" name="Keyword" id="Preloved" className="mr-2" />
								<label htmlFor="low">Preloved</label>
							</div>
							<div>
								<input type="radio" name="Keyword" id="Donasi" className="mr-2" />
								<label htmlFor="mid">Donasi</label>
							</div>
							<div>
								<input type="radio" name="Keyword" id="Komunitas" className="mr-2" />
								<label htmlFor="high">Komunitas</label>
							</div>
							<div>
								<input type="radio" name="Keyword" id="Lainnya" className="mr-2" />
								<label htmlFor="high">Lainnya</label>
							</div>
						</div>
						<button
							type="submit"
							className="md:my-10 bg-[#FFD8BE] mt-5 place-self-end justify-center rounded-lg flex w-1/4 px-3 py-2 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
						>
							Send
						</button>
					</form>
				</div>
				<div className="flex flex-col items-start pt-10 md:pt-25 md:flex-row gap-6 p-6 md:mx-32">
					<div className="w-full md:h-auto md:w-3/9 bg-white p-4 rounded-lg border border-gray-300">
						<h2 className="text-center font-bold text-lg mb-4">Filters</h2>
						<hr className="text-gray-300"/>
						<div className="mb-4">
							<h3 className="font-medium my-2">Urutkan berdasarkan</h3>
							<div>
								<input type="radio" name="price" id="low" className="mr-2" />
								<label htmlFor="low">Terbaru</label>
							</div>
							<div>
								<input type="radio" name="price" id="mid" className="mr-2" />
								<label htmlFor="mid">Terlama</label>
							</div>
						</div>
						<hr className="text-gray-300"/>
						<div>
							<h3 className="font-medium my-2">Kata Kunci</h3>
							<div className="flex flex-wrap gap-y-5 gap-x-5 pb-5">
								<button className="p-2 bg-[#FFD8BE] rounded-full w-[30%]">
									Preloved
								</button>
								<button className="p-2 bg-gray-100 rounded-full w-[30%]">Donasi</button>
								<button className="p-2 bg-gray-100 rounded-full w-[30%]">
									Komunitas
								</button>
								<button className="p-2 bg-gray-100 rounded-full w-[30%]">
									Lainnya
								</button>
							</div>
						</div>
						<hr className="text-gray-300"/>
						<button className="bg-[#FFD8BE] px-4 py-2 rounded-full w-full mt-4">
							Terapkan
						</button>
					</div>
					<div className="w-full h-full flex flex-col">
						<input
							type="text"
							placeholder="Cari Topik Diskusi"
							className="mb-4 border rounded-full px-4 py-2 w-full border-none outline-none bg-gray-100"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<div className="w-full md:w-full grid grid-cols-1 md:grid-cols-1 gap-6 mb-13" id="more">
							{diskusi
								.filter((p) => p.topic.toLowerCase().includes(search.toLowerCase()))
								.map((diskusi) => (
									<div
										key={diskusi.id}
										className="flex flex-col gap-y-2 bg-gray-100 p-4 rounded-lg "
									>
										<h3 className="text-lg font-bold">{diskusi.topic}</h3>
										<div className="flex flex-row gap-x-2 divide-x-1 divide-[#A7A7A7] text-[#A7A7A7]">
											<p className="pr-2">{diskusi.author}</p>
											<p className="pr-2">{diskusi.date}</p>
											<p>{diskusi.kategori}</p>
										</div>
										<p className="font-normal">{diskusi.message}</p>
										<a
											href="/forum_detail"
											className="flex self-end items-center pt-1 hover:text-[#4AD74F] text-[#FFD8BE]"
										>
											<span className="self-start ml-1 text-sm font-medium  md:ml-2">
												View More
											</span>
											<svg
												className="w-6 h-6 "
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
													clip-rule="evenodd"
												></path>
											</svg>
										</a>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
