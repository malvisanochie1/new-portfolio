"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutMeImg from "../../../public/home/Developer2.jpg";
export default function About_me() {
  const [isHovered, setIsHovered] = useState(false);
  const secondaryGlowVariants = {
    hover: {
      boxShadow: [
        "0 0 0 rgba(153, 51, 255, 0)",
        "0 0 20px rgba(153, 51, 255, 0.4)",
        "0 0 40px rgba(153, 51, 255, 0.2)",
      ],
      transition: {
        duration: 0.3,
      },
    },
  };
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative bg-gray-800/50 py-16 px-4 flex justify-center items-center min-h-[300px]">
      <div className=" lg:px-8 py-12 md:py-20 max-w-6xl mx-auto">
        <div
          className="max-w-6xl w-full bg-gradient-to-r from-pink-500 to-purple-600 p-[1px] rounded-lg overflow-hidden md:max-h-96-"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gray-900 rounded-lg  p-0 flex flex-col md:flex-row overflow-y-hidden">
            {/* Image Section */}
            <div className="md:w-[40%] relative overflow-hidden md:rounded-l-lg overflow-y-hidden rounded-t-lg md:rounded-t-none md:rounded-tl-lg- ">
              <div
                className={`md:rounded-l-lg overflow-y-hidden md:rounded-t-none md:rounded-tl-lg- w-full h-full transition-transform duration-700 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  width={500}
                  height={250}
                  src={AboutMeImg}
                  alt="Developer looking at code on screen"
                  className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg max-h-[400px] md:max-h-full md:rounded-none md:rounded-l-lg"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-[60%] py-6 px-3 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-white text-sm">Chisom Malvis</span>
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                <span className="text_gradient my-2">
                  A Frontend UI Developer
                </span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
                I specialize in building clean, responsive, and visually
                polished web interfaces using React, Next.js, and Tailwind CSS.
                I turn Figma designs into pixel-perfect, interactive frontends
                with smooth animations, scalable components, and modern UI
                practices.
                <br />
                I value clarity, performance, and a professional design finish —
                ensuring every layout is consistent, well-structured, and
                user-friendly across devices.
                <br />
                <br />
                I&apos;updatedm constantly improving my skills in API
                integration, state management, and full-stack fundamentals to
                build even more dynamic and production-ready web apps.
                <br />
                <br />
                Whether it’s a landing page, dashboard, or multi-page platform,
                I bring a strong design eye, modern development workflow, and a
                commitment to delivering clean, high-quality code and
                interfaces.
              </p>

              <div className="inline w-fit mt-5">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate="animate"
                  className="relative"
                >
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                  >
                    <motion.div
                      variants={secondaryGlowVariants}
                      whileHover="hover"
                      className="rounded-md"
                    >
                      <Link
                        href="#contact"
                        className="relative border-2 border-[#9933ff] text-white px-4 md:px-4 py-3 rounded-md hover:bg-[#9933ff]/10 transition-all duration-300 font-semibold text-base md:text-lg group overflow-hidden"
                      >
                        <span className="relative z-10">Contact Me</span>

                        {/* Animated border */}
                        <motion.div
                          className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#9933ff] via-[#ff3366] to-[#9933ff] rounded-md"
                          style={{
                            backgroundSize: "200% 100%",
                          }}
                          animate={{
                            backgroundPosition: ["0% 0%", "200% 0%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />

                        {/* Inner content background */}
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
