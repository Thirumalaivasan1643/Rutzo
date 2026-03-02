import React from "react";
import Image from "next/image";
import { poppins } from "../../font/poppins";

function Approch() {
  return (
    <div>

      {/* LAPTOP & DESKTOP - Approach & Why We Exist */}
      <div className="hidden lg:block py-16">
        <div className={poppins.className}>
          <div className="max-w-7xl mx-auto px-16">
            <div className="grid grid-cols-2 gap-16 items-start">
              {/* LEFT SIDE */}
              <div className="flex flex-col items-center text-center px-8">
                <Image
                  src="/Exist.png"
                  alt="Approach icon"
                  width={70}
                  height={70}
                  className="mb-6"
                />

                <h2 className="text-3xl font-semibold mb-6 text-gray-700 ">
                  Our <span className="text-orange-500">Approach</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  We focus on understanding the actual problem before building
                  the solution. Our process is simple — analyze, design, build,
                  optimize, and scale. We prioritize performance, security,
                  usability, and long-term stability in everything we create.
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-center text-center px-8 border-l border-orange-400">
                <Image
                  src="/Application.png"
                  alt="Why we exist icon"
                  width={70}
                  height={70}
                  className="mb-6"
                />

                <h2 className="text-3xl font-semibold text-gray-700 mb-6  ">
                  Why We <span className="text-orange-500">Exist</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Many businesses struggle with inefficient systems, weak
                  digital presence, and poor technical execution. Rutzo Tech was
                  built to change that by delivering smart, reliable, and
                  scalable digital solutions that create real impact — not just
                  digital noise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* mobile */}

      <div className="md:block sm:block block xl:hidden 2xl:hidden lg:hidden py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main container */}
          <div className="grid grid-cols-1 gap-12">
            {/* OUR APPROACH */}
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <Image
                src="/Exist.png"
                alt="Approach icon"
                width={60}
                height={60}
                className="mb-4"
              />

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
                Our <span className="text-orange-500">Approach</span>
              </h2>

              {/* Content */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
                We focus on understanding the actual problem before building the
                solution. Our process is simple — analyze, design, build,
                optimize, and scale. We prioritize performance, security,
                usability, and long-term stability in everything we create.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-[2px] bg-orange-500 mx-auto"></div>

            {/* WHY WE EXIST */}
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <Image
                src="/Application.png"
                alt="Exist icon"
                width={60}
                height={60}
                className="mb-4"
              />

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
                Why We <span className="text-orange-500">Exist</span>
              </h2>

              {/* Content */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
                Many businesses struggle with inefficient systems, weak digital
                presence, and poor technical execution. Rutzo Tech was built to
                change that by delivering smart, reliable, and scalable digital
                solutions that create real impact, not just digital noise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approch;
