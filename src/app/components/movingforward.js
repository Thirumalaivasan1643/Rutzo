"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function MovingForward() {
  return (
    <div className={`${poppins.className} bg-[#f3f3f3]`}>

      <div className="min-h-[500px] w-full md:px-20 px-6 py-20"
       style={{
            background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
          }}
          >

        {/* SECTION */}
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE */}
          <div className="flex-1 relative">

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-600">
              Moving <span className="text-orange-500">Forward</span>
            </h2>

            {/* UNDERLINE */}
            <div className="
              h-[2px]
              bg-orange-500
              mt-4 absolute
              w-[220px]
              md:w-[200px]
              lg:w-[563px]
              2xl:w-[722px]
            "></div>

            {/* IMAGE */}
            <Image
              src="/Thinking face-cuate.png"   // rename your image to this or use your file name
              alt="Moving Forward"
              width={300}
              height={300}
              className="mt-12 object-contain"
              priority
            />

          </div>


          {/* RIGHT SIDE BOX */}
          <div className="flex-1 flex justify-center">

            <div className="
              border-2 border-orange-500
              rounded-3xl
              p-8 md:p-12 lg:p-28
              text-gray-600
              text-base md:text-lg
              leading-relaxed
              bg-transparent
              max-w-lg
            ">

              <p>
                As technology evolves, we continue to innovate, adapt, and
                improve. Our goal is simple — help businesses grow stronger,
                smarter, and faster through powerful digital solutions.
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
