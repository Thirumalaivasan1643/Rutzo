"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function Internship() {
  return (
    <div>
      
    {/* DESKTOP / LAPTOP - Internship 2026 */}
<div className="hidden lg:block bg-[#f5f5f5] py-26">
  <div className={poppins.className}>
    <section className="max-w-6xl mx-auto px-16 flex flex-col items-center text-center">

      {/* IMAGE */}
      <Image
        src="/Career.png"
        alt="Internship 2026 Open Soon"
        width={520}
        height={520}
        priority
        className="object-contain"
      />

      {/* TITLE */}
      <h2 className="mt-14 text-4xl font-semibold text-gray-700 leading-tight">
        Internship 2026 –
        <span className="text-orange-500"> Open Soon</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-8 max-w-3xl text-gray-600 text-lg leading-relaxed">
        Join a team that builds real solutions, solves real problems, and
        creates real impact. At Rutzo Tech, we don’t just offer jobs —
        we offer opportunities to learn, grow, and build meaningful
        technology that helps businesses succeed.
      </p>

      {/* SECOND DESCRIPTION */}
      <p className="mt-6 max-w-3xl text-gray-600 text-lg leading-relaxed">
        We are always looking for passionate, skilled, and driven
        individuals who want to push boundaries and grow with a
        fast-moving digital company.
      </p>

    </section>
  </div>
</div>






















{/* Mobile Internship Section */}
<div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">

  <div className={`${poppins.className} bg-[#f5f5f5]`}>

    <section className="w-full flex flex-col items-center justify-center px-6 py-10 ">

      {/* Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/Career.png"
          alt="Internship Open Soon"
          width={300}
          height={300}
          priority
          className="w-full max-w-xs sm:max-w-sm object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-2xl sm:text-3xl font-semibold text-gray-700 text-center leading-snug">
        Internship 2026 –{" "}
        <span className="text-orange-500">Open Soon</span>
      </h2>

      {/* Description 1 */}
      <p className="mt-5 text-center text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
        Join a team that builds real solutions, solves real problems, and
        creates real impact. At Rutzo Tech, we don’t just offer jobs — we
        offer opportunities to learn, grow, and build meaningful technology.
      </p>

      {/* Description 2 */}
      <p className="mt-4 text-center text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
        We are always looking for passionate, skilled, and driven individuals
        who want to push boundaries and grow with a fast-moving digital company.
      </p>

    </section>

  </div>

</div>
      
    </div>
  );
}
