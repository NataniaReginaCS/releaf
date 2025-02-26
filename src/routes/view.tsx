import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import wallpaperCommunity from "../assets/community.png";

const products = [
    {
        id: 1,
        name: "Baju Warna warni",
        price: 25000,
        image: "/images/shirt1.png",
    },
    {
        id: 2,
        name: "One Set Dress hijau",
        price: 25000,
        image: "/images/dress1.png",
    },
    {
        id: 3,
        name: "Bottom pink woman",
        price: 25000,
        image: "/images/bottom1.png",
    },
    { id: 4, name: "Baju Olahraga", price: 25000, image: "/images/shirt2.png" },
    {
        id: 5,
        name: "Oneset baju imut",
        price: 25000,
        image: "/images/oneset1.png",
    },
    {
        id: 6,
        name: "Bottom Purple Sports",
        price: 25000,
        image: "/images/bottom2.png",
    },
];

export const Route = createFileRoute("/view")({
    component: ViewComponent,
});

function ViewComponent() {
    const [search, setSearch] = useState("");
    return (
        <>
            <div className="min-h-screen text-black bg-white">
                <div className="flex flex-col items-center md:flex-row gap-6 p-6">
                    <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow">
                        <h2 className="font-semibold text-lg mb-4">Filters</h2>
                        <div className="mb-4">
                            <h3 className="font-medium">Harga</h3>
                            <div>
                                <input
                                    type="radio"
                                    name="price"
                                    id="low"
                                    className="mr-2"
                                />
                                <label htmlFor="low">Hingga Rp 50.000</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="price"
                                    id="mid"
                                    className="mr-2"
                                />
                                <label htmlFor="mid">
                                    Rp 50.000 - Rp 100.000
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="price"
                                    id="high"
                                    className="mr-2"
                                />
                                <label htmlFor="high">Diatas Rp 100.000</label>
                            </div>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded w-full mt-4">
                            Terapkan
                        </button>
                    </div>

                    <div className="w-full flex flex-col">
                        <input
                            type="text"
                            placeholder="Cari Produk"
                            className="w-full mb-4 border rounded-full px-4 py-2 w-80 border-none outline-none bg-gray-100"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products
                                .filter((p) =>
                                    p.name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white p-4 rounded-lg shadow"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-40 object-cover mb-2"
                                        />
                                        <h3 className="text-lg font-semibold">
                                            {product.name}
                                        </h3>
                                        <p className="text-green-600 font-bold">
                                            Rp {product.price.toLocaleString()}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
