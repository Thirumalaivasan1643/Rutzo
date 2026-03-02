"use client";

import Image from "next/image";
import { poppins } from "../../font/poppins";

export default function CustomSoftwarePage() {
  return (
          <section id="custom-software">

    <div>
      <div className="hidden lg:block">
        <div className={poppins.className}>
          <div
            className="w-full flex flex-col"
            style={{
              background: "linear-gradient(to bottom, #FFF1E5, #FFFFFF)",
            }}
          >
            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-20 py-16 grid lg:grid-cols-2 items-center gap-12">
              {/* LEFT - IMAGE */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/custom software.png"
                  alt="Custom Software"
                  width={1000}
                  height={1000}
                  className="object-contain  h-[420px] w-[420px] drop-shadow-lg"
                  priority
                />
              </div>

              {/* RIGHT - CONTENT */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                  <span className="text-orange-500">Custom</span>{" "}
                  <span className="text-gray-600">Software</span>
                </h1>

                <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
                  We build tailored software systems and business applications
                  designed to automate workflows, improve efficiency, and solve
                  real operational challenges.
                </p>
              </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="max-w-7xl mx-auto px-20 pb-20">
              <div className="grid lg:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Business Focused Systems
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    We create software tailored to your exact workflow,
                    operations, and real business requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Workflow Automation
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    We reduce manual work by automating repetitive tasks, saving
                    time, cost, and human effort.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Scalable & Secure Solutions
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    We build stable, secure software designed to grow with your
                    business without breaking.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* mobile - Custom Software */}

      <div className="block lg:hidden">
        <div className={poppins.className}>
          <div className="w-full bg-gradient-to-b from-[#FFF1E5] to-white py-16">
            {/* HERO SECTION */}
            <section className="px-6   flex flex-col items-center text-center gap-6">
              <div className="max-w-xs">
                <h1 className="text-3xl font-semibold leading-tight">
                  <span className="text-orange-500">Custom</span>{" "}
                  <span className="text-gray-700">Software</span>
                </h1>

                <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
                  We build tailored software systems and business applications
                  designed to automate workflows, improve efficiency, and solve
                  real operational challenges.
                </p>
              </div>

              <Image
                src="/custom software.png"
                alt="Custom Software"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </section>

            {/* FEATURES SECTION */}
            <section className="px-6 py-5 flex flex-col gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Business Focused Systems
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  We create software tailored to your exact workflow,
                  operations, and real business requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Workflow Automation
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  We reduce manual work by automating repetitive tasks, saving
                  time, cost, and human effort.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Scalable & Secure Solutions
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  We build stable, secure software designed to grow with your
                  business without breaking.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
       </section>
  );
}
