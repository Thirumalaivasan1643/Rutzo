"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function Hero() {
  return (
    <div>
              
         <div className={`${poppins.className} hidden lg:block`}>
  <section className="relative w-full h-screen overflow-hidden">

    {/* Background Image */}
    <Image
      src="/temple.png"
      alt="Temple Background"
      fill
      priority
      className=" h-[600px] w-full object-bottom"
    />

    {/* Overlay Content */}
    <div className="relative z-10 h-full flex items-center bottom-10 justify-end px-16 xl:px-24">

      <div className="max-w-xl text-center">

        <h1 className="text-4xl xl:text-5xl 2xl:text-5xl font-semibold leading-tight">
          <span className="text-[#DF6100]">Dream Big</span>{" "}
          <span className="text-black">Code Smart</span>
          <br />
          <span className="text-[#DF6100]">Grow Digital</span>{" "}
          <span className="text-black">With Us</span>
        </h1>

        <p className="mt-8 text-black text-lg xl:text-xl leading-relaxed">
          Rooted in our Tamil heritage, driven by innovation, Rutzo Tech
          turns your visions into real world digital success.
          Let&apos;s shape tomorrow, together.
        </p>

      </div>

    </div>

  </section>
</div>







      {/* mobile  */}
      <div className="block lg:hidden xl:hidden 2xl:hidden">
        <section
          className={`${poppins.className} w-full flex flex-col items-center text-center px-6 pt-10`}
          style={{
            background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
          }}
        >
          {/* Heading */}
          <div className="mt-4">
            <h1 className="text-2xl font-semibold leading-snug">
              <span className="text-[#DF6100]">Dream Big</span>{" "}
              <span className="text-gray-700">Code Smart</span>
              <br />
              <span className="text-[#DF6100]">Grow Digital</span>{" "}
              <span className="text-gray-700">With Us</span>
            </h1>
          </div>

          {/* Paragraph */}
          <div className="mt-5  max-w-md">
            <p className="text-gray-500 text-lg leading-relaxed">
              Rooted in our Tamil heritage, driven by innovation, Rutzo Tech
              turns your visions into real world digital success. Let&apos;s
              shape tomorrow, together.
            </p>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center ">
            <Image
              src="/temple.png"
              alt="Temple"
              width={600}
              height={600}
              priority
              className="w-full max-w-md object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
