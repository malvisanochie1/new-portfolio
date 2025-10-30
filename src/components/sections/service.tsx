"use client";
import { FaDesktop } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineRecycling } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";
import { FaKey } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { motion } from "framer-motion";
import { FaPuzzlePiece } from "react-icons/fa6";
import { MdSpeed } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Link from "next/link";
export const services = [
  {
    title: "React & Next.js UI Development",
    description:
      "I build modern, fast-loading web apps using React and Next.js, leveraging reusable components, routing, and API integration.",
    gradient: "from-blue-600 to-cyan-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaReact />
      </span>
    ),
  },
  {
    title: "Custom UI Design Implementation",
    description:
      "I translate Figma and XD designs into pixel-perfect, interactive UIs using Tailwind CSS, Bootstrap, and other modern tools.",
    gradient: "from-cyan-600 to-emerald-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <SiAffinitydesigner />
      </span>
    ),
  },
  {
    title: "Responsive Website Development",
    description:
      "I build fully responsive websites that adapt seamlessly across mobile, tablet, and desktop using HTML, CSS, and JavaScript.",
    gradient: "from-emerald-600 to-teal-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaDesktop />
      </span>
    ),
  },
  {
    title: "Reusable Component Creation",
    description:
      "I develop scalable UI components like cards, buttons, tabs, and modals to maintain consistency across your project.",
    gradient: "from-teal-600 to-green-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <MdOutlineRecycling />
      </span>
    ),
  },
  {
    title: "UI Library Integration",
    description:
      "I integrate and customize components from libraries like Flowbite, Shadcn/UI, and Aeternity UI to match your brand identity.",
    gradient: "from-green-600 to-lime-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaPuzzlePiece />
      </span>
    ),
  },
  {
    title: "Dashboard UI Development",
    description:
      "I create clean, responsive dashboards with charts, tables, filters, and intuitive navigation for admin platforms.",
    gradient: "from-lime-600 to-yellow-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <MdSpaceDashboard />
      </span>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "I implement best practices like lazy loading, efficient rendering, and layout stability for faster, smoother experiences.",
    gradient: "from-yellow-600 to-orange-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <MdSpeed />
      </span>
    ),
  },
  {
    title: "Frontend Refactoring & Cleanup",
    description:
      "I optimize existing codebases by refactoring cluttered CSS/JS, organizing components, and improving maintainability.",
    gradient: "from-orange-600 to-rose-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <HiOutlineAdjustmentsHorizontal />
      </span>
    ),
  },
  {
    title: "Frontend Bug Fixing & UI Optimization",
    description:
      "I identify and fix layout, styling, or rendering issues to enhance responsiveness and performance.",
    gradient: "from-rose-600 to-fuchsia-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <GiSpanner />
      </span>
    ),
  },
  {
    title: "Accessible & Headless UI Development",
    description:
      "I build accessible, screen-reader-friendly components that follow WCAG and ARIA guidelines for inclusivity.",
    gradient: "from-fuchsia-600 to-violet-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaKey />
      </span>
    ),
  },
  {
    title: "Version Control & Collaboration",
    description:
      "I use Git and GitHub for efficient collaboration, versioning, and secure deployment workflows.",
    gradient: "from-violet-600 to-indigo-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <IoMdGitCompare />
      </span>
    ),
  },
];

export default function MyServices() {
  return (
    <section className="bg-default py-16 " id="service">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0.5, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {" "}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 gradient rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h2 className="text-white text-2xl font-bold">My Services</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl">
              I am a skilled web developer with expertise in creating innovative
              and user-friendly websites. My passion for coding and my attention
              to detail allow me to create custom solutions.
            </p>
          </div>
        </motion.h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-white text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="#contact"
                      className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-300 group-hover:translate-x-1 transform inline-flex items-center gap-2"
                    >
                      Learn More
                      <span className="group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
