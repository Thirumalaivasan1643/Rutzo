"use client";

import Image from "next/image";
import React from "react";
import { poppins } from "../../font/poppins";

function Idea() {
  return (
    <div>

    <div className="hidden lg:block">
  <section className={`${poppins.className} w-full bg-white`}>
    
    {/* TOP SECTION */}
    <div className="max-w-7xl mx-auto px-20 ">
      <div className="flex items-center justify-between gap-24">

        {/* LEFT IMAGE */}
        <div className="flex-shrink-0">
          <Image
            src="/Thinking face.png"
            alt="Ideas Illustration"
            width={420}
            height={420}
            priority
            className="object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-2xl">

          <h2 className="text-4xl   font-semibold text-gray-700 leading-tight">
            Where <span className="text-[#DF6100]">Ideas</span>
          </h2>

          <h2 className="text-4xl   font-semibold text-[#DF6100] leading-tight mt-2">
            Become Systems
          </h2>

          <p className="mt-8 text-gray-600 text-lg xl:text-xl leading-relaxed">
            We are a technology-focused team that creates reliable software,
            high-performance websites, and strong digital ecosystems for
            modern businesses. Our focus is execution, performance, and
            real-world usability.
          </p>

        </div>
      </div>
    </div>

    {/* BOTTOM SECTION */}
    <div className="mt-24 max-w-4xl mx-auto px-16 ">

      <div className="space-y-12">

        {/* Section 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            What do we actually do?
          </h3>
          <p className="text-gray-600 text-lg mt-3 leading-relaxed">
            We design, develop, and deploy technology that helps businesses
            operate smarter — from custom software and web platforms to
            digital marketing, branding, and user-focused design.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            How do we create impact?
          </h3>
          <p className="text-gray-600 text-lg mt-3 leading-relaxed">
            By combining technology, creativity, and strategy, we build
            solutions that improve efficiency, strengthen digital presence,
            and support consistent business growth.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            What makes us different?
          </h3>
          <p className="text-gray-600 text-lg mt-3 leading-relaxed">
            Clear execution, practical solutions, scalable systems, and a
            strong focus on real business results — not just visuals or theory.
          </p>
        </div>

        {/* Button */}
        <div className="pt-6">
          <div className="w-44 relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-8 py-3 rounded-md text-sm cursor-pointer group">
            
            <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

            <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

            <span className="relative z-10 group-hover:text-white transition-colors duration-150 ease-out">
              Explore Further
            </span>
          </div>
        </div>

      </div>
    </div>

  </section>
</div>



















    {/* mobile  */}

{/* MOBILE - Where Ideas Become Systems */}
<div className="block  md:block sm:block lg:hidden">
  <section className={`${poppins.className} w-full bg-white py-12 px-6`}>

    {/* HEADING */}
    <div className="text-center max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 leading-tight">
        Where <span className="text-[#DF6100]">Ideas</span>
      </h2>

      <h2 className="text-2xl font-semibold text-[#DF6100] mt-1">
        Become Systems
      </h2>

      <p className="mt-5 text-gray-500 text-sm leading-relaxed">
        We are a technology-focused team that creates reliable software,
        high-performance websites, and strong digital ecosystems for
        modern businesses. Our focus is execution, performance,
        and real-world usability.
      </p>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center mt-6">
      <Image
        src="/Thinking face.png"
        alt="Ideas Illustration"
        width={260}
        height={260}
        priority
        className="object-contain"
      />
    </div>

    {/* INFO SECTIONS */}
    <div className="mt-10 flex flex-col items-center text-center space-y-8">

      {/* Section 1 */}
      <div className="max-w-sm">
        <h3 className="text-gray-800 font-semibold text-lg">
          What do we actually do?
        </h3>
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          We design, develop, and deploy technology that helps businesses
          operate smarter — from custom software and web platforms to
          digital marketing and user-focused design.
        </p>
      </div>

      {/* Section 2 */}
      <div className="max-w-sm">
        <h3 className="text-gray-800 font-semibold text-lg">
          How do we create impact?
        </h3>
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          By combining technology, creativity, and strategy, we build
          solutions that improve efficiency, strengthen digital presence,
          and support consistent business growth.
        </p>
      </div>

      {/* Section 3 */}
      <div className="max-w-sm">
        <h3 className="text-gray-800 font-semibold text-lg">
          What makes us different?
        </h3>
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          Clear execution, practical solutions, scalable systems, and
          strong focus on real business results — not just visuals.
        </p>
      </div>

      {/* BUTTON */}
      <div className="pt-4">
        <div className="relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-7 py-2.5 rounded-md text-sm cursor-pointer group">

          <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

          <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

          <span className="relative z-10 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
            Explore Further
          </span>

        </div>
      </div>

    </div>

  </section>
</div>







     </div>
  );
}

export default Idea;
