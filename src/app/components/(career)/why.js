"use client";

import { poppins } from "../../font/poppins";

export default function WhyWorkWithUs() {
  return (
    <div>
      
    <div className="hidden lg:block xl:block 2xl:block">
      <div className={`${poppins.className} bg-[#f5f5f5]`}>
        {/* SECTION */}
        <section className="w-full pb-20 py-10 px-6">
          {/* CONTAINER */}
          <div className="max-w-6xl mx-auto text-center">
            {/* TITLE */}
            <h2 className="text-3xl    font-semibold text-gray-600">
              Why Work <span className="text-orange-500">With Us</span>
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-3 gap-10 px-20 mt-16">
              {/* COLUMN 1 */}
              <div className="border border-gray-300 rounded-xl p-8 hover:border-orange-500 transition duration-300 bg-white">
                <h3 className="text-lg xl:text-xl font-semibold text-gray-700">
                  Growth-Focused Environment
                </h3>

                <p className="mt-4 text-gray-500 text-sm xl:text-base leading-relaxed">
                  We believe in continuous learning, skill development, and
                  real-world experience.
                </p>
              </div>

              {/* COLUMN 2 */}
              <div className="border border-gray-300 rounded-xl p-8 hover:border-orange-500 transition duration-300 bg-white">
                <h3 className="text-lg xl:text-xl font-semibold text-gray-700">
                  Real Projects, Real Impact
                </h3>

                <p className="mt-4 text-gray-500 text-sm xl:text-base leading-relaxed">
                  Work on live products, client systems, and scalable digital
                  solutions — not dummy tasks.
                </p>
              </div>

              {/* COLUMN 3 */}
              <div className="border border-gray-300 rounded-xl p-8 hover:border-orange-500 transition duration-300 bg-white">
                <h3 className="text-lg xl:text-xl font-semibold text-gray-700">
                  Supportive Team Culture
                </h3>

                <p className="mt-4 text-gray-500 text-sm xl:text-base leading-relaxed">
                  Collaborative environment where everyone contributes, learns,
                  and improves together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </div>














{/* mobile */}
<div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">

  <div className={`${poppins.className} bg-[#f5f5f5]`}>

    {/* SECTION */}
    <section className="w-full py-16 px-6">

      {/* CONTAINER */}
      <div className="max-w-md mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600">
          Why Work <span className="text-orange-500">With Us</span>
        </h2>


        {/* GRID → stacked for mobile */}
        <div className="grid grid-cols-1 gap-6 mt-10">


          {/* CARD 1 */}
          <div className="border border-gray-300 rounded-xl p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-700">
              Growth-Focused Environment
            </h3>

            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              We believe in continuous learning, skill development, and
              real-world experience.
            </p>
          </div>


          {/* CARD 2 */}
          <div className="border border-gray-300 rounded-xl p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-700">
              Real Projects, Real Impact
            </h3>

            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Work on live products, client systems, and scalable digital
              solutions — not dummy tasks.
            </p>
          </div>


          {/* CARD 3 */}
          <div className="border border-gray-300 rounded-xl p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-700">
              Supportive Team Culture
            </h3>

            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Collaborative environment where everyone contributes, learns,
              and improves together.
            </p>
          </div>


        </div>

      </div>

    </section>

  </div>

</div>










    </div>
  );
}
