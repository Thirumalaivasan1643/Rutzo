"use client";

import Image from "next/image";
import React from "react";
import { poppins } from "../../font/poppins";

function Idea() {
  return (
    <div className="hidden lg:block">
      <section className={`${poppins.className} w-full  bg-white `}>
        {/* Container */}
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-44 px-6">
          {/* LEFT IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/Thinking face.png"
              alt="Ideas Illustration"
              width={380}
              height={380}
              className="object-contain w-[300px] xl:w-[300px]"
              priority
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col max-w-xl">
            {/* Heading Line 1 */}
            <h2 className="text-3xl xl:text-4xl font-semibold text-gray-700">
              Where <span className="text-[#DF6100]">Ideas</span>
            </h2>

            {/* Heading Line 2 */}
            <h2 className="text-3xl xl:text-4xl font-semibold text-[#DF6100]">
              Become Systems
            </h2>

            {/* Paragraph — MUST be inside same div */}
            <p className="mt-6 text-gray-500 text-md leading-relaxed">
              We are a technology-focused team that creates reliable software,
              high-performance websites, and strong digital ecosystems for
              modern businesses. Our focus is execution, performance, and
              real-world usability.
            </p>
          </div>
        </div>

        <div className={` mt-5 w-full bg-white py-10`}>
          {/* Container */}
          <div className="max-w-xl mx-auto">
            {/* Section 1 */}
            <div className="mb-6">
              <h3 className="text-gray-800 font-semibold text-xl">
                What do we actually do?
              </h3>

              <p className="text-gray-500 text-md mt-1 leading-relaxed">
                We design, develop, and deploy technology that helps businesses
                operate smarter from custom software and web platforms to
                digital marketing, branding, and user focused design.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-6">
              <h3 className="text-gray-800 font-semibold text-xl">
                How do we create impact?
              </h3>

              <p className="text-gray-500 text-md mt-1 leading-relaxed">
                By combining technology, creativity, and strategy, we build
                solutions that improve efficiency, strengthen digital presence,
                and support consistent business growth.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-6">
              <h3 className="text-gray-800 font-semibold text-xl">
                What makes us different?
              </h3>

              <p className="text-gray-500 text-md mt-1 leading-relaxed">
                Clear execution, practical solutions, scalable systems, and a
                strong focus on real business results not just visuals or
                theory.
              </p>
            </div>

            {/* Button */}
           <div className= " w-40 relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-7 py-2 rounded-md text-sm cursor-pointer group shrink-0">
              {/* Animation layer 1 */}
              <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

              {/* Animation layer 2 */}
              <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

              {/* Button text */}
              <span className="relative z-10  group-hover:text-white transition-colors duration-150 ease-out whitespace-nowrap">
             Explore Further
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Idea;
