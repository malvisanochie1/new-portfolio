"use client";
import Image from "next/image";
import Link from "next/link";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { motion } from "framer-motion";
import useGsapSmoother from "../ui/hooks/useGsapSmoother";

export default function Homesec() {
  useGsapSmoother();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // shorter entrance and lighter stagger for snappier load
        duration: 0.4,
        staggerChildren: 0.12,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  // Removed JS infinite loops for pulse/floating animations and replaced with CSS keyframes below

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: 1.0,
        staggerChildren: 0.08,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  // floatingVariants removed: replaced by CSS keyframes for better runtime performance
  const glowVariants = {
    hover: {
      boxShadow: [
        "0 0 0 rgba(255, 51, 102, 0)",
        "0 0 20px rgba(255, 51, 102, 0.4)",
        "0 0 40px rgba(255, 51, 102, 0.2)",
      ],
      transition: {
        duration: 0.3,
      },
    },
  };
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
  return (
    <motion.div
      id="home"
      className=" bg-[#0a0a16] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className=" px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            variants={leftContentVariants}
          >
            <motion.p
              className="text-sm md:text-base tracking-wider"
              variants={textVariants}
            >
              <span className="font-bold">I AM A</span>{" "}
              <motion.span
                className="bg-slate-900 px-2 p-0.5 rounded"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Frontend Developer
              </motion.span>
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              variants={textVariants}
            >
              Maximize Your Business{" "}
              <motion.span
                className="text-[#ff3366] block md:inline"
                animate={{
                  textShadow: [
                    "0 0 0px #ff3366",
                    "0 0 10px #ff3366",
                    "0 0 0px #ff3366",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Potential
              </motion.span>{" "}
              <span className="block md:inline">with Custom Web</span>
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              variants={textVariants}
            >
              Development{" "}
              <span className="bg-gradient-to-r from-[#ff3366] to-[#9933ff] bg-clip-text text-transparent">
                Solutions!
              </span>
            </motion.h2>

            <motion.p
              className="text-sm md:text-base text-gray-400 max-w-lg"
              variants={textVariants}
            >
              Take your business to the next level with custom web development
              solutions.
            </motion.p>

            {/* Animated Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4  items-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Primary Button with Glow Effect */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                {/* floating handled by CSS (GPU friendly) */}
                <div className="float-css">
                  <motion.div
                    variants={glowVariants}
                    whileHover="hover"
                    className="rounded-md"
                  >
                    <Link
                      href="#contact"
                      className="bg-gradient-to-r from-[#ff3366] to-[#e62e5c] hover:from-[#e62e5c] hover:to-[#ff3366] text-white px-4 md:px-4 py-3 md:py-3 rounded-md flex items-center gap-2 md:gap-3 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10">Get in Touch</span>
                      {/* arrow micro-motion via CSS */}
                      <span className="relative z-10 arrow-anim" aria-hidden>
                        →
                      </span>

                      {/* overlay animated using CSS transform on group-hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary Button with Border Animation */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                <div className="float-css" style={{ animationDelay: "0.9s" }}>
                  <motion.div
                    variants={secondaryGlowVariants}
                    whileHover="hover"
                    className="rounded-md"
                  >
                    <Link
                      href="#download"
                      className="relative border-2 border-[#9933ff] text-white px-4 md:px-4 py-3 rounded-md hover:bg-[#9933ff]/10 transition-all duration-300 font-semibold text-base md:text-lg group overflow-hidden "
                    >
                      <span className="relative z-10">Download CV</span>

                      {/* Animated border via CSS background animation */}
                      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#9933ff] via-[#ff3366] to-[#9933ff] rounded-md bg-pos-anim" />

                      {/* Inner content background */}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content with Image and Stats */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={rightContentVariants}
          >
            <div className="relative">
              {/* Purple gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9933ff]/80 to-[#ff3366]/80 rounded-full blur-2xl opacity-30 pulse-css" />

              {/* Main image with circular crop */}
              <motion.div
                className="relative z-10 rounded-full overflow-hidden border-4 border-[#9933ff]/20 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(153, 51, 255, 0.5)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/home/malv.png"
                  alt="Web Developer"
                  width={400}
                  height={400}
                  className="object-cover- object-bottom"
                />
                <div className="absolute top-0 w-full h-full rounded-full bg-black/20"></div>
              </motion.div>

              {/* Stats badges */}
              <motion.div
                className="absolute top-5 right-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20 bob-css"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.16 },
                }}
              >
                <p className="font-bold text-lg">130+</p>
                <p className="text-xs">Projects</p>
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20 bob-css"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.16 },
                }}
                style={{ animationDelay: "1.2s" }}
              >
                <p className="font-bold text-lg">30+</p>
                <p className="text-xs">Clients</p>
              </motion.div>

              <motion.div
                className="absolute min-w-fit bottom-2 lg:left-5/12 left-1/2 transform -translate-x-1/2 flex gap-3 backdrop-blur-sm bg-[#ffffff13] rounded-full px-4 py-2 z-30"
                variants={socialVariants}
              >
                <motion.span
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100 w-fit h-fit"
                >
                  <Link
                    href="https://wa.me/+2348121437432?text=Hello%20Malvis%20👋%0AComing%20from%20your%20Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-h-5"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                      <FaWhatsapp />
                    </span>
                  </Link>
                </motion.span>
                <motion.span
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-h-5"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                      <FaInstagram />
                    </span>
                  </Link>
                </motion.span>
                <motion.span
                  className="inline-flex items-center justify-center p-1.5 gradient rounded-full gradient"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Link
                    href="https://www.linkedin.com/in/malvis-nwakonobi-67b644277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-h-5"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient- bg-gray-200 text-xl transition duration-300">
                      <FaLinkedinIn className=" text-[#C42DA0]" />{" "}
                    </span>
                  </Link>
                </motion.span>
                <motion.span
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Link
                    href="https://github.com/malvisanochie1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-h-5"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                      <PiGithubLogoFill />
                    </span>
                  </Link>
                </motion.span>
                <motion.span
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-h-5"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                      <LiaFacebookF />
                    </span>
                  </Link>
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Animations moved to global stylesheet: src/app/globals.css (utilities layer)
