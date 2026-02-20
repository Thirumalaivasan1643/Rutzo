"use client";

import React from "react";
import { poppins } from "../../font/poppins";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../coming soon.json";

function Page() {
  return (
    <div>
      <div className="hidden sm:hidden md:hidden xl:block lg:block 2xl:hidden">
        <section
          className={`${poppins.className} w-full h-screen flex items-center justify-center`}
        >
          {/* Main Column Layout */}
          <div className="flex flex-col items-center text-center px-6 gap-10">
            {/* Lottie Animation */}
            <div>
              <Lottie
                animationData={comingSoonAnimation}
                loop={true}
                className="w-[600px] h-[300px]"
              />
            </div>

            {/* Text Content Wrapper */}
            <div className="flex flex-col gap-4">
              <p className="text-md text-gray-700">
                Something special is cooking. We’ll be ready soon.
              </p>

              <p className="text-md    text-gray-500">
                We&apos;re building a powerful experience for you.
              </p>
            </div>
          </div>
        </section>
      </div>



      {/* mobile */}

      <div className="block sm:block md:block xl:hidden lg:hidden 2xl:hidden">
        <section
          className={`${poppins.className} w-full min-h-[500px] flex  py-10  justify-center`}
        >
          {/* Main Column Layout */}
          <div className="flex flex-col items-center text-center px-6 ">
            {/* Lottie Animation */}
            <div>
              <Lottie
                animationData={comingSoonAnimation}
                loop={true}
                className="w-[300px] h-[300px]"
              />
            </div>

            {/* Text Content Wrapper */}
            <div className="flex flex-col gap-4">
              <p className="text-md text-gray-700">
                Something special is cooking. We’ll be ready soon.
              </p>

              <p className="text-md    text-gray-500">
                We&apos;re building a powerful experience for you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
