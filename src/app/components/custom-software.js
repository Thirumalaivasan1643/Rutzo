"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function CustomSoftwarePage() {
  return (
    <div>
     {/* DESKTOP / LARGE SCREENS - Custom Software */}
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
        <div className="flex justify-center ">
          <Image
            src="/custom software.png"
            alt="Custom Software"
            width={300}
            height={300}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl lg:text-3xl xl:text-3xl font-bold text-gray-800 leading-tight">
            <span className="text-orange-500">Custom</span>{" "}
            <span className="text-gray-600">Software</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg xl:max-w-xl">
            We build tailored software systems and business applications designed to automate workflows, improve efficiency, and solve real operational challenges.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION - 3 columns */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {/* Feature 1 */}
          <div className="">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Business Focused Systems
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We create software tailored to your exact workflow, operations, and real business requirements.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Workflow Automation
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We reduce manual work by automating repetitive tasks, saving time, cost, and human effort.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="">
            <h3 className="text-xl lg:text-md font-semibold text-gray-800 mb-4">
              Scalable & Secure Solutions
            </h3>
            <p className="text-gray-600 text-base lg:text-md leading-relaxed">
              We build stable, secure software designed to grow with your business without breaking.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
























{/* mobile */}

{/* mobile - Custom Software - updated tight version */}
<div className="md:block sm:block block lg:hidden xl:hidden 2xl:hidden">
  <div className={poppins.className}>
    <div
      className="w-full h-[750px] py-10 flex flex-col bg-gradient-to-b from-[#FFF1E5] to-white"
    >
      {/* HERO + IMAGE */}
      <section className="px-5 pt-6 pb-4 flex flex-col items-center text-center gap-4">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold leading-tight flex flex-wrap justify-center">
            <span className="text-orange-500">Custom</span>
            <span className="text-gray-600">&nbsp;Software</span>
          </h1>
          <p className="mt-3 text-gray-600 text-[15px] leading-relaxed px-2">
            We build tailored software systems and business applications designed to automate workflows, improve efficiency, and solve real operational challenges.
          </p>
        </div>

        <Image
          src="/custom software.png"
          alt="Custom Software"
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
          <h3 className="text-lg font-semibold text-gray-800">Business Focused Systems</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We create software tailored to your exact workflow, operations, and real business requirements.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Workflow Automation</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We reduce manual work by automating repetitive tasks, saving time, cost, and human effort.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Scalable & Secure Solutions</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We build stable, secure software designed to grow with your business without breaking.
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
//         background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
//       }}
//     >
//       {/* HERO SECTION - Image left | Text right */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-12 lg:py-16 xl:py-20 flex-1 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
//         {/* LEFT - IMAGE */}
//         <div className="flex justify-center lg:justify-end">
//           <Image
//             src="/custom software.png"
//             alt="Custom Software"
//             width={380}
//             height={380}
//             className="object-contain drop-shadow-lg"
//             priority
//           />
//         </div>

//         {/* RIGHT - CONTENT */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
//             <span className="text-orange-500">Custom</span>{" "}
//             <span className="text-gray-600">Software</span>
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg xl:max-w-xl">
//             We build tailored software systems and business applications designed to automate workflows, improve efficiency, and solve real operational challenges.
//           </p>
//         </div>
//       </section>

//       {/* FEATURES SECTION - 3 columns */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
//           {/* Feature 1 */}
//           <div className="bg-white/60 p-8 lg:p-9 xl:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Business Focused Systems
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We create software tailored to your exact workflow, operations, and real business requirements.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white/60 p-8 lg:p-9 xl:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Workflow Automation
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We reduce manual work by automating repetitive tasks, saving time, cost, and human effort.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white/60 p-8 lg:p-9 xl:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Scalable & Secure Solutions
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We build stable, secure software designed to grow with your business without breaking.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>
// </div>