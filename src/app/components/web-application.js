"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function WebApplicationPage() {
  return (
    <div>
      <div className="md:hidden sm:hidde hidden xl:block lg:block 2xl:block">

     
    <div className={`${poppins.className}`}>
      <div
        className="min-h-screen w-full "
        style={{
          background: "linear-gradient(to bottom, #FFFFFF, #FFFFFF)",
        }}
      >
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-20  flex flex-col md:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl font-semibold leading-tight">
              <span className="text-orange-500">Web</span>{" "}
              <span className="text-gray-600">Application</span>
            </h1>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed max-w-md">
              We design and develop fast, scalable, and modern websites built
              for performance, responsiveness, and real business use.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
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
        <section className="max-w-7xl mx-auto px-10 py-10  flex flex-col md:flex-row gap-12 text-center">
          {/* CARD 1 */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-700">
              Responsive & Fast Websites
            </h3>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              We build mobile-friendly, SEO-optimized websites that load fast
              and work smoothly across all devices and browsers.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-700">
              Secure Backend & Database
            </h3>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              We develop strong backend systems with secure authentication,
              database integration, and stable architecture.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-700">
              Performance Optimization
            </h3>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              We improve speed, structure, and technical performance to ensure
              reliability, better ranking, and smooth user experience.
            </p>
          </div>
        </section>
      </div>
       </div>
    </div>













{/* mobile - Web Application - updated tight version */}
<div className="md:block sm:block block lg:hidden xl:hidden 2xl:hidden">
  <div className={poppins.className}>
    <div
      className="w-full h-[750px] py-10 flex flex-col bg-gradient-to-b from-white to-white"
    >
      {/* HERO + IMAGE */}
      <section className="px-5 pt-6 pb-4 flex flex-col items-center text-center gap-4">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold leading-tight">
            <span className="text-orange-500">Web</span>{" "}
            <span className="text-gray-600">Application</span>
          </h1>
          <p className="mt-3 text-gray-600 text-[15px] leading-relaxed px-2">
            We design and develop fast, scalable, and modern websites built for performance, responsiveness, and real business use.
          </p>
        </div>

        <Image
          src="/Web Development.png"
          alt="Web Application"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </section>

      {/* FEATURES */}
      <section className="px-5 pb-8 flex flex-col gap-8 text-center">
        {/* CARD 1 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Responsive & Fast Websites</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We build mobile-friendly, SEO-optimized websites that load fast and work smoothly across all devices and browsers.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Secure Backend & Database</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We develop strong backend systems with secure authentication, database integration, and stable architecture.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Performance Optimization</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We improve speed, structure, and technical performance to ensure reliability, better ranking, and smooth user experience.
          </p>
        </div>
      </section>
    </div>
  </div>
</div>








    
    </div>
  );
}
























//  <div className="md:hidden sm:hidde hidden xl:block lg:block 2xl:block">

     
//     <div className={`${poppins.className}`}>
//       <div
//         className="min-h-screen w-full "
//         style={{
//           background: "linear-gradient(to bottom, #FFFFFF, #FFFFFF)",
//         }}
//       >
//         {/* HERO SECTION */}
//         <section className="max-w-7xl mx-auto px-20  flex flex-col md:flex-row items-center gap-12">
//           {/* LEFT CONTENT */}
//           <div className="flex-1 text-center md:text-left">
//             <h1 className="text-xl md:text-5xl font-semibold leading-tight">
//               <span className="text-orange-500">Web</span>{" "}
//               <span className="text-gray-600">Application</span>
//             </h1>

//             <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-md">
//               We design and develop fast, scalable, and modern websites built
//               for performance, responsiveness, and real business use.
//             </p>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex-1 flex justify-center">
//             <Image
//               src="/Web Development.png"
//               alt="Web Application"
//               width={300}
//               height={300}
//               className="object-contain"
//               priority
//             />
//           </div>
//         </section>

//         {/* FEATURES SECTION */}
//         <section className="max-w-7xl mx-auto px-10 py-10  flex flex-col md:flex-row gap-12 text-center">
//           {/* CARD 1 */}
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold text-gray-700">
//               Responsive & Fast Websites
//             </h3>

//             <p className="mt-4 text-gray-500 leading-relaxed">
//               We build mobile-friendly, SEO-optimized websites that load fast
//               and work smoothly across all devices and browsers.
//             </p>
//           </div>

//           {/* CARD 2 */}
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold text-gray-700">
//               Secure Backend & Database
//             </h3>

//             <p className="mt-4 text-gray-500 leading-relaxed">
//               We develop strong backend systems with secure authentication,
//               database integration, and stable architecture.
//             </p>
//           </div>

//           {/* CARD 3 */}
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold text-gray-700">
//               Performance Optimization
//             </h3>

//             <p className="mt-4 text-gray-500 leading-relaxed">
//               We improve speed, structure, and technical performance to ensure
//               reliability, better ranking, and smooth user experience.
//             </p>
//           </div>
//         </section>
//       </div>
//        </div>
//     </div>
