"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function About() {
  return (
    <div
      className={`
        hidden lg:block
        ${poppins.className}
      `}
      style={{
        background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          min-h-screen
          flex flex-col
          justify-center
          items-center
          text-center
          
        
          lg:px-20
          xl:px-32
          
          
          
        "
      >
        {/* IMAGE */}
        <div className="flex justify-center mt-8 ">
          <Image
            src="/about us page-pana 1 1.png"
            alt="About Us"
            width={600}
            height={600}
            className="
              object-contain
              
              lg:w-[800px]
              xl:w-[800px]
              2xl:w-[1000px]
            "
            priority
          />
        </div>

        {/* DESCRIPTION */}
        <div
          className="
            text-gray-500
            leading-relaxed
            space-y-4
            text-xl 
 
          "
        >
          <p>
            Rutzo Tech is a technology-driven digital solutions company focused
            on building practical, result-oriented products and services for
            modern businesses. We combine technical expertise, creative
            thinking, and strategic execution to help companies grow, operate
            efficiently, and stay competitive in the digital world.
          </p>

          <p>
            We don’t just build software or run campaigns — we solve real
            business problems. Every solution we create is designed to improve
            performance, simplify operations, and deliver measurable results.
          </p>
        </div>
      </div>
    </div>
  );
}
