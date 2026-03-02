"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";
export default function WebApplicationPage() {
  return (

    <section id="web-application">
    <div>
      
<div className="hidden lg:block">
  <div className={poppins.className}>
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-20  flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-semibold leading-tight">
            <span className="text-orange-500">Web</span>{" "}
            <span className="text-gray-600">Application</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
            We design and develop fast, scalable, and modern websites built
            for performance, responsiveness, and real business use.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/Web Development.png"
            alt="Web Application"
            width={1000}
            height={1000}
            className="object-contain h-[420px] w-[420px]"
            priority
          />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-20 pb-24">
        <div className="grid lg:grid-cols-3 gap-16 text-left">

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Responsive & Fast Websites
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We build mobile-friendly, SEO-optimized websites that load fast
              and work smoothly across all devices and browsers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Secure Backend & Database
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We develop strong backend systems with secure authentication,
              database integration, and stable architecture.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Performance Optimization
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We improve speed, structure, and technical performance to ensure
              reliability, better ranking, and smooth user experience.
            </p>
          </div>

        </div>
      </section>

    </div>
  </div>
</div>











{/* MOBILE - Web Application */}
<div className="block lg:hidden">
  <div className={poppins.className}>
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="px-6    flex flex-col items-center text-center">

        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold leading-snug">
            <span className="text-orange-500">Web</span>{" "}
            <span className="text-gray-700">Application</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            We design and develop fast, scalable, and modern websites
            built for performance, responsiveness, and real business use.
          </p>
        </div>

        <div className="">
          <Image
            src="/Web Development.png"
            alt="Web Application"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 pb-14 flex flex-col gap-10 text-center">

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Responsive & Fast Websites
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We build mobile-friendly, SEO-optimized websites that load fast
            and work smoothly across all devices and browsers.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Secure Backend & Database
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We develop strong backend systems with secure authentication,
            database integration, and stable architecture.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Performance Optimization
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We improve speed, structure, and technical performance
            to ensure reliability and smooth user experience.
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





















