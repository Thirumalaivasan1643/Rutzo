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
    <div>


      <div className="hidden lg:block">
  <div
    className={`${poppins.className} px-10 pb-10  bg-gradient-to-b from-white to-[#FFF1E5]`}
  >
    {/* Heading */}
    <div className="text-center mb-24">
      <h1 className="text-4xl   font-semibold text-[#2d2d2d] leading-tight">
        Powering <br />
        <span className="text-[#f97316]">Your Growth</span>
      </h1>
    </div>

    {/* 3 x 3 Grid */}
    <div className="max-w-7xl mx-auto px-12  ">
      <div className="grid grid-cols-3 gap-x-16 gap-y-28 justify-items-center">

        {services.map((service, index) => (
          <div key={index} className="relative flex flex-col items-center">

            {/* Floating Image */}
            <div className="absolute -top-16 bg-white w-[180px] h-[140px] rounded-t-xl shadow-md flex items-center justify-center z-20">
              <Image
                src={service.image}
                alt={service.title}
                width={140}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Card */}
            <div className="bg-[#e6d6c7] w-[300px] h-[330px] pt-[90px] px-6 rounded-2xl shadow-lg text-center flex flex-col justify-between">

              {/* Content */}
              <div>
                <h2 className="text-lg   font-semibold text-[#2d2d2d] mb-3">
                  {service.title}
                </h2>

                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Button */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-7 py-2 rounded-md text-sm cursor-pointer group">

                  <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

                  <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

                  <span className="relative z-10 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
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







      <div className="block md:block sm:block xl:hidden lg:hidden 2xl:hidden">
        <div
          className={`${poppins.className} py-12 bg-gradient-to-b from-white to-[#FFF1E5]`}
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-semibold text-[#2d2d2d]">
              Powering <br />{" "}
              <span className="text-[#f97316]">Your Growth</span>
            </h1>
          </div>

          {/* Grid - Single column for mobile */}
         <div className="max-w-sm mx-auto px-4 py-12 grid grid-cols-1 gap-y-28 justify-items-center">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center w-full"
    >
      
      {/* Floating Image */}
      <div className="absolute -top-14 bg-white w-[150px] h-[120px] rounded-t-xl shadow-md flex items-center justify-center z-20">
        <Image
          src={service.image}
          alt={service.title}
          width={120}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Card */}
      <div className="bg-[#e6d6c7] w-full max-w-[280px] pt-20 px-5 pb-6 rounded-2xl shadow-xl text-center flex flex-col items-center">

        {/* Content */}
        <div className="flex flex-col items-center">
          <h2 className="text-[18px] font-semibold text-[#2d2d2d] mb-3">
            {service.title}
          </h2>

          <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <div className="relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-5 py-2 rounded-md text-xs cursor-pointer group">
            
            {/* Animation layer 1 */}
            <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

            {/* Animation layer 2 */}
            <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
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
