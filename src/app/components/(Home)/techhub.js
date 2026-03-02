"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { poppins } from "../../font/poppins";

function TechHub() {
  // Detect real device once
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  return (
    <div>
      {/* DESKTOP & LAPTOP - Discover Tech Hub */}
      <div className="hidden lg:block">
        <section className={`${poppins.className} w-full py-20  bg-white`}>
          <div className="max-w-7xl mx-auto px-20 ">
            <div className="flex flex-row items-center justify-between gap-16 ">
              {/* LEFT CONTENT */}
              <div className="flex-1 max-w-2xl">
                <h2 className="text-4xl  font-semibold text-gray-700 leading-tight">
                  Discover Our <span className="text-[#DF6100]">Tech Hub</span>
                </h2>

                <div className="mt-10 text-lg   space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At Rutzo Tech, we are a passionate team of developers,
                    designers, and digital thinkers united by a mission to turn
                    visionary ideas into powerful digital products. With diverse
                    skills and deep-rooted values, we craft solutions that drive
                    real impact for our clients.
                  </p>

                  <p className="text-gray-600 text-lg   leading-relaxed">
                    Collaboration fuels our creativity. By blending tradition
                    with innovation, and merging bold ideas with technical
                    precision, we deliver results that not only meet
                    expectations — but redefine them.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 flex justify-end">
                <Image
                  src="/techhub.png"
                  alt="Tech Hub Illustration"
                  width={460}
                  height={460}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===================================================== */}
      {/* MOBILE VERSION */}
      {/* ===================================================== */}
      <div className="block lg:hidden xl:hidden 2xl:hidden md:block sm:block">
        <section
          className={`${poppins.className} w-full min-h-[600px] py-10 bg-white flex items-center`}
        >
          <div className="w-[90%] mx-auto px-[4%] flex flex-col items-center gap-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Discover Our <br />{" "}
                <span className="text-[#DF6100]">Tech Hub</span>
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
