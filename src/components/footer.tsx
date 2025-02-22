import React, { useState } from "react";
import icon from "../assets/icon.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000); 
  };


  return (
    <footer className="bg-[#A3D9A5] px-20 py-10 text-[#333333] sticky top-0 w-full z-50">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div>
          <img src= {icon} alt="ReLeaf Fashion Icon" className="w-10 float-left" /> 
          <h3 className="font-bold text-lg">ReLeaf Fashion</h3>
          <p className="text-sm mt-3 ml-2">
            ReLeaf Fashion redefines sustainable style, creating eco-friendly
            fashion for a better tomorrow.
          </p>
        </div>
        <div className="ml-13">
          <h3 className="font-bold">Marketplace</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Overview</li>
            <li>Shop Preloved Fashion</li>
            <li>Upload Preloved Fashion</li>
          </ul>
        </div>
        <div className="ml-10">
          <h3 className="font-bold">Learn & Act</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Learn</li>
            <li>Donation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Community</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>About Us</li>
            <li>Forum Discussions</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="mr-10 md:mr-0 mt-5 md:mt-0 ">
          <h3 className="font-bold">Join Our Newsletter</h3>
          <p className="text-sm mt-2">
            Be the first to know about our latest updates and more.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full text-black text-xs border border-gray-300 rounded-lg"
            />
            <button className="bg-[#FFD8BE] p-2 rounded-lg text-sm w-40 hover:bg-green-100 cursor-pointer" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {isSubscribed && (
        <p className="text-[#333333] mt-2 text-right text-sm">Thank you for subscribing!</p>
      )}
      <div className="border-b border-gray-300 mt-10"></div>
      <div className="place-content-between flex flex-col md:flex-row ">
        <div className="mt-5 ml-2 flex gap-5">
          <a href="https://web.facebook.com/" target="_blank" className="hover:text-[#FFD8BE]">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="hover:text-[#FFD8BE]">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" className="hover:text-[#FFD8BE]">
            <FaTiktok className="w-5 h-5" />
          </a>
        </div>
        <p className="text-center text-sm mt-5">
          © 2025 ReLeaf Fashion. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
