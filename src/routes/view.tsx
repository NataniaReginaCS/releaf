import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FaAngleRight, FaSistrix } from "react-icons/fa6";
import fashion1 from "../assets/fashion1.png";
import fashion2 from "../assets/fashion2.png";
import fashion3 from "../assets/fashion3.png";
import fashion4 from "../assets/fashion4.png";
import fashion5 from "../assets/fashion5.png";
import fashion6 from "../assets/fashion6.png";

const products = [
	{
		id: 1,
		name: "Colorful Clothes",
		price: 25000,
		image: fashion1,
	},
	{
		id: 2,
		name: "One Set Green Dress",
		price: 25000,
		image: fashion2,
	},
	{
		id: 3,
		name: "Bottom pink woman",
		price: 25000,
		image: fashion3,
	},
	{ id: 4, name: "Tracksuits", price: 25000, image: fashion4 },
	{
		id: 5,
		name: "Cute one set clothes",
		price: 25000,
		image: fashion5,
	},
	{
		id: 6,
		name: "Bottom Purple Sports",
		price: 25000,
		image: fashion6,
	},
];

export const Route = createFileRoute("/view")({
	component: ViewComponent,
});

function ViewComponent() {
	const [search, setSearch] = useState("");
	return (
		<>
			<div className="min-h-full bg-white text-black">
				<div className="mt-17   mx-7 md:mx-32  max-sm:mt-17">
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
									href="/marketplace"
									className="ml-1 text-sm font-medium text-gray-500 hover:text-green-300 md:ml-2"
								>
									Marketplace
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
									View
								</span>
							</div>
						</li>
					</ol>
				</div>
				<div className="w-full flex flex-col items-start pt-5 md:pt-5 md:flex-row gap-6 p-6 md:ps-32 md:pe-32">
					<div className="w-full md:h-full md:w-3/9 bg-white p-4 rounded-lg border border-black">
						<h2 className="text-center font-bold text-lg mb-4">Filters</h2>
						<hr />
						<div className="mb-4 mt-4">
							<div className="flex items-center justify-between">
								<span>Tops</span>
								<FaAngleRight style={{ color: "gray" }} />
							</div>
							<div className="flex items-center justify-between">
								<span>Bottoms</span>
								<FaAngleRight style={{ color: "gray" }} />
							</div>
							<div className="flex items-center justify-between">
								<span>One Set</span>
								<FaAngleRight style={{ color: "gray" }} />
							</div>
						</div>
						<hr />
						<div className="mb-4">
							<h3 className="font-medium my-2">Price</h3>
							<div>
								<input type="radio" name="price" id="low" className="mr-2" />
								<label htmlFor="low">Up to Rp 50.000</label>
							</div>
							<div>
								<input type="radio" name="price" id="mid" className="mr-2" />
								<label htmlFor="mid">Rp 50.000 - Rp 100.000</label>
							</div>
							<div>
								<input type="radio" name="price" id="high" className="mr-2" />
								<label htmlFor="high">Above Rp 100.000</label>
							</div>
						</div>
						<hr />
						<div>
							<h3 className="font-medium my-2">Size</h3>
							<div className="flex flex-wrap gap-y-5 gap-x-5 pb-2">
								<button className="bg-[#FFD8BE] rounded-full w-[30%]">
									Small
								</button>
								<button className="bg-gray-100 rounded-full w-[30%]">
									Medium
								</button>
								<button className="bg-gray-100 rounded-full w-[30%]">
									Large
								</button>
								<button className="bg-gray-100 rounded-full w-[30%]">
									Large-X
								</button>
							</div>
						</div>
						<hr />
						<button className="bg-[#FFD8BE] px-4 py-2 rounded-full w-full mt-4">
							Apply
						</button>
					</div>

					<div className="w-full h-full flex flex-col">
						<input
							type="text"
							placeholder="Search Products"
							className="w-full mb-4 border rounded-full px-4 py-2 w-80 border-none outline-none bg-gray-100"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<a href="/product" className="cursor-pointer">
							<div className="w-full md:w-full grid grid-cols-1 md:grid-cols-3 gap-6">
								{products
									.filter((p) =>
										p.name.toLowerCase().includes(search.toLowerCase())
									)
									.map((product) => (
										<div key={product.id}>
											<div className="flex justfiy-center items-center aspect-square bg-gray-100 p-4 rounded-lg">
												<img
													src={product.image}
													alt={product.name}
													className="w-full h-full h-40 object-cover mb-2"
												/>
											</div>
											<h3 className="text-md font-normal">{product.name}</h3>
											<p className="font-bold">
												Rp {product.price.toLocaleString()}
											</p>
										</div>
									))}
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
