"use client";

import { poppins } from "../../font/poppins";

export default function WhyWorkWithUs() {
  return (
    <div className={`${poppins.className} bg-[#f5f5f5]`}>

      {/* SECTION */}
      <section className="w-full h-[600px] pb-10 py-64 px-6">

        {/* CONTAINER */}
        <div className="max-w-6xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600">
            Why Work <span className="text-orange-500">With Us</span>
          </h2>

           


          {/* 3 COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

  {/* COLUMN 1 */}
  <div className="border border-gray-300 rounded-xl p-6 hover:border-orange-500 transition duration-300">
    <h3 className="text-lg md:text-xl font-semibold text-gray-700">
      Growth-Focused Environment
    </h3>

    <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
      We believe in continuous learning, skill development, and
      real-world experience.
    </p>
  </div>


  {/* COLUMN 2 */}
  <div className="border border-gray-300 rounded-xl p-6 hover:border-orange-500 transition duration-300">
    <h3 className="text-lg md:text-xl font-semibold text-gray-700">
      Real Projects, Real Impact
    </h3>

    <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
      Work on live products, client systems, and scalable digital
      solutions — not dummy tasks.
    </p>
  </div>


  {/* COLUMN 3 */}
  <div className="border border-gray-300 rounded-xl p-6 hover:border-orange-500 transition duration-300">
    <h3 className="text-lg md:text-xl font-semibold text-gray-700">
      Supportive Team Culture
    </h3>

    <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
      Collaborative environment where everyone contributes,
      learns, and improves together.
    </p>
  </div>

</div>


        </div>

      </section>

    </div>
  );
}
