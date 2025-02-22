import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import maskot from "../assets/maskot.png";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-white px-20 align-center my-10 mt-60 md:my-0 mt-0">
        <div className="absolute md:bottom-100 md:left-140 w-[279px] h-[279px] bg-green-600 opacity-50 rounded-full blur-[200px] shadow-xl"></div>
        <div className="absolute md:top-10 md:left-480 w-[180px] h-[1092.22px] bg-[#F9E1C3] rotate-[38deg] origin-top-left blur-[150px] shadow-xl"></div>
        <div className="w-full relative index-10">
          <span className="bg-[#D5EEC6] text-[#244030] px-3 py-1 rounded-full text-xs">
            Eco-Chic For A Better Tomorrow
          </span>
          <h2 className="text-6xl font-bold text-gray-800 mt-4">WEAVE A</h2>
          <h2 className="text-6xl font-bold text-gray-800 mt-4">
            GREENER FUTURE
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Every Thread Holds A Story—Let’s Rewrite Fashion With
            Sustainability, Creativity, And Purpose. Together, We Extend The
            Life Of Every Piece, Transforming Waste Into Wonder And Style Into A
            Movement.
          </p>
          <div className="mt-6 space-x-4 text-xl">
            <button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mb-4 rounded-full w-48">
              Marketplace
            </button>
            <button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mb-4 rounded-full w-48">
              Learn & Act
            </button>
            <button className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mb-4 rounded-full w-48">
              Community
            </button>
          </div>
        </div>
        <div className="w-4xl flex justify-center mt-4 mb-10 md:mt-0 relative index-10">
          <img src={maskot} alt="ReLeaf Character" className="w-128" />
        </div>
      </section>
    </>
  );
}
