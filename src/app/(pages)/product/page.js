"use client";

import React from "react";
import { poppins } from "../../font/poppins";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../coming soon.json";

function Page() {
  return (
    <div>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block xl:block 2xl:block">
        <section
          className={`${poppins.className} w-full h-screen flex items-center justify-center`}
        >
          <div className="flex flex-col items-center text-center px-6 gap-10">
            {/* Lottie Animation */}
            <Lottie
              animationData={comingSoonAnimation}
              loop
              className="w-[600px] h-[350px]"
            />

            {/* Text */}
            <div className="flex flex-col gap-4">
              <p className="text-lg text-gray-700">
                Something special is cooking. We’ll be ready soon.
              </p>

              <p className="text-base text-gray-500">
                We&apos;re building a powerful experience for you.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden xl:hidden 2xl:hidden">
        <section
          className={`${poppins.className} w-full min-h-[500px] flex items-center justify-center py-10`}
        >
          <div className="flex flex-col items-center text-center px-6 gap-6">
            {/* Lottie Animation */}
            <Lottie
              animationData={comingSoonAnimation}
              loop
              className="w-[280px] h-[260px]"
            />

            {/* Text */}
            <div className="flex flex-col gap-3">
              <p className="text-base text-gray-700">
                Something special is cooking. We’ll be ready soon.
              </p>

              <p className="text-sm text-gray-500">
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
