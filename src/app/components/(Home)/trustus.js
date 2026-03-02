import Image from "next/image";
import React from "react";
import { poppins } from "../../font/poppins";

function TrustUs() {
  return (
    <div>
      {/* LAPTOP & DESKTOP - Brands That Trust Us */}
<div className="hidden lg:block">
  <section className={`${poppins.className} w-full bg-white py-20  px-20`}>

    <div className="max-w-7xl mx-auto px-10  ">

      <div className="flex items-center justify-between gap-16  ">

        {/* LEFT SIDE */}
        <div className="flex-1 max-w-xl  ">

          {/* Heading */}
          <h2 className="text-4xl   font-semibold text-gray-700 leading-tight">
            Brands That{" "}
            <span className="text-[#DF6100]">Trust Us</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-6 text-lg   leading-relaxed">
            From startups to growing companies, brands trust Rutzo Tech to
            build powerful systems, strengthen digital presence, and drive
            measurable business impact.
          </p>

          {/* Logo Slider */}
          <div className="mt-14   overflow-hidden">

            <div className="flex gap-10   animate-loop-right">

              {[1,2,3,4,5,6].map((item, index) => (
                <div
                  key={index}
                  className="w-20 h-20  
                             border border-gray-300 rounded-full 
                             flex items-center justify-center 
                             p-3 flex-shrink-0 bg-white"
                >
                  <Image
                    src="/mnc.jpeg"
                    alt="Brand Logo"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/Trust.png"
            alt="Trust Illustration"
            width={420}
            height={420}
            className="object-contain 
                       w-[320px] xl:w-[380px] 2xl:w-[450px]"
            priority
          />
        </div>

      </div>

    </div>

  </section>
</div>











      {/* 
mobile */}

      <div className="block lg:hidden xl:hidden 2xl:hidden md:block sm:block">
        <div className={`${poppins.className}`}>
          <section className="w-full bg-white ">
            {/* Container */}
            <div className="max-w-6xl mx-auto px-6  flex flex-col   items-center justify-between gap-10  m">
              {/* Left Content */}
              <div className="flex-1 w-full">
                {/* Heading */}
                <h2 className="text-2xl   font-semibold text-gray-700 text-center  ">
                  Brands That{" "}
                  <span className="text-[#DF6100] font-semibold">Trust Us</span>
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-3 max-w-md text-md leading-relaxed text-center   mx-auto  ">
                  From startups to growing companies, brands trust rutzo tech to
                  build powerful systems, strengthen digital presence, and drive
                  measurable business impact.
                </p>

                {/* Logos */}
                <div className="w-full mt-10   flex items-center justify-center overflow-hidden">
                  <div className="flex gap-4  animate-loop-right">
                    {/* Logo 1 */}
                    <div className="w-20 h-20  border  rounded-full   flex items-center justify-center   p-3 flex-shrink-0">
                      <Image
                        height={1000}
                        width={1000}
                        src="/"
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    </div>

                    {/* Logo 2 */}
                    <div className="w-20 h-20  border  rounded-full   flex items-center justify-center   p-3 flex-shrink-0">
                      <Image
                        height={1000}
                        width={1000}
                        src="/"
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    </div>

                    {/* Logo 3 */}
                    <div className="w-20 h-20  border  rounded-full   flex items-center justify-center   p-3 flex-shrink-0">
                      <Image
                        height={1000}
                        width={1000}
                        src="/"
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    </div>

                    {/* Duplicate set */}
                    <div className="w-20 h-20  border  rounded-full   flex items-center justify-center   p-3 flex-shrink-0">
                      <Image
                        height={1000}
                        width={1000}
                        src="/"
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    </div>

                    <div className="w-20 h-20  border   rounded-full   flex items-center justify-center   p-3 flex-shrink-0">
                      <Image
                        height={1000}
                        width={1000}
                        src="/"
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    </div>

                    <div className="w-20 h-20  border  rounded-full   flex items-center justify-center   p-3 flex-shrink-0">
                      <Image
                        height={10000}
                        width={10000}
                        src="/mnc.png"
                        alt="Brand Logo"
                        className="h-24 rounded-full w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="flex-1 flex justify-center mt-8  ">
                <Image
                  height={400}
                  width={400}
                  src="/Trust.png"
                  alt="Trust Illustration"
                  className="w-64   max-w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>














    </div>
  );
}

export default TrustUs;
