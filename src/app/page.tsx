// import Image from "next/image";
// import { ModeToggle } from "@/components/dark-theme-toggle";
// import { div } from "framer-motion/client";
"use client";
import Navbar from "@/components/navbar/navbar";
// import SmoothScroll from "@/components/ui/smoothScroll";
import Homesec from "@/components/sections/home";
import MyServices from "@/components/sections/service";
import About_me from "@/components/sections/about_me";
import { motion } from "framer-motion";
// import PortfolioCards from "@/components/sections/portfolio";
import { HoverEffect } from "@/components/sections/portfolio";
import { portfolioWorks } from "@/components/texts/content";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/eduction";
export default function Home() {
  return (
    <div className="bg-default text-gray-300">
      <Navbar />
      <Homesec />
      <MyServices />
      <section className="relative" id="about">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>
      </section>
      {/* End of About me */}
      <Education />
      <HoverEffect items={portfolioWorks} />
      <Contact />
    </div>
  );
}
