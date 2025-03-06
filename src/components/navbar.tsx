import React, { useState, useEffect, useRef } from "react";
import icon from "../assets/icon.png";
import { FaCaretDown, FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";

type DropdownProps = {
    title: string;
    items: { label: string; path: string }[];
    isActive: boolean;
    onClick: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({
    title,
    items,
    isActive,
    onClick,
}) => {
    return (
        <div className="relative">
            <button
                onClick={onClick}
                className="text-gray-700 hover:text-green-600 flex items-center"
            >
                {title} <FaCaretDown />
            </button>
            {isActive && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            ref={navbarRef}
            className="fixed top-0 left-0 w-full p-4 md:p-6 md:py-4 z-50 bg-transparent text-black"
        >
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

                <div className="hidden md:flex space-x-6">
                    <Dropdown
                        title="Marketplace"
                        items={[
                            {
                                label: "Overview",
                                path: "/marketplace",
                            },
                            {
                                label: "Shop Preloved Fashion",
                                path: "/view",
                            },
                            {
                                label: "Upload Preloved Fashion",
                                path: "/upload",
                            },
                        ]}
                        isActive={activeDropdown === "Marketplace"}
                        onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "Marketplace"
                                    ? null
                                    : "Marketplace"
                            )
                        }
                    />
                    <Dropdown
                        title="Learn & Act"
                        items={[
                            { label: "Learn", path: "/learn" },
                            { label: "Donation", path: "/donation" },
                        ]}
                        isActive={activeDropdown === "Learn & Act"}
                        onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "Learn & Act"
                                    ? null
                                    : "Learn & Act"
                            )
                        }
                    />
                    <Dropdown
                        title="Community"
                        items={[
                            { label: "About Us", path: "/about" },
                            { label: "Forum Discussions", path: "/forum" },
                            { label: "Terms & Conditions", path: "/term" },
                        ]}
                        isActive={activeDropdown === "Community"}
                        onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "Community"
                                    ? null
                                    : "Community"
                            )
                        }
                    />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md mt-2 p-4 space-y-4 w-full">
                    <Dropdown
                        title="Marketplace"
                        items={[
                            {
                                label: "Overview",
                                path: "/marketplace",
                            },
                            {
                                label: "Shop Preloved Fashion",
                                path: "/view",
                            },
                            {
                                label: "Upload Preloved Fashion",
                                path: "/upload",
                            },
                        ]}
                        isActive={activeDropdown === "Marketplace"}
                        onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "Marketplace"
                                    ? null
                                    : "Marketplace"
                            )
                        }
                    />
                    <Dropdown
                        title="Learn & Act"
                        items={[
                            { label: "Learn", path: "/learn" },
                            { label: "Donation", path: "/donation" },
                        ]}
                        isActive={activeDropdown === "Learn & Act"}
                        onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "Learn & Act"
                                    ? null
                                    : "Learn & Act"
                            )
                        }
                    />
                    <Dropdown
                        title="Community"
                        items={[
                            { label: "About Us", path: "/about" },
                            { label: "Forum Discussions", path: "/forum" },
                            { label: "Terms & Conditions", path: "/terms" },
                        ]}
                        isActive={activeDropdown === "Community"}
                        onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "Community"
                                    ? null
                                    : "Community"
                            )
                        }
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
