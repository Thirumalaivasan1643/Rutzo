"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";
import { Lightbulb, Sparkles } from "lucide-react";

export default function Aproch() {
  return (
    <div className={`${poppins.className}  `}>
      {/* Desktop only */}
      <div className="hidden lg:flex min-h-[400px] w-full  py-20  justify-center">

        {/* Main Container */}
        <div className="flex   gap-16 max-w-5xl w-full px-6">

          {/* Left Section */}
          <div className="w-1/2 text-center flex flex-col items-center">

            {/* Icon */}
            <Lightbulb size={40} className="text-gray-600 mb-4" />

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-600 mb-4">
              Our <span className="text-orange-500">Approach</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed max-w-md text-xl">
              We focus on understanding the actual problem before building
              the solution. Our process is simple — analyze, design, build,
              optimize, and scale. We prioritize performance, security,
              usability, and long-term stability in everything we create.
            </p>

          </div>

          {/* Divider */}
          <div className="w-[2px] h-56 bg-orange-400 mt-20"></div>

          {/* Right Section */}
          <div className="w-1/2 text-center flex flex-col items-center">

            {/* Icon */}
            <Sparkles size={40} className="text-gray-600 mb-4" />

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-600 mb-4">
              Why We <span className="text-orange-500">Exist</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed max-w-md text-xl">
              Many businesses struggle with inefficient systems, weak digital
              presence, and poor technical execution. Rutzo Tech was built to
              change that by delivering smart, reliable, and scalable digital
              solutions that create real impact, not just digital noise.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
