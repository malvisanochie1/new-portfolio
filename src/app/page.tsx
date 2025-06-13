// import Image from "next/image";
// import { ModeToggle } from "@/components/dark-theme-toggle";
// import { div } from "framer-motion/client";
"use client";
import Navbar from "@/components/navbar/navbar";
// import SmoothScroll from "@/components/ui/smoothScroll";
import Homesec from "@/components/sections/home";
import MyServices from "@/components/sections/service";
import About_me from "@/components/sections/about_me";
export default function Home() {
  return (
    <div className="bg-default text-gray-300">
      {/* Navbar */}
      <Navbar />
      {/* End of Navber */}
      {/* Home */}
      <section className=" w-full -bg-slate-900" id="home">
        <Homesec />
      </section>
      {/* End of Home */}

      {/* Service */}
      <section className="" id="service">
        <MyServices />
      </section>
      {/* End of Service */}

      {/* About me */}
      <section className="relative" id="about">
        <div className="w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[100%] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M321.39,56.44C208.48,75.84,104.79,95.13,0,86.06V0H1200V27.35
          c-95.45,27-199.35,52.2-309.53,47.72-89.57-3.77-172.81-30.87-264.24-35.59
          C508.13,35.73,416.94,41.18,321.39,56.44Z"
              className="fill-gray-800/50"
            />
          </svg>
        </div>
        <About_me />
      </section>
      {/* End of About me */}

      {/* Skills */}
      <section className="h-screen w-full bg-red-200" id="skills"></section>
      {/* End of Skills */}
      {/* Portfolio */}
      <section className="h-screen w-full bg-red-800" id="portfolio"></section>
      {/* End of Portfolio */}

      {/* Contact */}
      <section className="h-screen w-full bg-red-600" id="contact"></section>
      {/* End of Contact */}
    </div>
  );
}
