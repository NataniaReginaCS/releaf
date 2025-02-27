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
        name: "Baju Warna warni",
        price: 25000,
        image: fashion1,
    },
    {
        id: 2,
        name: "One Set Dress hijau",
        price: 25000,
        image: fashion2,
    },
    {
        id: 3,
        name: "Bottom pink woman",
        price: 25000,
        image: fashion3,
    },
    { id: 4, name: "Baju Olahraga", price: 25000, image: fashion4 },
    {
        id: 5,
        name: "Oneset baju imut",
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
                <div className="flex flex-col items-start pt-20 md:pt-25 md:flex-row gap-6 p-6">
                    <div className="w-full md:h-full md:w-3/9 bg-white p-4 rounded-lg border border-black">
                        <h2 className="text-center font-bold text-lg mb-4">
                            Filters
                        </h2>
                        <hr />
                        <div className="mb-4 mt-4">
                            <div className="flex items-center justify-between">
                                <span>Atasan</span>
                                <FaAngleRight style={{ color: "gray" }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Bawahan</span>
                                <FaAngleRight style={{ color: "gray" }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>One Set</span>
                                <FaAngleRight style={{ color: "gray" }} />
                            </div>
                        </div>
                        <hr />
                        <div className="mb-4">
                            <h3 className="font-medium my-2">Harga</h3>
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
                        <hr />
                        <div>
                            <h3 className="font-medium my-2">Ukuran</h3>
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
                            Terapkan
                        </button>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <input
                            type="text"
                            placeholder="Cari Produk"
                            className="w-full mb-4 border rounded-full px-4 py-2 w-80 border-none outline-none bg-gray-100"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <div className="w-full md:w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products
                                .filter((p) =>
                                    p.name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
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
                                        <h3 className="text-md font-normal">
                                            {product.name}
                                        </h3>
                                        <p className="font-bold">
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
