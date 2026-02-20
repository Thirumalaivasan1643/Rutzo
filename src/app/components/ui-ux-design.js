"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function UIUXDesignPage() {
  return (
    <div>
      {/* DESKTOP / LARGE SCREENS - UI & UX Design */}
<div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
  <div className={poppins.className}>
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
      }}
    >
      {/* HERO SECTION - Image left | Text right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-12 lg:py-16 xl:py-20 flex-1 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
        {/* LEFT - IMAGE */}
        <div className="flex justify-center  ">
          <Image
            src="/Ux Design.png"
            alt="UI UX Design"
            width={250}
            height={250}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl lg:text-3xl xl:text-3xl font-bold leading-tight">
            <span className="text-orange-500">UI&UX</span>{" "}
            <span className="text-gray-600">Design</span>
          </h1>

          <p className="mt-6 text-gray-600 text-xl lg:text-sm leading-relaxed max-w-md xl:max-w-xl">
            We design clean, modern, and user-focused interfaces that enhance usability, improve user experience, and strengthen product interaction.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION - 3 columns */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {/* Feature 1 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-xl font-semibold text-gray-800 mb-4">
              User-Centered Interface
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We design clean, modern interfaces focused on usability, clarity, and seamless user interaction.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-xl font-semibold text-gray-800 mb-4">
              Better Navigation & Flow
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We improve structure and interaction to make products easy, intuitive, and efficient to use.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-xl font-semibold text-gray-800 mb-4">
              Conversion-Focused Design
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We design with purpose, improving engagement, retention, and overall product effectiveness.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>










{/* mobile - UI & UX Design */}
<div className="md:block sm:block block lg:hidden xl:hidden 2xl:hidden">
  <div className={poppins.className}>
    <div
      className="w-full h-[800px] py-10 flex flex-col bg-gradient-to-b from-white to-[#FFF1E5]"
    >
      <section className="px-5 mt-16  flex flex-col items-center text-center gap-4">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold leading-tight">
            <span className="text-orange-500">UI&UX</span>
            <span className="text-gray-600"> Design</span>
          </h1>
          <p className="mt-6 text-gray-600 text-[15px] leading-relaxed">
            We design clean, modern, and user-focused interfaces that enhance usability, improve user experience, and strengthen product interaction.
          </p>
        </div>

        <Image
          src="/Ux Design.png"
          alt="UI UX Design"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </section>

      <section className="px-5 pb-8 flex flex-col gap-8 text-center">
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">User-Centered Interface</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We design clean, modern interfaces focused on usability, clarity, and seamless user interaction.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Better Navigation & Flow</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We improve structure and interaction to make products easy, intuitive, and efficient to use.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Conversion-Focused Design</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We design with purpose, improving engagement, retention, and overall product effectiveness.
          </p>
        </div>
      </section>
    </div>
  </div>
</div>








    </div>
  );
}



// <div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
//   <div className={poppins.className}>
//     <div
//       className="min-h-screen w-full flex flex-col"
//       style={{
//         background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
//       }}
//     >
//       {/* HERO SECTION - Image left | Text right */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-12 lg:py-16 xl:py-20 flex-1 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
//         {/* LEFT - IMAGE */}
//         <div className="flex justify-center lg:justify-end">
//           <Image
//             src="/Ux Design.png"
//             alt="UI UX Design"
//             width={420}
//             height={420}
//             className="object-contain drop-shadow-lg"
//             priority
//           />
//         </div>

//         {/* RIGHT - CONTENT */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
//             <span className="text-orange-500">UI&UX</span>{" "}
//             <span className="text-gray-600">Design</span>
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg lg:text-xl leading-relaxed max-w-md xl:max-w-xl">
//             We design clean, modern, and user-focused interfaces that enhance usability, improve user experience, and strengthen product interaction.
//           </p>
//         </div>
//       </section>

//       {/* FEATURES SECTION - 3 columns */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
//           {/* Feature 1 */}
//           <div className="flex-1">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               User-Centered Interface
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We design clean, modern interfaces focused on usability, clarity, and seamless user interaction.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="flex-1">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Better Navigation & Flow
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We improve structure and interaction to make products easy, intuitive, and efficient to use.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="flex-1">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Conversion-Focused Design
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We design with purpose, improving engagement, retention, and overall product effectiveness.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>
// </div>