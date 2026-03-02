import React from "react";
import Image from "next/image";
import { Mail, Phone, Clock } from "lucide-react";
import { poppins } from "../font/poppins";

function ReachUs() {
  return (
    <div>
      
      {/* Desktop & Laptop Only */}
      <div className="hidden lg:block xl:block 2xl:block">
        <div className={`${poppins.className} bg-[#f5f5f5] py-20`}>
          {/* Container */}
          <div className="max-w-6xl mx-auto text-center px-6">
            {/* Top Illustration */}
            <div className="flex justify-center mb-10">
              <Image
                src="/rechus.png" // use your image path
                alt="Let's Talk"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>

            {/* Title */}
            <h2 className="text-4xl font-semibold text-gray-700">
              Let’s <span className="text-orange-500">talk</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Have a project, business idea, or technical requirement? Let’s
              talk. Reach out to us and we’ll help you turn your idea into a
              real, working solution.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-10 px-20 mt-14">
              {/* Card 1 */}
              <div className=" rounded-xl p-8 bg-white hover:border-orange-500 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  Get in Touch
                </h3>

                <div className="flex justify-center mb-6">
                  <Mail size={40} className="text-gray-600" />
                </div>

                <p className="text-gray-500">rutzotech@gmail.com</p>
              </div>

              {/* Card 2 */}
              <div className=" rounded-xl p-8 bg-white hover:border-orange-500 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  Phone
                </h3>

                <div className="flex justify-center mb-6">
                  <Phone size={40} className="text-gray-600" />
                </div>

                <p className="text-gray-500">99946 285765</p>
              </div>

              {/* Card 3 */}
              <div className=" rounded-xl p-8 bg-white hover:border-orange-500 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  Business Hours
                </h3>

                <div className="flex justify-center mb-6">
                  <Clock size={40} className="text-gray-600" />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Mon – Sat : 9:30 AM – 7:00 PM
                  <br />
                  Sunday : Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

















      {/* mobile */}
<div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
  <div className={`${poppins.className} bg-[#f5f5f5] py-16`}>
    
    {/* Container */}
    <div className="max-w-md mx-auto text-center px-5">
      
      {/* Top Illustration */}
      <div className="flex justify-center mb-8">
        <Image
          src="/rechus.png"
          alt="Let's Talk"
          width={280}
          height={280}
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-700">
        Let’s <span className="text-orange-500">talk</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-500 text-sm leading-relaxed">
        Have a project, business idea, or technical requirement? Let’s
        talk. Reach out to us and we’ll help you turn your idea into a
        real, working solution.
      </p>

      {/* Cards - Mobile Single Column */}
      <div className="flex flex-col gap-6 mt-10">
        
        {/* Card 1 */}
        <div className=" rounded-xl p-6 bg-white hover:border-orange-500 transition duration-300">
          <h3 className="text-base font-semibold text-gray-700 mb-4">
            Get in Touch
          </h3>

          <div className="flex justify-center mb-4">
            <Mail size={32} className="text-gray-600" />
          </div>

          <p className="text-gray-500 text-sm">
            rutzotech@gmail.com
          </p>
        </div>

        {/* Card 2 */}
        <div className=" rounded-xl p-6 bg-white hover:border-orange-500 transition duration-300">
          <h3 className="text-base font-semibold text-gray-700 mb-4">
            Phone
          </h3>

          <div className="flex justify-center mb-4">
            <Phone size={32} className="text-gray-600" />
          </div>

          <p className="text-gray-500 text-sm">
            99946 285765
          </p>
        </div>

        {/* Card 3 */}
        <div className=" rounded-xl p-6 bg-white hover:border-orange-500 transition duration-300">
          <h3 className="text-base font-semibold text-gray-700 mb-4">
            Business Hours
          </h3>

          <div className="flex justify-center mb-4">
            <Clock size={32} className="text-gray-600" />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            Mon – Sat : 9:30 AM – 7:00 PM
            <br />
            Sunday : Closed
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

















    </div>
  );
}

export default ReachUs;
