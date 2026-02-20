"use client";

import Image from "next/image";
import { poppins } from "../font/poppins";

export default function SocialMediaManagementPage() {
  return (
    <div>
      {/* DESKTOP / LARGE SCREENS - Social Media Management */}
<div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
  <div className={poppins.className}>
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
      }}
    >
      {/* HERO SECTION - Text left | Image right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-12 lg:py-16 xl:py-20 flex-1 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
        {/* LEFT - CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl lg:text-3xl xl:text-3xl font-bold leading-tight">
            <span className="text-orange-500">Social Media</span>
            <br className="hidden lg:block" />
            <span className="text-gray-600">Management</span>
          </h1>

          <p className="mt-6 text-gray-600 text-md lg:text-md leading-relaxed max-w-md xl:max-w-xl">
            We manage and grow your social presence through strategic content planning, consistent posting, and audience engagement.
          </p>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/Social Media Management.png"
            alt="Social Media Management"
            width={300}
            height={300}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </section>

      {/* FEATURES SECTION - 3 equal columns */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {/* Feature 1 */}
          <div className="flex-1">
            <h3 className="text-md lg:text-md font-semibold text-gray-800 mb-4">
              Strategic Content Planning
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We plan consistent, goal-driven content aligned with your brand and target audience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1">
            <h3 className="text-md lg:text-md font-semibold text-gray-800 mb-4">
              Audience Engagement
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We increase reach and interaction through smart targeting and active social media management.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1">
            <h3 className="text-md lg:text-md font-semibold text-gray-800 mb-4">
              Brand Presence Building
            </h3>
            <p className="text-gray-600 text-base lg:text-sm leading-relaxed">
              We create a strong, professional identity across all major social media platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>








{/* mobile - Social Media Management */}
<div className="md:block sm:block block lg:hidden xl:hidden 2xl:hidden">
  <div className={poppins.className}>
    <div
      className="w-full h-[850px] py-10 flex flex-col bg-gradient-to-b from-[#FFF1E5] to-white"
    >
      <section className="px-5 pt-10 pb-4 flex flex-col items-center text-center gap-4">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold leading-tight">
            <span className="text-orange-500">Social Media</span>
            <br />
            <span className="text-gray-600">Management</span>
          </h1>
          <p className="mt-6 text-gray-600 text-[15px] leading-relaxed">
            We manage and grow your social presence through strategic content planning, consistent posting, and audience engagement.
          </p>
        </div>

        <Image
          src="/Social Media Management.png"
          alt="Social Media Management"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </section>

      <section className="px-5 pb-8 flex flex-col gap-5 text-center">
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Strategic Content Planning</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We plan consistent, goal-driven content aligned with your brand and target audience.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Audience Engagement</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We increase reach and interaction through smart targeting and active social media management.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">Brand Presence Building</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We create a strong, professional identity across all major social media platforms.
          </p>
        </div>
      </section>
    </div>
  </div>
</div>







    </div>
  );
}



















//      {/* DESKTOP / LARGE SCREENS - Social Media Management */}
// <div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
//   <div className={poppins.className}>
//     <div
//       className="min-h-screen w-full flex flex-col"
//       style={{
//         background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
//       }}
//     >
//       {/* HERO SECTION - Text left | Image right */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-12 lg:py-16 xl:py-20 flex-1 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
//         {/* LEFT - CONTENT */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
//             <span className="text-orange-500">Social Media</span>
//             <br className="hidden lg:block" />
//             <span className="text-gray-600">Management</span>
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg lg:text-xl leading-relaxed max-w-md xl:max-w-xl">
//             We manage and grow your social presence through strategic content planning, consistent posting, and audience engagement.
//           </p>
//         </div>

//         {/* RIGHT - IMAGE */}
//         <div className="flex justify-center lg:justify-start">
//           <Image
//             src="/Social Media Management.png"
//             alt="Social Media Management"
//             width={420}
//             height={420}
//             className="object-contain drop-shadow-lg"
//             priority
//           />
//         </div>
//       </section>

//       {/* FEATURES SECTION - 3 equal columns */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 xl:pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
//           {/* Feature 1 */}
//           <div className="flex-1">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Strategic Content Planning
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We plan consistent, goal-driven content aligned with your brand and target audience.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="flex-1">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Audience Engagement
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We increase reach and interaction through smart targeting and active social media management.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="flex-1">
//             <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
//               Brand Presence Building
//             </h3>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               We create a strong, professional identity across all major social media platforms.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>
// </div>