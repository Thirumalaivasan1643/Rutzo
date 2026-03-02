"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { poppins } from "../font/poppins";

import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <div className="hidden md:hidden sm:hidden xl:block lg:block 2xl:block">
        <footer
          className={`${poppins.className} bg-gradient-to-r from-[#5a4334] to-[#6b4f3b] text-white`}
        >
          <div className="max-w-7xl h-[470px] mx-auto px-20 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40 items-start">
              {/* Pages */}
              <div>
                <h3 className="text-[18px] font-semibold mb-4">Pages</h3>
                <ul className="space-y-2 text-[14px] text-gray-200">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href="/product" className="hover:text-white">
                      Product
                    </Link>
                  </li>

                  <li>
                    <Link href="/service" className="hover:text-white">
                      Service
                    </Link>
                  </li>

                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link href="/career" className="hover:text-white">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-[18px] font-semibold mb-4">Services</h3>

                <ul className="space-y-2 text-[14px] text-gray-200">
                  <li>
                    <Link
                      href="/service#custom-software"
                      className="hover:text-white"
                    >
                      Custom Software
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service#web-application"
                      className="hover:text-white"
                    >
                      Web Application
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service#mobile-app"
                      className="hover:text-white"
                    >
                      Mobile App
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service#digital-marketing"
                      className="hover:text-white"
                    >
                      Digital Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service#ui-ux-design"
                      className="hover:text-white"
                    >
                      UI/UX Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service#social-media-management"
                      className="hover:text-white"
                    >
                      Social Media Management
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-[18px] font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-[14px] text-gray-200">
                  <li>
                    <Link href="/reachus" className="hover:text-white">
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link href="/terms" className="hover:text-white">
                      Terms & Conditions
                    </Link>
                  </li>

                  <li>
                    <Link href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Logo + Social */}
              <div className="flex flex-col items-center">
                <Link href="/">
                  <Image
                    src="/rutzo.png"
                    alt="Rutzo Tech Logo"
                    width={100}
                    height={100}
                    className=""
                  />
                </Link>

                <p className="text-gray-200 text-[16px]">rutzo tech</p>

                <div className="w-40 border-t border-2 mt-2 border-gray-300 opacity-40 mb-5"></div>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/rutzo_tech"
                    target="_blank"
                  >
                    <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                      <Instagram size={18} className="text-[#5a4334]" />
                    </div>
                  </Link>

                  <Link href="https://facebook.com" target="_blank">
                    <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                      <Facebook size={18} className="text-[#5a4334]" />
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/rutzo-tech/about/?viewAsMember=true"
                    target="_blank"
                  >
                    <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                      <Linkedin size={18} className="text-[#5a4334]" />
                    </div>
                  </Link>

                  <Link href="https://youtube.com" target="_blank">
                    <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                      <Youtube size={18} className="text-[#5a4334]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 opacity-40 mt-10"></div>

            <div className="text-center text-[14px] pt-10 text-gray-200">
              © 2026, Rutzo Tech. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>






































      {/* mobile */}

      <div className="block lg:hidden">
        <footer
          className={`${poppins.className} bg-gradient-to-r from-[#5a4334] to-[#6b4f3b] text-white`}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center px-4">
              {/* Row 1 — Pages + Services */}
              <div className="flex  w-full">
                {/* Pages */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-[18px] font-semibold mb-3">Pages</h3>

                  <ul className="flex flex-col space-y-2 text-[14px] text-gray-200">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/product">Product</Link>
                    </li>
                    <li>
                      <Link href="/service">Service</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-[18px] font-semibold mb-3">Services</h3>

                  <ul className="flex flex-col space-y-2 text-[14px] text-gray-200">
                    <li>
                      <Link
                        href="/service#custom-software"
                        className="hover:text-white"
                      >
                        Custom Software
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/service#web-application"
                        className="hover:text-white"
                      >
                        Web Application
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/service#mobile-app"
                        className="hover:text-white"
                      >
                        Mobile App
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/service#digital-marketing"
                        className="hover:text-white"
                      >
                        Digital Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/service#ui-ux-design"
                        className="hover:text-white"
                      >
                        UI/UX Design
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/service#social-media-management"
                        className="hover:text-white"
                      >
                        Social Media Management
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Row 2 — Support + Logo */}
              <div className="flex w-full mt-6">
                {/* Support */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-[18px] font-semibold mb-3">Support</h3>

                  <ul className="flex flex-col space-y-2 text-[14px] text-gray-200">
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>

                {/* Logo + Social */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <Link href="/">
                    <Image
                      src="/rutzo.png"
                      alt="Rutzo Tech Logo"
                      width={80}
                      height={80}
                      priority
                    />
                  </Link>

                  <p className="text-gray-200 text-[14px] mt-2">rutzo tech</p>

                  <div className="w-32 border-t border-gray-300 opacity-40 my-4"></div>

                  <div className="flex gap-3">
                    <Link
                      href="https://www.instagram.com/rutzo_tech"
                      target="_blank"
                    >
                      <div className="bg-white p-2 rounded-full">
                        <Instagram size={16} className="text-[#5a4334]" />
                      </div>
                    </Link>

                    <Link href="https://facebook.com" target="_blank">
                      <div className="bg-white p-2 rounded-full">
                        <Facebook size={16} className="text-[#5a4334]" />
                      </div>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/company/rutzo-tech/about/?viewAsMember=true"
                      target="_blank"
                    >
                      <div className="bg-white p-2 rounded-full">
                        <Linkedin size={16} className="text-[#5a4334]" />
                      </div>
                    </Link>

                    <Link href="https://youtube.com" target="_blank">
                      <div className="bg-white p-2 rounded-full">
                        <Youtube size={16} className="text-[#5a4334]" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="border-t border-gray-300 opacity-40"></div>

          <div className="text-center text-[12px] py-6 text-gray-200">
            © 2026, Rutzo Tech. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
