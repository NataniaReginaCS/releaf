import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#A3D9A5] px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold">ReLeaf Fashion</h3>
          <p className="text-sm mt-2">
            ReLeaf Fashion redefines sustainable style, creating eco-friendly
            fashion for a better tomorrow.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Marketplace</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Overview</li>
            <li>Shop Preloved Fashion</li>
            <li>Upload Preloved Fashion</li>
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
        <div>
          <h3 className="font-bold">Learn & Act</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Learn</li>
            <li>Donation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Join Our Newsletter</h3>
          <p className="text-sm mt-2">
            Be the first to know about our latest updates and more.
          </p>
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 w-full text-black rounded-l-lg"
            />
            <button className="bg-orange-400 p-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-20">
        © 2025 ReLeaf Fashion. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
