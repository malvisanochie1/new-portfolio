"use client";
import { FaDesktop } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineRecycling } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { BrickWallFire } from "lucide-react";
import { GiSpanner } from "react-icons/gi";
import { FaMobileScreen } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { motion } from "framer-motion";

const services = [
  {
    title: "Responsive Website Development",
    description:
      "I build fully responsive websites that adapt seamlessly across mobile, tablet, and desktop devices using HTML, CSS, and JavaScript.",
    gradient: "from-purple-600 to-blue-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaDesktop />
      </span>
    ), // Placeholder; replace with react-icons or SVG
  },
  {
    title: "React & Next.js UI Development",
    description:
      "I create modern, fast-loading web apps using React and Next.js, leveraging reusable components, routing, and API integration.",
    gradient: "from-blue-600 to-indigo-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaReact />
      </span>
    ),
  },
  {
    title: "Custom UI Design Implementation",
    description:
      "I translate Figma, XD, or Sketch designs into pixel-perfect, interactive UIs using Tailwind CSS, Bootstrap, and modern styling tools.",
    gradient: "from-indigo-600 to-purple-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <SiAffinitydesigner />
      </span>
    ),
  },
  {
    title: "Reusable Component Creation",
    description:
      "I develop scalable UI components like cards, buttons, tabs, dropdowns, and modals to maintain design consistency across your project.",
    gradient: "from-purple-600 to-pink-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <MdOutlineRecycling />{" "}
      </span>
    ),
  },
  {
    title: "Landing Page Design",
    description:
      "I build high-converting, aesthetically pleasing landing pages tailored for product launches, campaigns, and business promotions.",
    gradient: "from-pink-600 to-red-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <IoDocumentTextOutline />
      </span>
    ),
  },
  {
    title: "Product & Listing Interfaces",
    description:
      "I design and code product pages, listing sections, and detail views for e-commerce or catalog-based websites.",
    gradient: "from-red-600 to-orange-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaThList />
      </span>
    ),
  },
  {
    title: "Dashboard UI Development",
    description:
      "I create clean, organized, and responsive dashboards with charts, tables, filters, and navigation for admin or user platforms.",
    gradient: "from-orange-600 to-yellow-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <MdSpaceDashboard />
      </span>
    ),
  },
  {
    title: "Tailwind CSS Integration",
    description:
      "I speed up your development by using Tailwind's utility-first CSS for fully customizable and consistent design systems.",
    gradient: "from-yellow-600 to-green-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <SiTailwindcss />
      </span>
    ),
  },
  {
    title: "UI Library Integration",
    description:
      "I efficiently implement and customize components from modern UI libraries like Flowbite, shadcn/ui, and Aceternity UI etc to match your brand.",
    gradient: "from-green-600 to-teal-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <BrickWallFire size={28} />
      </span>
    ),
  },
  {
    title: "Frontend Bug Fixing & UI Optimization",
    description:
      "I identify and fix layout, styling, or rendering issues to improve your site’s responsiveness, usability, and performance.",
    gradient: "from-teal-600 to-cyan-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <GiSpanner />
      </span>
    ),
  },
  {
    title: "Mobile-First Redesign",
    description:
      "I upgrade or refactor old websites into sleek, mobile-friendly interfaces that meet modern standards and improve user experience.",
    gradient: "from-cyan-600 to-blue-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaMobileScreen />
      </span>
    ),
  },
  {
    title: "Frontend Refactoring & Cleanup",
    description:
      "I optimize existing codebases by refactoring cluttered CSS/JS, organizing components, and improving maintainability.",
    gradient: "from-blue-600 to-indigo-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaArrowsRotate />{" "}
      </span>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "I implement best practices like lazy loading, clean rendering, and layout shifts prevention for faster and smoother UX.",
    gradient: "from-indigo-600 to-purple-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaSearch />
      </span>
    ),
  },
  {
    title: "Accessible & Headless UI Development",
    description:
      "I build components that are screen-reader-friendly and accessible via keyboard navigation, following WCAG and ARIA guidelines.",
    gradient: "from-purple-600 to-pink-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <FaKey />
      </span>
    ),
  },
  {
    title: "Version Control & Collaboration",
    description:
      "I use Git and GitHub for collaborative workflow, code versioning, and secure deployment processes.",
    gradient: "from-pink-600 to-red-600",
    icon: () => (
      <span className="text-2xl md:text-3xl text-gray-100">
        <IoMdGitCompare />
      </span>
    ),
  },
];

export default function MyServices() {
  return (
    <section className="bg-default py-16 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
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
                    <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-300 group-hover:translate-x-1 transform inline-flex items-center gap-2">
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
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
