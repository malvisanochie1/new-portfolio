"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLayerGroup } from "react-icons/fa6";
import { FaCubesStacked } from "react-icons/fa6";
import { GiPalette } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: ReactNode;
  isLearning?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend-core",
    title: "Frontend Core",
    description: "Fundamental web technologies",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: <FaLayerGroup size={20} className="text-gray-100" />,
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    description: "Modern development tools",
    skills: ["React", "Next.js"],
    icon: <FaCubesStacked size={20} className="text-gray-100" />,
  },
  {
    id: "styling",
    title: "Styling Systems",
    description: "Design and styling solutions",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "Flowbite",
      "Aeternity UI",
    ],
    icon: <GiPalette size={20} className="text-gray-100" />,
  },
  {
    id: "design",
    title: "Design Implementation",
    description: "From design to code",
    skills: ["Figma → Code translation"],
    icon: <FaPencilRuler size={20} className="text-gray-100" />,
  },
  {
    id: "version-control",
    title: "Version Control",
    description: "Code management",
    skills: ["Git", "GitHub"],
    icon: <FaUsersCog size={20} className="text-gray-100" />,
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Performance & accessibility",
    skills: ["Lazy loading", "Clean rendering", "Accessibility"],
    icon: <FaTools size={20} className="text-gray-100" />,
  },
  {
    id: "learning",
    title: "Currently Learning",
    description: "Expanding my skillset",
    skills: ["API integration", "Backend basics"],
    icon: <FaRocket size={20} className="text-gray-100" />,
    isLearning: true,
  },
];

export default function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
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
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 gradient rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h2 className="text-white text-2xl font-bold">My Skills</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl">
              A comprehensive overview of my technical expertise, organized by
              category. I&apos;m constantly learning and expanding my skillset
              to stay current with modern web development practices.
            </p>
          </div>
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Card
                className={`h-full border-l-5 border-gray-600 transition-all duration-300 cursor-pointer bg-gray-900 ${
                  category.isLearning
                    ? "border-l-chart-2 hover:shadow-lg hover:shadow-chart-2/20"
                    : "border-l-[#F1029A] hover:shadow-lg hover:shadow-[#F1029A]/20 "
                } ${
                  hoveredCard === category.id
                    ? "transform scale-105 shadow-xl"
                    : "hover:shadow-md"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className=" gradient rounded-lg p-3">
                      {category.icon}
                    </div>
                    {category.isLearning && (
                      <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">
                        Learning
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-gray-200 font-semibold mb-1">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`transition-all duration-200 ${
                          category.isLearning
                            ? "bg-chart-2/10 text-chart-2 border-chart-2/30 hover:bg-chart-2/20"
                            : "bg-[#F1029A]/10 text-[#F1029A] border-[#F1029A]/30 hover:bg-[#F1029A]/20"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 md:mt-16 p-6 rounded-lg border border-purple-400/50  @apply bg-gradient-to-r from-[#F1029A]/10 to-[#3622AD]/10">
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="text-[#F1029A] font-semibold">Pro Tip:</span>{" "}
            I&apos;m always open to learning new technologies and frameworks. If
            you have a project that requires skills beyond what&apos;s listed
            here, feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}
