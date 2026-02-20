"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function Whatwedo() {
  return (
    <div className={poppins.className}>

      <div className="min-h-[300px] w-full  md:px-20 py-16">

        {/* WHAT WE DO SECTION */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1 relative">

            {/* TITLE */}
            <h2 className="text-3xl  md:text-4xl font-semibold text-gray-700">
              What We <span className="text-orange-500">Do</span>
            </h2>

            {/* RESPONSIVE UNDERLINE */}
            <div className="
              absolute
              h-[2px]
              bg-orange-500
              mt-4
              w-[200px]
              md:w-[350px]
              lg:w-[553px]
              2xl:w-[665px]
            "></div>

            {/* IMAGE */}
            <Image
              src="/Thinking face-cuate.png"
              alt="What We Do"
              width={350}
              height={350}
              className="mt-10  object-contain"
              priority
            />

          </div>



          {/* RIGHT SIDE CONTENT BOX */}
          <div className="flex-1">

            <div className="
              border-2 border-orange-500 
              rounded-2xl 
              p-6 2xl:p-20 
              text-gray-600 
              text-base md:text-lg
              leading-relaxed 
              bg-white/60
              shadow-sm
            ">

              <p>
                We specialize in developing custom software, web applications,
                and mobile apps tailored to real business workflows.
              </p>

              <p className="mt-4">
                Alongside technology, we help brands grow through digital
                marketing, strategic social media management, and
                user-focused UI/UX design.
              </p>

              <p className="mt-4">
                Our approach ensures businesses not only go digital but
                succeed digitally with scalable and reliable solutions.
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
