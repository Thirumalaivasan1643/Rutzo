"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function SocialMediaManagementPage() {
  return (
    <div>
    

      <section id="social-media-management">


{/* DESKTOP / LARGE SCREENS - Social Media Management */}
<div className="hidden lg:block">
  <div className={poppins.className}>
    <div
      className="w-full py-10"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #FFF1E5)",
      }}
    >

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-20 flex flex-row items-center gap-16">

        {/* LEFT - CONTENT */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
            <span className="text-orange-500">Social Media</span>
            <br />
            <span className="text-gray-600">Management</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            We manage and grow your social presence through strategic content planning,
            consistent posting, and audience engagement.
          </p>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/Social Media Management.png"
            alt="Social Media Management"
            width={420}
            height={420}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-20 pt-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-16 text-left">

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Strategic Content Planning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We plan consistent, goal-driven content aligned with your brand
              and target audience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Audience Engagement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We increase reach and interaction through smart targeting
              and active social media management.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Brand Presence Building
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We create a strong, professional identity across all
              major social media platforms.
            </p>
          </div>

        </div>
      </section>

    </div>
  </div>
</div>

















{/* MOBILE - Social Media Management */}
<div className="block lg:hidden">
  <div className={poppins.className}>
    <div className="w-full bg-gradient-to-b from-[#FFF1E5] to-white">

      {/* HERO SECTION */}
      <section className="px-6 pt-14 pb-10 flex flex-col items-center text-center">

        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold leading-snug">
            <span className="text-orange-500">Social Media</span>
            <br />
            <span className="text-gray-700">Management</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            We manage and grow your social presence through strategic
            content planning, consistent posting, and audience engagement.
          </p>
        </div>

        <div className="mt-8">
          <Image
            src="/Social Media Management.png"
            alt="Social Media Management"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 pb-16 flex flex-col gap-10 text-center">

        {/* Feature 1 */}
        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Strategic Content Planning
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We plan consistent, goal-driven content aligned with your
            brand and target audience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Audience Engagement
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We increase reach and interaction through smart targeting
            and active social media management.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Brand Presence Building
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We create a strong, professional identity across all
            major social media platforms.
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

















