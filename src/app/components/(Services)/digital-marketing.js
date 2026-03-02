"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function DigitalMarketingPage() {
  return (
    <div>
           <section id="digital-marketing">



<div className="hidden lg:block">
  <div className={poppins.className}>
    <div
      className="w-full "
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
      }}
    >
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-20 flex flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-semibold">
            <span className="text-orange-500">Digital</span>{" "}
            <span className="text-gray-600">Marketing</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
            We implement result-driven digital strategies to increase
            online visibility, attract quality leads, and grow your
            business effectively.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/Digital Marketing.png"
            alt="Digital Marketing"
            width={380}
            height={380}
            className="object-contain"
            priority
          />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-20 mt-10">
        <div className="grid lg:grid-cols-3 gap-16 text-left">

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Search Visibility (SEO)
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We improve your Google ranking and online visibility to
              attract organic traffic and increase customer reach.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Lead Generation Campaigns
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We run targeted ads, funnels, and strategies designed to
              generate real leads and meaningful engagement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Performance Tracking
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We analyze campaign data and optimize performance to improve
              ROI, conversions, and overall business growth.
            </p>
          </div>

        </div>
      </section>

    </div>
  </div>
</div>












{/* MOBILE - Digital Marketing */}
<div className="block lg:hidden">
  <div className={poppins.className}>
    <div className="w-full bg-gradient-to-b from-[#FFF1E5] to-white">

      {/* HERO SECTION */}
      <section className="px-6 pt-14 pb-8 flex flex-col items-center text-center">

        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold leading-snug">
            <span className="text-orange-500">Digital</span>{" "}
            <span className="text-gray-700">Marketing</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            We implement result-driven digital strategies to increase
            online visibility, attract quality leads, and grow your
            business effectively.
          </p>
        </div>

        <div className="mt-8">
          <Image
            src="/Digital Marketing.png"
            alt="Digital Marketing"
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
            Search Visibility (SEO)
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We improve your Google ranking and online visibility
            to attract organic traffic and increase customer reach.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Lead Generation Campaigns
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We run targeted ads, funnels, and strategies designed
            to generate real leads and meaningful engagement.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Performance Tracking
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We analyze campaign data and optimize performance
            to improve ROI, conversions, and overall growth.
          </p>
        </div>

      </section>

    </div>
  </div>
</div>




      </section>











    </div>
  );
}


