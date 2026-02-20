"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function Internship() {
  return (
    <div className={`${poppins.className} bg-[#f5f5f5]`}>

      {/* SECTION */}
      <section className="min-h-screen w-full h-[800px] flex flex-col items-center justify-center px-6   py-10  pt-60">

        {/* TOP IMAGE */}
        <div className="flex justify-center items-center">
          <Image
            src="/Career.png"   // put your image in public folder
            alt="Internship Open Soon"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>


        {/* TITLE */}
        <h2 className="mt-10 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 text-center">
          Internship 2026 –{" "}
          <span className="text-orange-500 font-semibold">
            Open Soon
          </span>
        </h2>


        {/* DESCRIPTION */}
        <p className="mt-6 max-w-2xl text-center text-gray-500 text-sm md:text-base leading-relaxed">
          Join a team that builds real solutions, solves real problems, and
          creates real impact. At Rutzo Tech, we don’t just offer jobs — we
          offer opportunities to learn, grow, and build meaningful technology
          that helps businesses succeed.
        </p>


        {/* SECOND DESCRIPTION */}
        <p className="mt-4 max-w-2xl text-center text-gray-500 text-sm md:text-base leading-relaxed">
          We are always looking for passionate, skilled, and driven individuals
          who want to push boundaries and grow with a fast-moving digital company.
        </p>

      </section>

    </div>
  );
}
