import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import wallpaperCommunity from "../assets/community.png";
import community1 from "../assets/community1.png";
import { FaWhatsapp, FaDiscord, FaTelegram } from "react-icons/fa6";

export const Route = createFileRoute("/community")({
	component: Community,
});

function Community() {
	return (
		<>
			<section className="h-full w-screen bg-white">
				<h1 className="text-[#142E38] absolute z-10 font-bold text-4xl md:text-6xl text-center w-full top-[18%] md:top-[40%] text-center">
					Join the ReLeaf Fashion Community
				</h1>
				<p className="text-[#142E38] absolute z-10 text-lg md:text-xl text-center w-full md:top-[50%] top-[31%] px-3 mt-5 text-center ">
					Connect, share and grow together in a community that cares about{" "}
				</p>
				<p className="text-[#142E38] absolute z-10 text-lg md:text-xl text-center w-full md:top-[53%] top-[42%] max-sm:px-20 text-center ">
					sustainable fashion. Find inspiration, discussions and exciting
					challenges to{" "}
				</p>
				<p className="text-[#142E38] absolute z-10 text-lg md:text-xl text-center w-full md:top-[56%] top-[55%] text-center ">
					make preloved fashion a lifestyle.
				</p>
				<div className="absolute grid grid-cols-2 justify-end md:space-x-4 text-lg md:text-xl z-50 top-[63%] md:top-[67%] text-center w-[100%]">
					<button
						className="ml-12 bg-white outline outline-[#D5EEC6] text-[#333333] md:px-4 md:py-2 h-10 rounded-full w-35 md:w-54 text-sm hover:bg-green-100 cursor-pointer"
						onClick={() => (window.location.href = "#startLearning")}
					>
						About Us
					</button>
					<button
						className="bg-[#FFD8BE] text-[#333333] md:px-4 md:py-2 mb-4 rounded-full w-35 h-10 md:w-54 text-sm hover:bg-green-100 cursor-pointer"
						onClick={() => (window.location.href = "/marketplace")}
					>
						Forum Discussions
					</button>
					<button
						className="mt-3 ml-28 col-span-2 bg-[#FFD8BE] text-[#333333] h-10 md:px-4 md:py-2 mb-4 rounded-full w-40 md:w-54 text-sm hover:bg-green-100 cursor-pointer"
						onClick={() => (window.location.href = "/marketplace")}
					>
						Terms & Conditions
					</button>
				</div>
				<img
					src={wallpaperCommunity}
					alt="wallpaper Community"
					className="relative z-1 opacity-50 md:h-185 h-150 w-full object-cover"
				/>
				<div className="absolute top-0 w-full bg-[#ACACAC] opacity-50 h-150 md:h-185 z-2"></div>
			</section>
			<section className="mt-15 md:mt-60 md:my-30">
				<div className="flex flex-col md:flex-row gap-30 mx-10 md:mx-40">
					<div className="flex flex-col">
						<h1 className="order-1 text-[#142E38] text-3xl md:text-5xl font-bold mt-10  text-center">
							ReLeaf Community: Connect, Share, and Make an Impact
						</h1>
						<p className="  order-3 text-[#142E38] text-xl mt-10  text-justify">
							ReLeaf Fashion Community is a space for those who care about
							sustainable fashion. Here, you can share information about
							clothing donations, preloved fashion, and various community
							actions that support an eco-friendly lifestyle. Join to stay
							connected, contribute, and inspire positive change together!
						</p>
					</div>
					<img
						src={community1}
						alt="community1"
						className="w-55 self-center md:w-1/3 mt-10 md:mt-0 md:self-right max-sm:relative md:bottom-0 bottom-110"
					/>
				</div>
			</section>
			<section className="mt-20 mb-30 md:mt-40 text-[#142E38] text-center">
				<h1 className="text-3xl md:text-5xl font-bold mb:mt-10">Join Us</h1>
				<p className="text-[#142E38] ml-5 mt-5 md:text-xl md:mt-10  ">
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
		</>
	);
}
