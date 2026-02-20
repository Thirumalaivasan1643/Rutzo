"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function DigitalMarketingPage() {
  return (
    <div>
      {/* DESKTOP / LARGE SCREENS - Digital Marketing */}
<div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
  <div className={poppins.className}>
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
      }}
    >
      {/* HERO SECTION - Text left | Image right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16  flex-1 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
        {/* LEFT - CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl lg:text-3xl xl:text-3xl font-bold leading-tight">
            <span className="text-orange-500">Digital</span>{" "}
            <span className="text-gray-600">Marketing</span>
          </h1>

          <p className="mt-6 text-gray-600 text-md lg:text-md leading-relaxed max-w-md xl:max-w-xl">
            We implement result-driven digital strategies to increase online visibility, attract quality leads, and grow your business effectively.
          </p>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex justify-center  ">
          <Image
            src="/Digital Marketing.png"
            alt="Digital Marketing"
            width={300}
            height={300}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </section>

      {/* FEATURES SECTION - 3 columns */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {/* Feature 1 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Search Visibility (SEO)
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We improve your Google ranking and online visibility to attract organic traffic and increase customer reach.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Lead Generation Campaigns
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We run targeted ads, funnels, and strategies designed to generate real leads and meaningful engagement.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Performance Tracking
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We analyze campaign data and optimize performance to improve ROI, conversions, and overall business growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>























{/* mobile - Digital Marketing - updated tight version */}
<div className="md:block sm:block block lg:hidden xl:hidden 2xl:hidden">
  <div className={poppins.className}>
    <div
      className="w-full h-[750px] py-10  flex flex-col bg-gradient-to-b from-[#FFF1E5] to-white"
    >
      {/* HERO + IMAGE */}
      <section className="px-5 pt-6 pb-4 flex flex-col items-center text-center gap-8">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold leading-tight">
            <span className="text-orange-500">Digital</span>{" "}
            <span className="text-gray-600">Marketing</span>
          </h1>
          <p className="mt-6 text-gray-600 text-[15px] leading-relaxed px-2">
            We implement result-driven digital strategies to increase online visibility, attract quality leads, and grow your business effectively.
          </p>
        </div>

        <Image
          src="/Digital Marketing.png"
          alt="Digital Marketing"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </section>

      {/* FEATURES - tighter with dashed border style */}
      <section className="px-5 pb-8 flex flex-col gap-5 text-center">
        {/* Feature 1 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Search Visibility (SEO)</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We improve your Google ranking and online visibility to attract organic traffic and increase customer reach.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Lead Generation Campaigns</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We run targeted ads, funnels, and strategies designed to generate real leads and meaningful engagement.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Performance Tracking</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We analyze campaign data and optimize performance to improve ROI, conversions, and overall business growth.
          </p>
        </div>
      </section>
    </div>
  </div>
</div>
















    </div>
  );
}



// <div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:hidden">
//         <div className={poppins.className}>
//           <div
//             className="min-h-screen py-10 w-full "
//             style={{
//               background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
//             }}
//           >
//             {/* HERO SECTION */}
//             <section className="max-w-7xl mx-auto px-20 py-10  flex flex-col  items-center justify-between gap-12">
//               {/* LEFT CONTENT */}
//               <div className="flex-1 text-center md:text-left">
//                 <h1 className="text-2xl md:text-5xl font-semibold">
//                   <span className="text-orange-500">Digital</span>{" "}
//                   <span className="text-gray-600">Marketing</span>
//                 </h1>

//                 <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
//                   We implement result-driven digital strategies to increase
//                   online visibility, attract quality leads, and grow your
//                   business effectively.
//                 </p>
//               </div>

//               {/* RIGHT IMAGE */}
//               <div className="flex-1 flex justify-center">
//                 <Image
//           src="/Digital Marketing.png"
//                   alt="Digital Marketing"
//                   width={300}
//                   height={300}
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </section>

//             {/* FEATURES SECTION */}
//             <section className="max-w-7xl mx-auto px-16 mt-16 flex flex-col md:flex-row gap-10 text-center">
//               {/* FEATURE 1 */}
//               <div className="flex-1 px-4">
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Search Visibility (SEO)
//                 </h3>

//                 <p className="mt-4 text-gray-500 leading-relaxed">
//                   We improve your Google ranking and online visibility to
//                   attract organic traffic and increase customer reach.
//                 </p>
//               </div>

//               {/* FEATURE 2 */}
//               <div className="flex-1 px-4">
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Lead Generation Campaigns
//                 </h3>

//                 <p className="mt-4 text-gray-500 leading-relaxed">
//                   We run targeted ads, funnels, and strategies designed to
//                   generate real leads and meaningful engagement.
//                 </p>
//               </div>

//               {/* FEATURE 3 */}
//               <div className="flex-1 px-4">
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Performance Tracking
//                 </h3>

//                 <p className="mt-4 text-gray-500 leading-relaxed">
//                   We analyze campaign data and optimize performance to improve
//                   ROI, conversions, and overall business growth.
//                 </p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>