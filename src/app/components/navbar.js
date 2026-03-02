"use client";

// ==========================
// IMPORTS
// ==========================
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { poppins } from "../font/poppins";

function Navbar() {
  // ==========================
  // STATE MANAGEMENT
  // ==========================
  const [isOpen, setIsOpen] = useState(false);

  // Detect REAL device type (NOT zoom)

  const menuRef = useRef(null);
  const pathname = usePathname();
  // CLOSE MOBILE MENU ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="   lg:block xl:block 2xl:block  md:hidden sm:hidden hidden ">
        <nav
          className={`${poppins.className} fixed top-0 left-0 z-50 w-full h-16 bg-[#FFF1E5] flex items-center justify-center`}
        >
          <div className="w-full px-16 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center shrink-0">
              <Image
                src="/rutzo.png"
                alt="Company Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* MENU */}
            <div className="flex items-center justify-center flex-1">
              <ul className="flex items-center gap-8 xl:gap-12 text-md">
                <li>
                  <Link
                    href="/"
                    className={`transition whitespace-nowrap ${
                      pathname === "/"
                        ? "text-[#E39B5B]"
                        : "hover:text-[#E39B5B]"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/product"
                    className={`transition whitespace-nowrap ${
                      pathname === "/product"
                        ? "text-[#E39B5B]"
                        : "hover:text-[#E39B5B]"
                    }`}
                  >
                    Product
                  </Link>
                </li>

                <li>
                  <Link
                    href="/service"
                    className={`transition whitespace-nowrap ${
                      pathname === "/service"
                        ? "text-[#E39B5B]"
                        : "hover:text-[#E39B5B]"
                    }`}
                  >
                    Service
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className={`transition whitespace-nowrap ${
                      pathname === "/about"
                        ? "text-[#E39B5B]"
                        : "hover:text-[#E39B5B]"
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/career"
                    className={`transition whitespace-nowrap ${
                      pathname === "/career"
                        ? "text-[#E39B5B]"
                        : "hover:text-[#E39B5B]"
                    }`}
                  >
                    Career
                  </Link>
                </li>

                 
              </ul>
            </div>

            {/* REACH US BUTTON */}
            <Link href="/reachus">
              <div className="relative overflow-hidden border border-[#E39B5B] text-[#E39B5B] px-7 py-2 rounded-md text-sm cursor-pointer group shrink-0">
                <span className="absolute inset-0 bg-[#E39B5B] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"></span>

                <span className="absolute inset-0 bg-[#E39B5B] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"></span>

                <span className="relative z-10 group-hover:text-white transition whitespace-nowrap">
                  Reach us
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </div>

      {/* MOBILE NAVBAR */}

      <div
        className="block  md:block sm:block lg:hidden xl:hidden 2xl:hidden"
        ref={menuRef}
      >
        <nav
          className={`${poppins.className} fixed top-0 left-0 z-50 w-full h-12 bg-[#FFF1E5] flex items-center justify-between px-2`}
        >
          <Image
            src="/rutzo.png"
            alt="Company Logo"
            width={38}
            height={38}
            priority
          />

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* MOBILE DROPDOWN */}
        <div
          className={`fixed top-12 right-2 z-50 w-36 bg-[#FFF1E5] rounded-sm
      transition-all duration-200
      ${
        isOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
        >
          <ul className="flex flex-col items-center py-5 gap-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="/product" onClick={() => setIsOpen(false)}>
              Product
            </Link>

            <Link href="/service" onClick={() => setIsOpen(false)}>
              Service
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/career" onClick={() => setIsOpen(false)}>
              Career
            </Link>
             

            <Link href="/reachus" onClick={() => setIsOpen(false)}>
              Reach Us
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
