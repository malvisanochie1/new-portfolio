"use client";
import Image from "next/image";
import Link from "next/link";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import useGsapSmoother from "../ui/hooks/useGsapSmoother";

export default function Homesec() {
  useGsapSmoother();

  return (
    // <div className="max-w-6xl mx-auto px-4 py-16 text-gray-300">
    //   <h5 className="text-sm font-bold text-center md:text-start mb-8">
    //     Am a{" "}
    //     <span className="bg-slate-800 rounded px-1.5 py-0.5">
    //       Frontend Developer
    //     </span>{" "}
    //   </h5>
    //   <h3 className="text-xl md:text-3xl font-bold text-center md:text-start mb-4">
    //     Maximize Your Business{" "}
    //     <span className="text_gradient underline">Potential</span> with Our
    //     Cutting-Edge Web{" "}
    //     <span className="text_gradient underline ">Solutions</span>
    //   </h3>
    //   <div></div>
    // </div>
    <div className="min-h-screen bg-[#0a0a16] text-white ">
      <div className="container- px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-6xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm md:text-base tracking-wider">
              <span className="font-bold">I AM</span> <span className="bg-slate-900 px-2 p-0.5 rounded">Web Developer</span>
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Maximize Your Business{" "}
              <span className="text-[#ff3366] block md:inline">Potential</span>{" "}
              <span className="block md:inline">with Custom Web</span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold">
              Development{" "}
              <span className="bg-gradient-to-r from-[#ff3366] to-[#9933ff] bg-clip-text text-transparent">
                Solutions!
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-400 max-w-lg">
              Take your business to the next level with custom web development
              solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="bg-[#ff3366] hover:bg-[#e62e5c] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all"
              >
                Get in Touch →
              </Link>
              <Link
                href="#download"
                className="border border-[#9933ff] text-white px-6 py-3 rounded-md hover:bg-[#9933ff]/10 transition-all"
              >
                Download CV
              </Link>
            </div>
          </div>

          {/* Right Content with Image and Stats */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Purple gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9933ff]/80 to-[#ff3366]/80 rounded-full blur-2xl opacity-30"></div>

              {/* Main image with circular crop */}
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-[#9933ff]/20 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <Image
                  src="/home/profile.jpg"
                  alt="Web Developer"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>

              {/* Stats badges */}
              <div className="absolute top-5 right-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20">
                <p className="font-bold text-lg">130+</p>
                <p className="text-xs">Projects</p>
              </div>

              <div className="absolute bottom-10 left-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20">
                <p className="font-bold text-lg">30+</p>
                <p className="text-xs">Clients</p>
              </div>
              {/* <div className="absolute min-w-fit -bottom-4 left-1/3 transform -translate-x-1/2 flex gap-3 backdrop-blur-sm rounded-full px-4 py-2 z-30">
                {" "}
                <span className="w-10 h-10 rounded-full bg-amber-500">
                  <Link
                    href="#"
                    className="absolute- bottom-0 left-8 bg-red-500 w-7 h-7 rounded-full hover:bg-gray-100 transition-colors shadow-lg z-30"
                  >
                    <FaWhatsapp className="w-5 h-5 text-gray-200" />
                  </Link>
                </span>
                <Link
                  href="#"
                  className="absolute- bottom-2 left-16 bg-white p-1 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <FaInstagram className="w-5 h-5 text-[#9933ff]" />
                </Link>
                <Link
                  href="#"
                  className="absolute- bottom-2 right-16 gradient p-1 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <FaLinkedinIn className="w-5 h-5 text-[#9933ff]" />
                </Link>
                <Link
                  href="#"
                  className="absolute- bottom-0 right-8 bg-white p-1 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <PiGithubLogoFill className="w-5 h-5 text-[#9933ff]" />
                </Link>
                <Link
                  href="#"
                  className="absolute- bottom-0 right-8 bg-white p-1 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <LiaFacebookF className="w-5 h-5 text-[#9933ff]" />
                </Link>
              </div> */}
              <div className="absolute min-w-fit bottom-2 left-1/3 transform -translate-x-1/2 flex gap-3 backdrop-blur-sm rounded-full px-4 py-2 z-30">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <FaWhatsapp />
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <FaInstagram />
                  </span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 gradient rounded-full gradient"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full  bg-gray-100 text-xl transition duration-300">
                    <FaLinkedinIn className=" text-[#C42DA0]" />{" "}
                  </span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <PiGithubLogoFill />
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <LiaFacebookF />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
