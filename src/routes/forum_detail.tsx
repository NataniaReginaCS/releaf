import { createFileRoute } from "@tanstack/react-router";
import { BsChatDotsFill } from "react-icons/bs";

export const Route = createFileRoute("/forum_detail")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full text-black bg-white pb-15 pt-40 pe-15 ps-15 md:my-0 mt-0 text-black max-sm:pt-20 max-sm:pe-5 max-sm:ps-5">
			<div className="w-full h-full flex flex-col">
				<div className="w-full md:w-full grid grid-cols-1 md:grid-cols-1 gap-6 mb-13">
					<div className="flex flex-col gap-y-2 bg-gray-100 p-4 rounded-lg ">
						<h3 className="text-lg font-bold">
							Swap & Style: Preloved Fashion Stories
						</h3>
						<div className="flex flex-row gap-x-2 divide-x-1 divide-[#A7A7A7] text-[#A7A7A7]">
							<p className="pr-2 text-green-500">Kalvin Lawinata</p>
							<p className="pr-2">1 day ago</p>
							<p>Preloved</p>
						</div>
						<p className="font-normal">
							Hey everyone! I recently swapped a jacket through ReLeaf Fashion,
							and it was such a smooth experience. The best part? I found a
							vintage denim jacket that perfectly matches my style! It feels
							great knowing that my old clothes are getting a second life
							instead of ending up in landfills. Have you had any successful
							exchanges? Let’s share our experiences, swap tips, and inspire
							each other to embrace sustainable fashion!
						</p>
					</div>
					<div className="flex flex-row items-center space-x-3 text-[#333333]">
						<BsChatDotsFill />
						<p className="text-black p-0 m-0">3 Komentar</p>
					</div>
					<hr className="border-solid border-[#0000001A]" />

					<div className=" mt-5 md:mt-10 md:clear-right max-sm:w-full max-sm:mx-0 max-sm:mt-5">
						<form className="bg-white p-4 shadow-md md:shadow-xl rounded-lg text-[#18171D] md:w-full md:px-10">
							<h1 className="text-xl md:text-3xl font-medium text-start md:mb-10">
								Tuliskan Komentar
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

							<button
								type="submit"
								className="md:my-10 bg-[#FFD8BE] mt-5 place-self-end justify-center rounded-lg flex w-1/8 px-3 py-2 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
							>
								Send
							</button>
						</form>
					</div>
					<div className="flex flex-col gap-y-5">
						<div className="flex flex-col gap-y-2 bg-gray-100 p-4 rounded-lg mt-4">
							<h3 className="text-lg font-bold">Lawinata ab</h3>
							<p className="pr-2 text-[#A7A7A7]">1 day ago</p>

							<p className="font-normal">
								That sounds awesome! I love the idea of giving clothes a second
								life. How was the quality of the denim jacket you got? Did it
								feel like new, or did it have that perfect vintage wear?
							</p>
							<div className="flex flex-row justify-between max-sm:flex-col max-sm:space-y-5">
								<div className="flex flex-row items-center space-x-3 text-[#333333]">
									<BsChatDotsFill />
									<p className="text-black p-0 m-0">1 Komentar</p>
								</div>

								<button
									type="submit"
									className=" bg-[#FFD8BE] items-center align-middle flex justify-center justify-self-center rounded-lg flex w-1/8 px-3 py-2 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
								>
									Reply
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-y-2 bg-gray-100 p-4 rounded-lg mt-4  w-[97%] place-self-end max-sm:w-[90%]">
							<h3 className="text-lg font-bold">Kalvin Lawinata</h3>
							<p className="pr-2 text-[#A7A7A7]">1 day ago</p>

							<p className="font-normal">
								It was in amazing condition! It had that perfect vintage
								wear—soft, slightly faded, and just the right amount of
								character. Honestly, it feels like it was meant for me!
							</p>
							<div className="flex flex-row justify-between max-sm:flex-col max-sm:space-y-5">
								<div className="flex flex-row items-center space-x-3 text-[#333333]">
									<BsChatDotsFill />
									<p className="text-black p-0 m-0">1 Komentar</p>
								</div>

								<button
									type="submit"
									className=" bg-[#FFD8BE] items-center align-middle flex justify-center justify-self-center rounded-lg flex w-1/8 px-3 py-2 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
								>
									Reply
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-y-2 bg-gray-100 p-4 rounded-lg mt-4">
							<h3 className="text-lg font-bold">VinLawinata</h3>
							<p className="pr-2 text-[#A7A7A7]">1 day ago</p>

							<p className="font-normal">
								Such a great initiative! I swapped a dress last month, and it
								felt amazing knowing someone else is enjoying it now.
							</p>
							<div className="flex flex-row justify-between max-sm:flex-col max-sm:space-y-5">
								<div className="flex flex-row items-center space-x-3 text-[#333333]">
									<BsChatDotsFill />
									<p className="text-black p-0 m-0">1 Komentar</p>
								</div>

								<button
									type="submit"
									className=" bg-[#FFD8BE] items-center align-middle flex justify-center justify-self-center rounded-lg flex w-1/8 px-3 py-2 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
								>
									Reply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
