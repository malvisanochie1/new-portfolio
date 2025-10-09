"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { div } from "framer-motion/client";
import { GrTestDesktop } from "react-icons/gr";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  links: string[];
  label: string;
  url: string;
}

interface HoverEffectProps {
  items: Project[];
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className=" py-10 px-2 md:px-10">
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
        <div className="mb-8 md:mb-16 px-4 ">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-1.5 gradient rounded-lg flex items-center justify-center">
              <div className="bg-white rounded-sm p-2">
                <GrTestDesktop className="w-3 h-3 md:w-5 md:h-5 " />
              </div>
            </div>
            <h2 className="text-white text-2xl font-bold">My Portfolio</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl">
            I want to become a skilled fullstack developer, proficient in
            fronted technologies. my goals is to build visually appealing and
            high performing web applications.
          </p>
        </div>
      </motion.h1>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            href={item.liveUrl}
            key={item.id}
            className="relative group block p-2 h-full w-full"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card>
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-xl mb-4 w-full h-40 object-cover"
                width={400}
                height={160}
                unoptimized
              />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
                {item.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 px-2 py-1 rounded-full text-xs hover:bg-zinc-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full overflow-hidden bg-default border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
      className
    )}
  >
    <div className="relative z-50 p-4">{children}</div>
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
    {children}
  </h4>
);

export const CardDescription: React.FC<CardProps> = ({
  className,
  children,
}) => (
  <p
    className={cn(
      "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    {children}
  </p>
);
