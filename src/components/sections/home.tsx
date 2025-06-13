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
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

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
        duration: 0.6,
        delay: 1.5,
        staggerChildren: 0.1,
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
              className="flex flex-nowrap gap-6 pt-4 justify-center- items-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Primary Button with Glow Effect */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                animate="animate"
                className="relative"
              >
                <motion.div variants={floatingVariants} animate="animate">
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
                      <motion.span
                        className="relative z-10"
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>

                      {/* Animated background overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{
                          x: "100%",
                          transition: { duration: 0.6 },
                        }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Secondary Button with Border Animation */}
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
                      href="#download"
                      className="relative border-2 border-[#9933ff] text-white px-4 md:px-4 py-3 rounded-md hover:bg-[#9933ff]/10 transition-all duration-300 font-semibold text-base md:text-lg group overflow-hidden"
                    >
                      <span className="relative z-10">Download CV</span>

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
            </motion.div>
          </motion.div>

          {/* Right Content with Image and Stats */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={rightContentVariants}
          >
            <div className="relative">
              {/* Purple gradient circle background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#9933ff]/80 to-[#ff3366]/80 rounded-full blur-2xl opacity-30"
                variants={pulseVariants}
                animate="animate"
              ></motion.div>

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
              </motion.div>

              {/* Stats badges */}
              <motion.div
                className="absolute top-5 right-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20"
                variants={badgeVariants}
                animate={{
                  y: [-5, 5, -5],
                  transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <p className="font-bold text-lg">130+</p>
                <p className="text-xs">Projects</p>
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20"
                variants={badgeVariants}
                animate={{
                  y: [5, -5, 5],
                  transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <p className="font-bold text-lg">30+</p>
                <p className="text-xs">Clients</p>
              </motion.div>

              <motion.div
                className="absolute min-w-fit bottom-2 lg:left-5/12 left-1/2 transform -translate-x-1/2 flex gap-3 backdrop-blur-md rounded-full px-4 py-2 z-30"
                variants={socialVariants}
              >
                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <FaWhatsapp />
                  </span>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <FaInstagram />
                  </span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 gradient rounded-full gradient"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full  bg-gray-100 text-xl transition duration-300">
                    <FaLinkedinIn className=" text-[#C42DA0]" />{" "}
                  </span>
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <PiGithubLogoFill />
                  </span>
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
                    <LiaFacebookF />
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { PiGithubLogoFill } from "react-icons/pi";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { LiaFacebookF } from "react-icons/lia";
// import useGsapSmoother from "../ui/hooks/useGsapSmoother";

// export default function Homesec() {
//   useGsapSmoother();

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const slideFromLeft = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const slideFromRight = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const slideUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 1.5,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 24 },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a16] text-white">
//       <div className="container- px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-6xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Left Content */}
//           <motion.div
//             className="lg:w-1/2 space-y-6"
//             initial="hidden"
//             animate="visible"
//             variants={slideFromLeft}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <motion.p
//               className="text-sm md:text-base tracking-wider"
//               variants={fadeIn}
//               transition={{ delay: 0.2 }}
//             >
//               <span className="font-bold">I AM</span>{" "}
//               <motion.span
//                 className="bg-slate-900 px-2 p-0.5 rounded"
//                 initial={{ opacity: 0, width: 0 }}
//                 animate={{ opacity: 1, width: "auto" }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//               >
//                 Web Developer
//               </motion.span>
//             </motion.p>

//             <motion.h1
//               className="text-4xl md:text-5xl font-bold leading-tight"
//               variants={fadeIn}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               Maximize Your Business{" "}
//               <motion.span
//                 className="text-[#ff3366] block md:inline"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.6 }}
//               >
//                 Potential
//               </motion.span>{" "}
//               <motion.span
//                 className="block md:inline"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.6 }}
//               >
//                 with Custom Web
//               </motion.span>
//             </motion.h1>

//             <motion.h2
//               className="text-3xl md:text-4xl font-bold"
//               variants={fadeIn}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               Development{" "}
//               <motion.span
//                 className="bg-gradient-to-r from-[#ff3366] to-[#9933ff] bg-clip-text text-transparent"
//                 initial={{ opacity: 0, backgroundPosition: "200% center" }}
//                 animate={{ opacity: 1, backgroundPosition: "0% center" }}
//                 transition={{ delay: 0.7, duration: 1 }}
//               >
//                 Solutions!
//               </motion.span>
//             </motion.h2>

//             <motion.p
//               className="text-sm md:text-base text-gray-400 max-w-lg"
//               variants={slideUp}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               Take your business to the next level with custom web development
//               solutions.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap gap-4 pt-4"
//               variants={slideUp}
//               transition={{ delay: 0.7, duration: 0.6 }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <Link
//                   href="#contact"
//                   className="bg-[#ff3366] hover:bg-[#e62e5c] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all"
//                 >
//                   Get in Touch →
//                 </Link>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <Link
//                   href="#download"
//                   className="border border-[#9933ff] text-white px-6 py-3 rounded-md hover:bg-[#9933ff]/10 transition-all"
//                 >
//                   Download CV
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content with Image and Stats */}
//           <motion.div
//             className="lg:w-1/2 relative"
//             initial="hidden"
//             animate="visible"
//             variants={slideFromRight}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="relative">
//               {/* Purple gradient circle background */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-[#9933ff]/80 to-[#ff3366]/80 rounded-full blur-2xl opacity-30"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 180, 360],
//                 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "linear",
//                 }}
//               ></motion.div>

//               {/* Main image with circular crop */}
//               <motion.div
//                 className="relative z-10 rounded-full overflow-hidden border-4 border-[#9933ff]/20 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
//                 initial={{ scale: 0, rotate: -10 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.5,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <Image
//                   src="/home/profile.jpg"
//                   alt="Web Developer"
//                   width={400}
//                   height={400}
//                   className="object-cover"
//                 />
//               </motion.div>

//               {/* Stats badges */}
//               <motion.div
//                 className="absolute top-5 right-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20"
//                 variants={scaleIn}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ delay: 1, duration: 0.5, type: "spring" }}
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//               >
//                 <p className="font-bold text-lg">130+</p>
//                 <p className="text-xs">Projects</p>
//               </motion.div>

//               <motion.div
//                 className="absolute bottom-16 left-0 bg-white text-black rounded-full py-2 px-4 shadow-lg z-20"
//                 variants={scaleIn}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
//                 whileHover={{ scale: 1.1, rotate: -5 }}
//               >
//                 <p className="font-bold text-lg">30+</p>
//                 <p className="text-xs">Clients</p>
//               </motion.div>

//               {/* Social media icons */}
//               <motion.div
//                 className="absolute min-w-fit bottom-2 lg:left-5/12 left-1/2 transform -translate-x-1/2 flex gap-3 backdrop-blur-md rounded-full px-4 py-2 z-30"
//                 variants={container}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <motion.a
//                   variants={item}
//                   whileHover={{ scale: 1.2, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://wa.me/1234567890"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
//                 >
//                   <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
//                     <FaWhatsapp />
//                   </span>
//                 </motion.a>
//                 <motion.a
//                   variants={item}
//                   whileHover={{ scale: 1.2, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
//                 >
//                   <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
//                     <FaInstagram />
//                   </span>
//                 </motion.a>
//                 <motion.a
//                   variants={item}
//                   whileHover={{ scale: 1.2, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center p-1.5 gradient rounded-full gradient"
//                 >
//                   <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full bg-gray-100 text-xl transition duration-300">
//                     <FaLinkedinIn className="text-[#C42DA0]" />
//                   </span>
//                 </motion.a>
//                 <motion.a
//                   variants={item}
//                   whileHover={{ scale: 1.2, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
//                 >
//                   <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
//                     <PiGithubLogoFill />
//                   </span>
//                 </motion.a>
//                 <motion.a
//                   variants={item}
//                   whileHover={{ scale: 1.2, y: -5 }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center p-1.5 rounded-full bg-gray-100"
//                 >
//                   <span className="inline-flex items-center justify-center w-5 h-5 p-1 rounded-full gradient text-gray-200 text-xl transition duration-300">
//                     <LiaFacebookF />
//                   </span>
//                 </motion.a>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
