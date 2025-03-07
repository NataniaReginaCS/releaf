import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import wallpaperLearn from "../assets/edukasi1.png";
import maskot3 from "../assets/maskot3.png";
import maskot4 from "../assets/maskot4.png";
import maskot5 from "../assets/maskot5.png";
import maskot6 from "../assets/maskot6.png";
import check from "../assets/check.png";

export const Route = createFileRoute("/learn")({
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
					<button className="bg-[#FFD8BE] text-[#333333] px-6 py-2 rounded-full hover:bg-green-100" onClick={() => (window.location.href = "/donation")}>
						
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
					Preloved: Smart Choices for Style and Earth
				</h1>
				<p className="text-xl pt-5 text-center px-5">
					Give fashion a second chance, be smarter, waste less!
				</p>
				<div className="flex flex-col md:justify-center mt-10 md:mx-30 mx-4">
					<h2 className="text-xl font-bold md:mt-4 bg-[#D2D2D2] p-3 md:w-[50%] ">
						Wasted Clothes: Indonesia's Fashion Waste Footprint
					</h2>
					<p className="text-lg md:mx-20 mx-5 p-5 bg-[#E6E6E6] ">
						In 2021, clothing waste in Indonesia reached 2.3 million tons. This figure is equivalent to 12% of total household waste. Only 0.3 million tons were recycled. Most of the clothing waste ends up in landfills without proper management. This fact highlights the huge impact of the fashion industry on the environment.</p>
				</div>
				<div className="flex flex-col justify-center mt-10 md:mx-30 mx-4">
					<h2 className="text-xl font-bold bg-[#D2D2D2] p-3 md:w-[50%]">
						Preloved: Small Steps for a Greener Earth
					</h2>
					<p className="text-lg md:mx-20 mx-5 p-5 bg-[#E6E6E6]">
						Buying preloved helps reduce new production and carbon emissions, extends the life cycle of clothing, reduces textile waste ending up in landfill, and supports a more sustainable, circular economy.
					</p>
				</div>
				<div className="flex flex-col justify-center mt-10 md:mx-30 mx-4">
					<h2 className="text-xl font-bold bg-[#D2D2D2] p-3 md:w-[50%]">
						Extend the Life of Clothes, Reduce Waste Footprint
					</h2>
					<p className="text-lg md:mx-20 mx-5 p-5 bg-[#E6E6E6]">
						Extending the life cycle of clothing helps reduce textile waste, reduces resource use and reduces carbon emissions from new production. By supporting a circular economy, this creates more sustainable and environmentally friendly consumption patterns.
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
							Smart Tips for Caring for Clothes{" "}
						</h1>
						<ul
							className="list-image-[url(${check})] list-outside list-disc mt-10 md:ml-10 mx-20 max-sm:text-justify text-left text-lg"
						>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Using cold water helps maintain the color and fibers of the fabric so that they are not easily damaged.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Choose an environmentally friendly detergent that is free of harsh ingredients to keep your clothes durable.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Dry clothes naturally to prevent shrinkage and maintain fabric elasticity.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Fold delicate fabrics and hang wrinkle-prone items to maintain their shape.
							</li>
							<li className="pl-3 ml:pl-0 mb-5 align-top">
								Sew up loose buttons or small tears so that the clothes can be used longer and don't end up as quickly as waste.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="pt-20 md:pt-40 px-5 md:px-0 bg-white text-[#333333] pb-20 md:pb-30 ">
				<h1 className="text-3xl md:text-4xl font-bold text-center">
					Benefits of Exchanging Clothes Compared to Buying New Clothes
				</h1>
				<div className="max-sm:hidden absolute bg-[#D2D2D2] w-full h-50 md:top-[473%]"></div>
				<div className="grid grid-flow-col grid-cols-3 max-sm:grid-rows-3 gap-20 text-center mt-0 md:mt-30 mx-10 md:mx-40 max-sm:h-400 max-sm:pt-10">
					<div className="flex flex-col justify-center p-3 md:p-5 rounded-3xl shadow-xl bg-white z-10 max-sm:w-70 ">
						<img src={maskot4} alt="maskot4" className="w-30 md:w-40 mx-auto" />
						<h2 className="text-2xl font-bold pt-5">
							Reducing Waste & Carbon Footprint
						</h2>
						<p className="pt-5">
							Swapping clothes reduces textile waste ending up in landfills and slows environmental pollution from producing new clothes.
						</p>
					</div>
					<div className="flex flex-col justify-center p-3 md:p-5 rounded-3xl shadow-xl bg-white z-10 max-sm:w-70">
						<img src={maskot5} alt="maskot5" className="w-30 md:w-40 mx-auto" />
						<h2 className="text-2xl font-bold pt-5">
							Saving Natural Resources
						</h2>
						<p className="pt-5">
							Swapping clothes helps save water and energy used in the production of new clothes and reduces carbon emissions from the manufacturing and distribution process.
						</p>
					</div>
					<div className="flex flex-col justify-center p-3 md:p-5 rounded-3xl shadow-xl bg-white z-10 max-sm:w-70">
						<img src={maskot6} alt="maskot6" className="w-30 md:w-40 mx-auto" />
						<h2 className="text-2xl font-bold pt-5">
							Supporting a Circular Economy
						</h2>
						<p className="pt-5">
							Swapping clothes extends the life cycle of clothing by reusing them, while encouraging more sustainable and responsible consumption patterns.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
