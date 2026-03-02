"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function UIUXDesignPage() {
  return (
    <div>
     
      <section id="ui-ux-design">

<div className="hidden lg:block">
  <div className={poppins.className}>
    <div
      className="w-full py-16 "
      style={{
        background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
      }}
    >
      {/* HERO SECTION */}
      <section className="max-w-7xl px-20 mx-auto gap-44 flex flex-row items-center ">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/UX Design.png"
            alt="UX Design"
            width={420}
            height={420}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold leading-tight">
            <span className="text-orange-500">UI&UX</span>{" "}
            <span className="text-gray-600">Design</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            We design clean, modern, and user-focused interfaces that enhance usability,
            improve user experience, and strengthen product interaction.
          </p>
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-20 mt-20">
        <div className="grid lg:grid-cols-3 gap-16 text-left">

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              User-Centered Interface
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We design clean, modern interfaces focused on usability,
              clarity, and seamless user interaction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Better Navigation & Flow
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We improve structure and interaction to make products easy,
              intuitive, and efficient to use.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Conversion-Focused Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We design with purpose, improving engagement,
              retention, and overall product effectiveness.
            </p>
          </div>

        </div>
      </section>

    </div>
  </div>
</div>




{/* MOBILE - UI & UX Design */}
<div className="block lg:hidden">
  <div className={poppins.className}>
    <div className="w-full bg-gradient-to-b from-white to-[#FFF1E5]">

      {/* HERO SECTION */}
      <section className="px-6 pt-14 pb-8 flex flex-col items-center text-center">

        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold leading-snug">
            <span className="text-orange-500">UI&UX</span>{" "}
            <span className="text-gray-700">Design</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            We design clean, modern, and user-focused interfaces
            that enhance usability, improve user experience,
            and strengthen product interaction.
          </p>
        </div>

        <div className="mt-8">
          <Image
            src="/Ux Design.png"
            alt="UI UX Design"
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
            User-Centered Interface
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We design clean, modern interfaces focused on usability,
            clarity, and seamless user interaction.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Better Navigation & Flow
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We improve structure and interaction to make products
            easy, intuitive, and efficient to use.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="text-base font-semibold text-gray-800">
            Conversion-Focused Design
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            We design with purpose, improving engagement,
            retention, and overall product effectiveness.
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


