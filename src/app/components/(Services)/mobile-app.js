"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function MobileAppPage() {
  return (
    <section id="mobile-app" >
    <div>
    

 



<div className="hidden lg:block">
  <div className={poppins.className}>
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Mobile App.png"
            alt="Mobile App"
            width={380}
            height={380}
            className="object-contain"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-semibold leading-tight">
            <span className="text-orange-500">Mobile</span>{" "}
            <span className="text-gray-600">App</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            We create high-performance Android and iOS applications
            focused on usability, speed, and seamless user experience.
          </p>
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-20 pb-24">
        <div className="grid lg:grid-cols-3 gap-16 text-left">

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Android & iOS Apps
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We develop high-performance mobile apps with smooth UI and
              stable functionality across all devices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Real-Time Integration
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We integrate APIs, databases, payments, and live features
              with strong security and performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Optimized User Experience
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We focus on speed, usability, and long-term app stability
              for real-world usage.
            </p>
          </div>

        </div>
      </section>

    </div>
  </div>
</div>








{/* mobile */}{/* MOBILE - Mobile App */}
<div className="block lg:hidden">
  <div className={poppins.className}>
    <div className="w-full bg-gradient-to-b from-white to-[#FFF1E5]">

      {/* HERO SECTION */}
      <section className="px-6   pb-8 flex flex-col items-center text-center">

        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold leading-snug">
            <span className="text-orange-500">Mobile</span>{" "}
            <span className="text-gray-700">App</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            We create high-performance Android and iOS applications
            focused on usability, speed, and seamless user experience.
          </p>
        </div>

        <div className="mt-8">
          <Image
            src="/Mobile App.png"
            alt="Mobile App"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="px-6  flex flex-col gap-10 text-center">

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Android & iOS Apps
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We develop high-performance mobile apps with smooth UI
            and stable functionality across all devices.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Real-Time Integration
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We integrate APIs, databases, payments, and live features
            with strong security and performance.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Optimized User Experience
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We focus on speed, usability, and long-term app stability
            for real-world usage.
          </p>
        </div>

      </section>

    </div>
  </div>
</div>















    </div>
    </section>
  );
}











