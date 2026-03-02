import React from "react";
import Image from "next/image";
import { poppins } from "../../font/poppins";

function Whatwedo() {
  return (
    <div>
      {/* LAPTOP & DESKTOP - What We Do */}
<div className="hidden lg:block ">
  <div className={poppins.className}>
    <div className="max-w-7xl mx-auto px-16">

      <div className="flex items-center justify-between gap-20">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col items-center text-center">

          <h2 className="text-4xl   font-semibold text-gray-700 mb-8">
            What We <span className="text-orange-500">Do</span>
          </h2>

          <Image
            src="/whatwedo.png"
            alt="What we do illustration"
            width={420}
            height={420}
            priority
            className="object-contain"
          />
        </div>

        {/* RIGHT SIDE CONTENT BOX */}
        <div className="flex-1 bg-white border-2 border-orange-500 rounded-3xl p-12 shadow-md">
          <p className="text-gray-600 text-xl leading-relaxed text-left">
            We specialize in developing custom software, web applications,
            and mobile apps tailored to real business workflows. Alongside
            technology, we help brands grow through digital marketing,
            strategic social media management, and user-focused UI/UX
            design. Our approach ensures businesses not only go digital
            but succeed digitally.
          </p>
        </div>

      </div>

    </div>
  </div>
</div>









      

      {/* mobile  */}

      <div className="md:block sm:block block xl:hidden 2xl:hidden lg:hidden ">
        <div className="max-w-7xl mx-auto px-6 pb-8">
          {/* Mobile Content Layout */}
          <div className="flex flex-col items-center gap-10">
            {/* Image */}
            <div className="w-full flex flex-col items-center justify-center">

  {/* Title inside container */}
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
    What We <span className="text-orange-500">Do</span>
  </h2>

  {/* Image */}
  <Image
    src="/whatwedo.png"
    alt="What we do illustration"
    width={320}
    height={320}
    priority
    className="w-full max-w-xs sm:max-w-sm object-contain"
  />

</div>

            {/* Content Box */}
            <div className="w-full border-2 border-orange-500 rounded-2xl pt-6 px-6 pb-10 sm:pt-8 sm:px-8 sm:pb-10 bg-white shadow-sm">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                We specialize in developing custom software, web applications,
                and mobile apps tailored to real business workflows. Alongside
                technology, we help brands grow through digital marketing,
                strategic social media management, and user-focused UI/UX
                design.
                <br />
                <br />
                Our approach ensures businesses not only go digital but succeed
                digitally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
