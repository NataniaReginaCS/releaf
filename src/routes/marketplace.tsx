import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import marketplace from "../assets/marketplace.png";
import preloved1 from "../assets/preloved1.png";
import preloved2 from "../assets/preloved2.png";

export const Route = createFileRoute("/marketplace")({
  component: MarketplaceComponent,
});

function MarketplaceComponent() {
  return (
    <>
      <section className="h-full grid grid-cols-1 md:grid-cols-2 items-center bg-white mt-20 md:mt-20">
        <div className="w-full px-11 text-center md:text-left md:mx-20 ">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4">
            Give your clothes
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4">
            a new life with
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4">
            sustainable style.
          </h2>
          <p className="text-xl mt-4 text-gray-600 md:mt-7">
            Discover and sell preloved fashion—give your clothes a new home
            while embracing sustainable style.
          </p>
          <div className="mt-6 grid grid-cols-2 md:flex md:space-x-6 text-xl ">
            <div className="flex flex-col items-center md:items-start max-sm:mr-2">
              <h2 className="text-3xl font-bold text-gray-800 ">500+</h2>
              <p className="text-xl text-gray-600  max-sm:pt-2">
                Successful Transactions
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start md:mt-0 md:border-l border-grey-100 md:pl-7">
              <h2 className="text-3xl font-bold text-gray-800">250+</h2>
              <p className="text-xl text-gray-600 max-sm:pt-2">
                Preloved Items Given a New Life
              </p>
            </div>
          </div>
        </div>
        <div className="max-sm:mt-15 w-full flex justify-center">
          <img
            src={marketplace}
            alt="ReLeaf Marketplace"
            className="w-full md:w-auto md:h-140 h-70 object-cover"
          />
        </div>
        <div className=" md:px-0 col-span-1 md:col-span-2 h-[50px] md:h-[70px] bg-gray-300 w-full italic text-black text-center pt-3 md:pt-5 md:text-xl">
          Style meets sustainability—rewear, reshare, revive.
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-10 md:px-20 align-center md:mt-10 mt-15 ">
        <div className="w-full relative md:px-11 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 md:mt-4">
            Explore Preloved Fashion
          </h2>
          <p className="mt-7 text-xl max-sm:text-justify text-gray-600">
            Discover stylish, sustainable, and affordable preloved fashion. Give
            every piece a second life while reducing fashion waste!
            <br />
            <br />{" "}
            <span className="italic text-md">
              Step: Explore, Select, and Contact the Owner.
            </span>
          </p>

          <Link to="/view">
            <button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mt-10 mb-4 rounded-lg w-48 hover:bg-green-100 cursor-pointer">
              Start Explore
            </button>
          </Link>
        </div>
        <div className="w-screen md:w-4xl flex justify-center mt-4 mb-10 md:mt-0 relative index-10">
          <img
            src={preloved1}
            alt="ReLeaf Explore Preloved 1"
            className="md:w-200 md:mt-20 md:mr-10"
          />
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center md:justify-between bg-white md:px-20 align-center max-sm:mb-20">
        <div className="w-full relative md:px-11 md:mb-35 md:order-2 px-10">
          <h2 className="max-sm:mt-10 text-3xl md:text-5xl font-bold text-gray-800 md:mt-4">
            Upload Your Preloved Fashion
          </h2>
          <p className="max-sm:text-justify  mt-7 text-xl text-gray-600">
            Give your clothes a second life! List your preloved fashion, find
            new owners, and contribute to a more sustainable future.
            <br />
            <br />{" "}
            <span className="italic text-md">
              Step: Upload and wait to be contacted.
            </span>
          </p>
          <Link to="/upload">
            <button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mt-10 mb-4 rounded-lg w-48 hover:bg-green-100 cursor-pointer">
              Start Upload
            </button>
          </Link>
        </div>
        <div className="md:ml-16 w-screen md:w-4xl flex justify-center md:mt-4 md:mb-30 mt-20 relative index-10">
          <img
            src={preloved2}
            alt="ReLeaf Explore Preloved 2"
            className="md:w-200 md:mt-20 md:mr-10 w-130"
          />
        </div>
      </section>
    </>
  );
}
