"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function MobileAppPage() {
  return (
    <div>
      {/* DESKTOP / LARGE SCREENS - Mobile App */}
<div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
  <div className={poppins.className}>
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #FFFFFF)",
      }}
    >
      {/* HERO SECTION - Image left | Text right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 xl:px-16   flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 xl:gap-24">

  {/* LEFT - IMAGE */}
  <div className="flex justify-center  ">
    <Image
      src="/Mobile App.png"
      alt="Mobile App"
      width={300}
      height={300}
      className="object-contain drop-shadow-lg"
      priority
    />
  </div>

  {/* RIGHT - CONTENT */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-6 xl:pl-12">
    <h1 className="text-3xl lg:text-3xl xl:text-3xl font-bold leading-tight">
      <span className="text-orange-500">Mobile</span>{" "}
      <span className="text-gray-600">App</span>
    </h1>

    <p className="mt-6 text-gray-600 text-sm lg:text-sm leading-relaxed max-w-md xl:max-w-xl">
      We create high-performance Android and iOS applications focused on usability, speed, and seamless user experience.
    </p>
  </div>

</section>

      {/* FEATURES SECTION - 3 columns */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {/* Feature 1 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Android & iOS Apps
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We develop high-performance mobile apps with smooth UI and stable functionality across all devices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Real-Time Integration
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We integrate APIs, databases, payments, and live features with strong security and performance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Optimized User Experience
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We focus on speed, usability, and long-term app stability for real-world usage.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>






{/* 









{/* mobile */}

{/* mobile - Mobile App - updated tight version */}
<div className="md:block sm:block block lg:hidden xl:hidden 2xl:hidden">
  <div className={poppins.className}>
    <div
      className="w-full h-[800px] py-10 flex flex-col bg-gradient-to-b from-white to-[#FFF1E5]"
    >
      {/* HERO + IMAGE */}
      <section className="px-5 mt-16 pb-4 flex flex-col items-center text-center gap-4">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold leading-tight">
            <span className="text-orange-500">Mobile</span>{" "}
            <span className="text-gray-600">App</span>
          </h1>
          <p className="mt-3 text-gray-600 text-[15px] leading-relaxed px-2">
            We create high-performance Android and iOS applications focused on usability, speed, and seamless user experience.
          </p>
        </div>

        <Image
          src="/Mobile App.png"
          alt="Mobile App"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </section>

      {/* FEATURES */}
      <section className="px-5  flex flex-col gap-8 text-center">
        {/* CARD 1 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Android & iOS Apps</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We develop high-performance mobile apps with smooth UI and stable functionality across all devices.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Real-Time Integration</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We integrate APIs, databases, payments, and live features with strong security and performance.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Optimized User Experience</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We focus on speed, usability, and long-term app stability for real-world usage.
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
//         <div className={`${poppins.className}`}>
//           <div
//             className="min-h-screen w-full "
//             style={{
//               background: "linear-gradient(to bottom, #FFFFFF, #FFFFFF)",
//             }}
//           >
//             {/* HERO SECTION */}
//             <section className="max-w-7xl mx-auto px-6 pb-20  flex flex-col md:flex-row items-center ">
//               {/* LEFT IMAGE */}
//               <div className="flex-1 flex justify-center">
//                 <Image
//                   src="/Mobile App.png" // replace with mobile app image
//                   alt="Mobile App"
//                   width={300}
//                   height={300}
//                   className="object-contain"
//                   priority
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="flex-1 text-center ">
//                 <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
//                   <span className="text-orange-500">Mobile</span>{" "}
//                   <span className="text-gray-600">App</span>
//                 </h1>

//                 <p className="mt-6 text-lg leading-relaxed max-w-md">
//                   We create high-performance Android and iOS applications
//                   focused on usability, speed, and seamless user experience.
//                 </p>
//               </div>
//             </section>

//             {/* FEATURES SECTION */}
//             <section className="max-w-7xl mx-auto px-10   flex flex-col   gap-12 text-center">
//               {/* CARD 1 */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Android & iOS Apps
//                 </h3>

//                 <p className="mt-4 leading-relaxed">
//                   We develop high-performance mobile apps with smooth UI and
//                   stable functionality across all devices.
//                 </p>
//               </div>

//               {/* CARD 2 */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Real-Time Integration
//                 </h3>

//                 <p className="mt-4 leading-relaxed">
//                   We integrate APIs, databases, payments, and live features with
//                   strong security and performance.
//                 </p>
//               </div>

//               {/* CARD 3 */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Optimized User Experience
//                 </h3>

//                 <p className="mt-4 leading-relaxed">
//                   We focus on speed, usability, and long-term app stability for
//                   real-world usage.
//                 </p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//  */}
