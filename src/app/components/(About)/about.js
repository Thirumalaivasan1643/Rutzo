import React from "react";
import Image from "next/image";
import { poppins } from "../../font/poppins";

function About() {
  return (
    <div>

      
      <div className="md:hidden sm:hidden hidden xl:block 2xl:block lg:block   py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className={poppins.className}>
            {/* Image */}
            <div className="mb-10">
              <Image
                src="/About.png"
                alt="About illustration"
                width={600}
                height={450}
                priority
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>

            {/* Content */}
            <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
              Rutzo Tech is a technology-driven digital solutions company
              focused on building practical, result-oriented products and
              services for modern businesses. We combine technical expertise,
              creative thinking, and strategic execution to help companies grow,
              operate efficiently, and stay competitive in the digital world. We
              don’t just build software or run campaigns — we solve real
              business problems. Every solution we create is designed to improve
              performance, simplify operations, and deliver measurable results.
            </p>
          </div>
        </div>
      </div>











{/* mobile */}
<div className="md:block sm:block block xl:hidden 2xl:hidden lg:hidden  py-10 bg-white">

  <div className="max-w-7xl mx-auto px-6">
    
    <div className={`${poppins.className} flex flex-col items-center text-center`}>

      {/* Image */}
      <div className="w-full flex justify-center mb-8 mt-2">
        <Image
          src="/About.png"
          alt="About Rutzo Tech"
          width={600}
          height={450}
          priority
          className="w-full max-w-sm sm:max-w-md h-auto object-contain"
        />
      </div>

      {/* Content */}
      <p className="text-gray-600 text-base sm:text-lg  leading-relaxed max-w-2xl">
        Rutzo Tech is a technology-driven digital solutions company focused on building
        practical, result-oriented products and services for modern businesses.
        <br /><br />
        We combine technical expertise, creative thinking, and strategic execution
        to help companies grow, operate efficiently, and stay competitive in the digital world.
        <br /><br />
        We don’t just build software or run campaigns — we solve real business problems.
        Every solution we create is designed to improve performance, simplify operations,
        and deliver measurable results.
      </p>

    </div>

  </div>

</div>













    </div>
  );
}

export default About;
