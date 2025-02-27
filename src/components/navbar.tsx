import React, { useState } from "react";
import icon from "../assets/icon.png";
import { FaCaretDown, FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";

type DropdownProps = {
    title: string;
    items: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 flex items-center"
            >
                {title} <FaCaretDown />
            </button>
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full p-4 md:p-6 md:py-4 z-50 bg-transparant text-black">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto flex-wrap">
                <Link to="/">
                    <div className="flex items-center">
                        <img src={icon} alt="icon" className="h-10 w-10 mr-2" />
                        <h1 className="text-xl font-bold text-[#435151]">
                            ReLeaf Fashion
                        </h1>
                    </div>
                </Link>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <FaXmark className="text-black" />
                        ) : (
                            <FaBars className="text-black" />
                        )}
                    </button>
                </div>

                {/* Menu utama */}
                <div className="hidden md:flex space-x-6">
                    <Dropdown
                        title="Marketplace"
                        items={[
                            "Overview",
                            "Shop Preloved Fashion",
                            "Upload Preloved Fashion",
                        ]}
                    />
                    <Dropdown
                        title="Learn & Act"
                        items={["Learn", "Donation"]}
                    />
                    <Dropdown
                        title="Community"
                        items={[
                            "About Us",
                            "Forum Discussions",
                            "Terms & Conditions",
                        ]}
                    />
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md mt-2 p-4 space-y-4 w-full">
                    <Dropdown
                        title="Marketplace"
                        items={[
                            "Overview",
                            "Shop Preloved Fashion",
                            "Upload Preloved Fashion",
                        ]}
                    />
                    <Dropdown
                        title="Learn & Act"
                        items={["Learn", "Donation"]}
                    />
                    <Dropdown
                        title="Community"
                        items={[
                            "About Us",
                            "Forum Discussions",
                            "Terms & Conditions",
                        ]}
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
