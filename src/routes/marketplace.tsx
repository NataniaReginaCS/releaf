import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import marketplace from "../assets/marketplace.png";
import preloved1 from "../assets/preloved1.png";
import preloved2 from "../assets/preloved2.png";

export const Route = createFileRoute("/marketplace")({
	component: MarketplaceComponent,
});

function MarketplaceComponent() {
	return (
		<>
			<section className="h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-white px-20 align-center my-10 mt-60 md:my-0 mt-0">
				<div className="w-full relative px-11">
					<h2 className="text-6xl font-bold text-gray-800 mt-4">
						Give your clothes
					</h2>
					<h2 className="text-6xl font-bold text-gray-800 mt-4">a new life with</h2>
					<h2 className="text-6xl font-bold text-gray-800 mt-4">
						sustainable style.
					</h2>
					<p className="mt-7 text-xl text-gray-600">
						Discover and sell preloved fashion—give your clothes a new home
					</p>
					<p className="mt-4 text-xl text-gray-600">
						while embracing sustainable style.
					</p>
					<div className="mt-6 space-x-4 text-xl flex flex-col md:flex-row ">
						<div className="flex flex-col pr-5">
							<h2 className="text-3xl font-bold text-gray-800 mt-4">500+</h2>
							<p className="text-xl text-gray-600">Successful Transactions</p>
						</div>
						<div className="border-l border-gray"></div>
						<div className="flex flex-col pl-5">
							<h2 className="text-3xl font-bold text-gray-800 mt-4">250+</h2>
							<p className="text-xl text-gray-600">Preloved Items Given a New Life</p>
						</div>
					</div>
				</div>
				<div className="w-4xl flex justify-center mt-4 mb-10 md:mt-0 relative index-10">
					<img
						src={marketplace}
						alt="ReLeaf Marketplace"
						className="w-[100%] h-160 mt-15 mr-10"
					/>
				</div>
				<div className="absolute md:bottom-10 md:left-0 w-[100%] h-[50px] bg-gray-300 w-200 italic text-black text-center pt-3">
					Style meets sustainability—rewear, reshare, revive.
				</div>
			</section>
			<section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-20 align-center my-10 mt-60 md:my-0 mt-0">
				<div className="w-full relative px-11 mb-30">
					<h2 className="text-5xl font-bold text-gray-800 mt-4">
						Explore Preloved Fashion
					</h2>
					<p className="mt-7 text-xl text-gray-600">
						Discover stylish, sustainable, and affordable preloved fashion. Give every
						piece a second life while reducing fashion waste!
					</p>
					<button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mt-10 mb-4 rounded-lg w-48">
						Start Explore
					</button>
				</div>
				<div className="w-4xl flex justify-center mt-4 mb-10 md:mt-0 relative index-10">
					<img
						src={preloved1}
						alt="ReLeaf Explore Preloved 1"
						className="w-200 mt-20 mr-10"
					/>
				</div>
			</section>
			<section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-20 align-center my-10 mt-60 md:my-0 mt-0">
				<div className="w-full relative px-11 mb-35 md:order-2">
					<h2 className="text-5xl font-bold text-gray-800 mt-4">
						Upload Your Preloved Fashion
					</h2>
					<p className="mt-7 text-xl text-gray-600">
						Give your clothes a second life! List your preloved fashion, find new
						owners, and contribute to a more sustainable future.
					</p>
					<button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mt-10 mb-4 rounded-lg w-48 cursor-pointer" 
					onClick={() => (window.location.href = "/marketplaceJual")}>
						Start Upload
					</button>
				</div>
				<div className="ml-16 w-4xl flex justify-center mt-4 mb-30 md:mt-0 relative index-10">
					<img
						src={preloved2}
						alt="ReLeaf Explore Preloved 2"
						className="w-200 mt-20 mr-10"
					/>
				</div>
			</section>
		</>
	);
}
