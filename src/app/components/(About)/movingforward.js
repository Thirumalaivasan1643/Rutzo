import React from "react";
import Image from "next/image";
import { poppins } from "../../font/poppins"

function Movingforward() {
  return (
    <div>
      {/* LAPTOP & DESKTOP - Moving Forward */}
<div className="hidden lg:block py-16">
  <div className={poppins.className}>
    <div className="max-w-7xl mx-auto px-16">

      <div className="flex items-center justify-between gap-20">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col items-center text-center">

          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-700 mb-8">
            Moving <span className="text-orange-500">Forward</span>
          </h2>

          <Image
            src="/Moving forward-amico 1.png"
            alt="Moving forward illustration"
            width={300}
            height={300}
            priority
            className="object-contain"
          />

        </div>

        {/* RIGHT SIDE CONTENT BOX */}
        <div className="flex-1 border-2 border-orange-400 rounded-3xl p-14 bg-white shadow-sm">

          <p className="text-gray-600 text-lg xl:text-xl leading-relaxed text-left max-w-lg">
            As technology evolves, we continue to innovate, adapt, and
            improve. Our goal is simple — help businesses grow stronger,
            smarter, and faster through powerful digital solutions.
          </p>

        </div>

      </div>

    </div>
  </div>
</div>








      {/* mobile */}

      <div className="md:block sm:block block xl:hidden pb-10 2xl:hidden lg:hidden  ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center gap-10">
            {/* Image */}
            <div className="w-full flex flex-col items-center justify-center">
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
                Moving <span className="text-orange-500">Forward</span>
              </h2>

              {/* Image */}
              <Image
                src="/Moving forward-amico 1.png"
                alt="Moving forward illustration"
                width={300}
                height={300}
                priority
                className="w-full max-w-xs sm:max-w-sm object-contain"
              />
            </div>

            {/* Text Box */}
            <div className="w-full border-2 border-orange-500 rounded-2xl p-6 sm:p-8 bg-transparent">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                As technology evolves, we continue to innovate, adapt, and
                improve. Our goal is simple — help businesses grow stronger,
                smarter, and faster through powerful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movingforward;
