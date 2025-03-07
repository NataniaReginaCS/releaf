import { createFileRoute } from "@tanstack/react-router";
import donation1 from "../assets/donations1.png";
import donation2 from "../assets/donations2.png";
import donation3 from "../assets/donations3.png";
import donation4 from "../assets/donations4.png";
import quoteleft from "../assets/quoteleft.svg";
import quoteright from "../assets/quoteright.svg";

export const Route = createFileRoute("/donation")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full text-black bg-white pb-15 md:my-0 mt-0  max-sm:pt-0">
			<div className="mt-17 md:px-32 max-sm:mt-17 max-sm:px-7">
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
								href="/learn"
								className="ml-1 text-sm font-medium text-gray-500 hover:text-green-300 md:ml-2"
							>
								Learn & Act
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
								Donation
							</span>
						</div>
					</li>
				</ol>
			</div>
			<div className="flex flex-row items-start justify-center gap-30 flex-wrap w-full md:mt-10 max-sm:mt-10">
				<div className="space-y-12 w-full lg:w-1/2 max-sm:space-y-10">
					<h1 className="text-4xl font-bold text-center max-sm:text-3xl">
						Make an Impact with Your <br /> Donation
					</h1>
					<img className="place-self-center lg:hidden" src={donation1} alt="" />
					<p className="text-2xl text-center max-sm:text-lg max-sm:text-start max-sm:ps-5 max-sm:pe-5">
						Your support helps extend the life of clothing, reduce waste, and
						promote sustainable fashion. Every contribution goes towards
						initiatives that encourage recycling, responsible consumption, and
						community-driven solutions for a greener future. Together, we can
						make fashion a force for good!
					</p>
					<button
						type="submit"
						className="bg-[#FFD8BE] place-self-start justify-center rounded-full flex w-1/4 px-3 py-2 text-sm md:ms-7 md:text-lg  shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 max-sm:w-2/3 max-sm:place-self-center "
					>
						Contact Us
					</button>
				</div>

				<div className="max-lg:hidden">
					<img className="h-full" src={donation1} alt="" />
				</div>
			</div>
			<div className="space-y-5">
				<h1 className="text-5xl font-bold text-center mt-40 max-sm:mt-15 max-sm:text-3xl">
					How does the donation process work?
				</h1>
				<p className="text-lg text-center max-sm:text-lg max-sm:text-start max-sm:ps-5">
					Donate clothes easily! Contact us, our team will pick up, sort, and <br /> distribute or recycle clothes for better sustainability.
				</p>
				<div className="flex flex-row flex-wrap justify-around max-sm:flex-col max-sm:items-center max-sm:gap-y-10 md:mt-12">
					<div className="flex flex-col justify-center rounded-3xl bg-white z-10 w-[20%] max-sm:w-2/3">
						<img src={donation2} alt="maskot5" className="w-full" />
						<div className="bg-[#D2D2D2] p-0 m-0 rounded-sm text-center pb-10 md:h-40">
							<h2 className="text-2xl font-bold pt-5">Contact us</h2>
							<p className="pt-5 px-2">
								Send us your contact details, our team will arrange to pick up your donated clothes.
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center rounded-3xl bg-white z-10 w-[20%] max-sm:w-2/3">
						<img src={donation3} alt="maskot5" className="w-full" />
						<div className="bg-[#D2D2D2] p-0 m-0 rounded-sm text-center pb-10 md:h-40">
							<h2 className="text-2xl font-bold pt-5">Filter</h2>
							<p className="pt-5 px-2">
								Clothes that are still in good condition will be distributed to those in need, while the rest will be recycled.
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center rounded-3xl bg-white z-10 w-[20%] max-sm:w-2/3">
						<img src={donation4} alt="maskot5" className="w-full h-67" />
						<div className="bg-[#D2D2D2] p-0 m-0 rounded-sm text-center pb-10 md:h-40">
							<h2 className="text-2xl font-bold pt-5">Make a Positive Impact</h2>
							<p className="pt-5 px-2">
								Every donation helps reduce textile waste and supports environmental sustainability.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full bg-[#D2D2D2] mt-40 pb-25 max-sm:pb-10 max-sm:ps-5 max-sm:pe-5">
				<h1 className="font-bold text-5xl text-center pt-10 max-sm:text-3xl max-sm:pt-10">
					Thankful Hearts
				</h1>
				<div className="flex flex-row justify-around gap-10 mt-20 max-sm:flex-col max-sm:mt-10">
					<div className="bg-white w-[25%] h-1/4 space-y-1  text-[#6F594A] max-sm:w-full">
						<img src={quoteleft} className="place-self-start"alt="" />
						<blockquote className="text-center px-3">
							The clothes I received are still very good and comfortable to wear. Thank you to everyone who has donated, it really helps!
						</blockquote>
						<blockquote className="text-center">
							— Aisyah, 24 - Student
						</blockquote>
						<img src={quoteright} className="place-self-end" alt="" />
					</div>

          <div className="bg-white w-[25%] h-1/4 space-y-1  text-[#6F594A] max-sm:w-full">
						<img src={quoteleft} className="place-self-start"alt="" />
						<blockquote className="text-center px-3">
							I am grateful to be able to get wearable clothes from this donation. It is very useful for me and my family. Thank you
						</blockquote>
						<blockquote className="text-center">
							— Budi, 30 - Freelancer
						</blockquote>
						<img src={quoteright} className="place-self-end" alt="" />
					</div>

          <div className="bg-white w-[25%] h-1/4 space-y-1  text-[#6F594A] max-sm:w-full">
						<img src={quoteleft} className="place-self-start"alt="" />
						<blockquote className="text-center px-3">
							These donated clothes really help us. Hopefully more people will share with others!
						</blockquote>
						<blockquote className="text-center pt-6">
							— Mother Rina, 40 - IRT
						</blockquote>
						<img src={quoteright} className="place-self-end" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
