"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { poppins } from "../../font/poppins";

function TechHub() {
  // Detect real device once
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  return (
    <div>
      {/* ===================================================== */}
      {/* DESKTOP VERSION */}
      {/* ===================================================== */}
      <div className="hidden lg:block xl:block 2xl:block ">
        <section
          className={`${poppins.className} w-full min-h-[clamp(300px,50vh,400px)] py-[5%] bg-white flex items-center`}
        >
          <div className="w-[90%] max-w-7xl mx-auto px-[5%] xl:px-[8%] flex flex-row items-center justify-between gap-[clamp(24px,5vw,40px)]">
            {/* LEFT CONTENT */}
            <div className="max-w-xl flex-1 text-left">
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-gray-700">
                Discover Our <span className="text-[#DF6100]">Tech Hub</span>
              </h2>

              <div className="mt-[clamp(16px,3vh,24px)] space-y-[clamp(12px,2vh,16px)]">
                <p className="text-gray-500 leading-relaxed text-[clamp(14px,1.2vw,16px)]">
                  At Rutzo Tech, we are a passionate team of developers,
                  designers, and digital thinkers united by a mission to turn
                  visionary ideas into powerful digital products. With diverse
                  skills and deep-rooted values, we craft solutions that drive
                  real impact for our client.
                </p>

                <p className="text-gray-500 leading-relaxed text-[clamp(14px,1.2vw,16px)]">
                  Collaboration fuels our creativity. By blending tradition with
                  innovation, and merging bold ideas with technical precision,
                  we deliver results that not only meet expectations — but
                  redefine them.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-shrink-0 w-[clamp(200px,40%,350px)]">
              <Image
                src="/techhub.png"
                alt="Tech Hub Illustration"
                width={350}
                height={350}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </section>
      </div>



      {/* ===================================================== */}
      {/* MOBILE VERSION */}
      {/* ===================================================== */}
      <div className="block lg:hidden xl:hidden 2xl:hidden md:block sm:block">
        <section
          className={`${poppins.className} w-full min-h-[600px] bg-white flex items-center`}
        >
          
          <div className="w-[90%] mx-auto px-[4%] flex flex-col items-center gap-4">


            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Discover Our <span className="text-[#DF6100]">Tech Hub</span>
              </h2>

              <div className="mt-3 space-y-2">
                <p className="text-gray-500 leading-snug text-sm">
                  At Rutzo Tech, we are a passionate team of developers,
                  designers, and digital thinkers united by a mission to turn
                  visionary ideas into powerful digital products.
                </p>

                <p className="text-gray-500 leading-snug text-sm">
                  Collaboration fuels our creativity. By blending tradition with
                  innovation, and merging bold ideas with technical precision,
                  we deliver results that redefine expectations.
                </p>
              </div>
            </div>




            {/* IMAGE */}
            <div className="mx-auto">
              <Image
                src="/techhub.png"
                alt="Tech Hub Illustration"
                width={250}
                height={250}
                className="w-[300px] h-80"
                priority
              />
            </div>

            {/* CONTENT */}
            
          </div>
        </section>
      </div>

























    </div>
  );
}

export default TechHub;
