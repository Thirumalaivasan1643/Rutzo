"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function Index() {
  return (
    <div>
      {/* Mobile View (sm) */}

       
      <div className="hidden md:hidden lg:block xl:block 2xl:hidden ">
        <section
          className={`${poppins.className} w-full h-screen relative overflow-hidden`}
          style={{
            background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
          }}
        >
          {/* Background Temple Image - Desktop */}
          <div className="absolute bottom-0 left-0 w-full z-0">
            <Image
              src="/temple.png"
              alt="Temple"
              width={600}
              height={600}
              className="w-full h-[520px]"
              priority
            />
          </div>

          {/* Text Content - Desktop */}
          <div className="absolute top-32 right-32 text-center px-6 z-10">
            <h1 className="text-4xl">
              <span className="text-[#DF6100] font-medium">Dream Big</span>{" "}
              <span className="text-gray-700">Code Smart</span>
              <br />
              <span className="text-[#DF6100] font-medium">
                Grow Digital
              </span>{" "}
              <span className="text-gray-700">With Us</span>
            </h1>

            <p className="mt-6 text-gray-500 text-md max-w-xl mx-auto leading-relaxed">
              Rooted in our Tamil heritage, driven by innovation
              <br />
              Rutzo Tech turns your visions into real world digital success.
              <br />
              Let&apos;s shape tomorrow, together.
            </p>
          </div>
        </section>
      </div>

 





{/* mobile  */}
<div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
  <section
    className={`${poppins.className} w-full min-h-fit flex flex-col items-center justify-start text-center px-6 py-10`}
    style={{
      background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
    }}
  >
    <div className="mt-8">
      <h1 className="text-2xl font-bold">
        <span className="text-[#DF6100] font-medium">
          Dream Big
        </span>{" "}
        <span className="text-gray-700">
          Code Smart
        </span>
        <br />
        <span className="text-[#DF6100] font-medium">
          Grow Digital
        </span>{" "}
        <span className="text-gray-700">
          With Us
        </span>
      </h1>
    </div>

    {/* Paragraph - third */}
    <div className="mt-6">
      <p className="text-gray-500 text-sm leading-relaxed">
        Rooted in our Tamil heritage, driven by innovation
        <br />
        Rutzo Tech turns your visions into real world digital success.
        <br />
        Let&apos;s shape tomorrow, together.
      </p>
    </div>
    {/* Image - first */}
    <div className="w-full flex justify-center">
      <Image
        src="/temple.png"
        alt="Temple"
        width={500}
        height={500}
        priority
        className="w-[150%] "
      />
    </div>

    {/* Heading - second */}
    

  </section>
</div>















































    </div>
  );
}
