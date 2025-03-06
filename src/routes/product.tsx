import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const products = [
	{ id: 1, image: product1, color: "Gray" },
	{ id: 2, image: product2, color: "Green" },
	{ id: 3, image: product3, color: "Purple" },
];

export const Route = createFileRoute("/product")({
	component: ProdukComponent,
});

function ProdukComponent() {
	const [selectedProduct, setSelectedProduct] = useState(products[0]);

	return (
		<div>
			<div className="mt-17   mx-7 md:mx-32 max-sm:mt-0 mb-5 max-sm:mt-17">
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
							<a
								href="/view"
								className="ml-1 text-sm font-medium text-gray-500 hover:text-green-300 md:ml-2"
							>
								View
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
								Product
							</span>
						</div>
					</li>
				</ol>
			</div>

			<div className="bg-white  rounded-lg p-6 flex flex-col justify-center items-center md:flex-row gap-8">
				<div className="flex order-last flex-row md:order-first md:flex-col gap-4">
					{products.map((product) => (
						<img
							key={product.id}
							src={product.image}
							alt={product.color}
							className={`w-20 h-20 md:w-37 md:h-37 object-cover border-2 rounded-lg cursor-pointer transition ${
								selectedProduct.id === product.id
									? "border-black"
									: "border-gray-300"
							}`}
							onClick={() => setSelectedProduct(product)}
						/>
					))}
				</div>

				<div>
					<img
						src={selectedProduct.image}
						alt="Selected Product"
						className="w-96 h-auto object-cover rounded-lg"
					/>
				</div>

				<div className="max-w-sm order-last">
					<h2 className="text-2xl font-bold">Kaos oblong</h2>
					<p className="text-xl font-semibold text-gray-700">Rp 30.000</p>
					<p className="text-gray-600 mt-2 mb-4">
						Kaos oblong - Bahan katun combed 30s yang nyaman dan adem. Desain
						yang elegan dan kekinian. Tersedia dalam ukuran S-XL dan berbagai
						pilihan warna.
					</p>
					<hr className="text-gray-300 text-4" />
					<div className="mt-4 mb-4">
						<h3 className="text-gray-700 font-semibold">Available Size</h3>
						<span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
							Small
						</span>
					</div>
					<hr className="text-gray-300" />
					<div className="mt-4 mb-4">
						<h3 className="text-gray-700 font-semibold">Hubungi:</h3>
						<p className="flex items-center gap-2 text-gray-600">
							📱 +62896548528
						</p>
						<p className="flex items-center gap-2 text-gray-600">
							✉️ abcdefjkl@gmail.com
						</p>
					</div>

					<hr className="text-gray-300" />
					<div className="mt-4 mb-4">
						<h3 className="text-gray-700 font-semibold">Lokasi:</h3>
						<p className="text-gray-600">Jalan Anggrek No.20 Yogyakarta</p>
					</div>
					<hr className="text-gray-300" />
				</div>
				{/* <div className="flex flex-col rounded-2xl bg-white shadow-md items-center h-60 w-80 order-last">
                <h3>Alur Transaksi</h3>
                <ul>
                    <li>tes 1</li>
                    <li>tes 2</li>
                </ul>
            </div> */}
			</div>
		</div>
	);
}
