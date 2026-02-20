import Image from "next/image";
import React from "react";
import { poppins } from "../../font/poppins";

export default function Growth() {
  const services = [
    {
      title: "Custom Software",
      image: "/Custom Software.png",
      desc: "We create software solutions tailored to your business, ensuring efficiency and fostering growth.",
    },
    {
      title: "Web Development",
      image: "/Web Development.png",
      desc: "We design and develop fast, scalable, and modern websites built for real business use.",
    },
    {
      title: "Mobile App",
      image: "/Mobile App.png",
      desc: "We create high-performance android and iOS applications focused on seamless user experience.",
    },
    {
      title: "Digital Marketing",
      image: "/Digital Marketing.png",
      desc: "Grow your brand with data-driven digital marketing, SEO, and social media campaigns.",
    },
    {
      title: "UI/UX Design",
      image: "/UX Design.png",
      desc: "We design clean, modern, and user-focused interfaces that enhance usability.",
    },
    {
      title: "Social Media Management",
      image: "/Social Media Management.png",
      desc: "We manage your social presence through strategic content planning and posting.",
    },
  ];

  return (
    
    <div  >
    <div className="hidden md:hidden sm:hidden xl:block lg:block 2xl:block">
      <div
        className={`${poppins.className} py-20 bg-gradient-to-b from-white to-[#FFF1E5]`}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-[36px] font-semibold text-[#2d2d2d]">
            Powering <br /> <span className="text-[#f97316]">Your Growth</span>
          </h1>
        </div>

        {/* Grid */}
        <div
          className="max-w-6xl mx-auto grid mt-30 lg:grid-cols-3 
gap-x-5 gap-y-40 
2xl:gap-x-52 2xl:gap-y-52 
justify-items-center"
        >
          {services.map((service, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Floating Image */}
              <div className="absolute -top-[70px] bg-[white] w-[200px] h-[160px] rounded-tl-xl rounded-tr-xl shadow-md flex items-center justify-center z-20">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={160}
                  height={140}
                />
              </div>

              {/* Card */}
              <div className="bg-[#e6d6c7] w-[280px] h-[300px] pt-[100px] px-6 pb-4  rounded-2xl shadow-xl text-center flex flex-col">
                {/* Content area */}
                <div className="flex-grow">
                  <h2 className="text-[20px] font-semibold text-[#2d2d2d] mb-2">
                    {service.title}
                  </h2>

                  <p className="text-[14px] text-[#6b6b6b] leading-[22px]">
                    {service.desc}
                  </p>
                </div>

                {/* Button fixed at bottom */}
                {/* Button fixed at bottom */}
                <div className="flex items-center justify-center">
                  <div className="relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-7 py-2 rounded-md text-sm cursor-pointer group shrink-0">
                    {/* Animation layer 1 */}
                    <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

                    {/* Animation layer 2 */}
                    <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

                    {/* Button text */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-150 ease-out whitespace-nowrap">
                      Explore Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


























<div className="block md:block sm:block xl:hidden lg:hidden 2xl:hidden">
  <div
    className={`${poppins.className} py-12 bg-gradient-to-b from-white to-[#FFF1E5]`}
  >
    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-2xl font-semibold text-[#2d2d2d]">
        Powering <br /> <span className="text-[#f97316]">Your Growth</span>
      </h1>
    </div>

    {/* Grid - Single column for mobile */}
    <div className="max-w-sm mx-auto px-4 py-10 grid grid-cols-1 gap-y-24 justify-items-center">
      {services.map((service, index) => (
        <div key={index} className="relative flex flex-col items-center w-full">
          {/* Floating Image - Smaller for mobile */}
          <div className="absolute -top-[50px] bg-[white] w-[150px] h-[120px] rounded-tl-xl rounded-tr-xl shadow-md flex items-center justify-center z-20">
            <Image
              src={service.image}
              alt={service.title}
              width={120}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Card - Adjusted for mobile */}
          <div className="bg-[#e6d6c7] w-full max-w-[280px] h-[250px] pt-[80px] px-5 pb-16 rounded-2xl shadow-xl text-center flex flex-col">
            {/* Content area */}
            <div className="flex-grow">
              <h2 className="text-[18px] font-semibold text-[#2d2d2d] mb-2">
                {service.title}
              </h2>

              <p className="text-[13px] text-[#6b6b6b] leading-[20px]">
                {service.desc}
              </p>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-5 py-1.5 rounded-md text-xs cursor-pointer group shrink-0">
                {/* Animation layer 1 */}
                <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

                {/* Animation layer 2 */}
                <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-out"></span>

                {/* Button text */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-150 ease-out whitespace-nowrap">
                  Explore Now
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>













    </div>
  );
}
