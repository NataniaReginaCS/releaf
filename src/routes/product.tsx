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
        <div className="flex justify-center bg-white items-center min-h-screen  bg-gray-100">
            <div className="bg-white mt-12 rounded-lg p-6 flex flex-col md:flex-row gap-8">
                <div className="flex order-last flex-row md:order-first md:flex-col gap-4">
                    {products.map((product) => (
                        <img
                            key={product.id}
                            src={product.image}
                            alt={product.color}
                            className={`w-20 h-20 object-cover border-2 rounded-lg cursor-pointer transition ${
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
                    <p className="text-xl font-semibold text-gray-700">
                        Rp 30.000
                    </p>
                    <p className="text-gray-600 mt-2 mb-4">
                        Kaos oblong - Bahan katun combed 30s yang nyaman dan
                        adem. Desain yang elegan dan kekinian. Tersedia dalam
                        ukuran S-XL dan berbagai pilihan warna.
                    </p>
                    <hr className="text-gray-300 text-4" />
                    <div className="mt-4 mb-4">
                        <h3 className="text-gray-700 font-semibold">
                            Available Size
                        </h3>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
                            Small
                        </span>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="mt-4 mb-4">
                        <h3 className="text-gray-700 font-semibold">
                            Hubungi:
                        </h3>
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
                        <p className="text-gray-600">
                            Jalan Anggrek No.20 Yogyakarta
                        </p>
                    </div>
                    <hr className="text-gray-300" />
                </div>
            </div>
        </div>
    );
}
