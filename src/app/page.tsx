"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/navbar";
import Homesec from "@/components/sections/home";
import BottomNav from "@/components/ui/bottom-nav";
import { motion } from "framer-motion";
import { portfolioWorks } from "@/components/texts/content";

const MyServices = dynamic(() => import("@/components/sections/service"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/skills"), { ssr: false });
const About_me = dynamic(() => import("@/components/sections/about_me"), { ssr: false });
const Education = dynamic(() => import("@/components/sections/eduction"), { ssr: false });
const HoverEffect = dynamic(
  () => import("@/components/sections/portfolio").then((m) => m.HoverEffect),
  { ssr: false }
);
const Contact = dynamic(() => import("@/components/sections/contact"), { ssr: false });

export default function Home() {
  return (
    /* pb-24 on mobile so content isn't hidden behind the fixed bottom nav */
    <div className="bg-default text-gray-300 pb-24 md:pb-0">
      <Navbar />
      <Homesec />
      <MyServices />
      <Skills />
      <section className="relative" id="about">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
      <Education />
      <HoverEffect items={portfolioWorks} />
      <Contact />
      <BottomNav />
    </div>
  );
}
