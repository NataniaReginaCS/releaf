import * as React from "react";
import { createFileRoute } from '@tanstack/react-router'
import wallpaperCommunity from "../assets/community.png";

export const Route = createFileRoute('/community')({
  component: Community,
})

function Community() {
  return (
    <>
      <section className="h-screen bg-white">
          <h1 className="text-[#142E38] absolute z-10 font-bold text-6xl text-center w-screen top-[40%] text-center">Join the ReLeaf Fashion Community</h1>
          <p className="text-[#142E38] absolute z-10 text-xl text-center w-screen top-[50%] text-center ">Connect, share and grow together in a community that cares about </p>
          <p className="text-[#142E38] absolute z-10 text-xl text-center w-screen top-[53%] text-center ">sustainable fashion. Find inspiration, discussions and exciting challenges to </p>
          <p className="text-[#142E38] absolute z-10 text-xl text-center w-screen top-[56%] text-center ">make preloved fashion a lifestyle.</p>
          <div className="absolute space-x-4 text-lg md:text-xl z-50 top-[65%] text-center w-screen">
              <button
                className="bg-white outline outline-[#D5EEC6] text-[#333333] px-4 py-2 mb-4 rounded-full w-2/3 md:w-54 hover:bg-green-100 cursor-pointer"
                onClick={() => (window.location.href = "#startLearning")}
              >
                About Us
              </button>
              <button
                className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mb-4 rounded-full w-2/3 md:w-54 hover:bg-green-100 cursor-pointer"
                onClick={() => (window.location.href = "/marketplace")}
              >
                Forum Discussions
              </button>
              <button
                className="bg-[#FFD8BE] text-[#333333] px-4 py-2 mb-4 rounded-full w-1/3 md:w-54 hover:bg-green-100 cursor-pointer"
                onClick={() => (window.location.href = "/marketplace")}
              >
                Terms & Conditions
              </button>
            </div>
        <img src= {wallpaperCommunity} alt="wallpaper Community" className="absolute w-screen z-1 opacity-20 h-[100%]"/>
        <div className="w-screen bg-[#ACACAC] opacity-100 h-[98%]">
        </div>
      </section>
      
    </>
  )
}
