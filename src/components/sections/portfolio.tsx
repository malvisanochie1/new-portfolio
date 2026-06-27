"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { div } from "framer-motion/client";
import { GrTestDesktop } from "react-icons/gr";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  image: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  links?: { label: string; url?: string }[];
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
    <div
      className=" px-2 md:px-10  lg:px-8 py-12 md:py-20 max-w-6xl mx-auto"
      id="portfolio"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0.5, y: 65 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
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
            These projects highlight my frontend engineering experience across
            real-world client work and personal products, focusing on responsive
            interfaces, reusable architecture, API integration, accessibility,
            and performance optimization using React, Next.js, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </motion.h1>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className,
        )}
      >
        {items.map((item, idx) => (
          <div
            // href={item.liveUrl ?? "#"}
            key={item.id}
            className="relative group block p-2 h-full w-full"
            // target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-700 dark:bg-slate-800/[0.8] block rounded-3xl"
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

            <Card className="border border-slate-700">
              {item.liveUrl ? (
                <Link href={item.liveUrl} target="_blank" prefetch={false}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                    width={400}
                    height={160}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </Link>
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                  width={400}
                  height={160}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              )}

              {item.badge && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-1">
                  {item.badge}
                </span>
              )}
              <CardTitle>{item.title}</CardTitle>
              {item.subtitle && (
                <p className="text-xs text-zinc-500 mt-1 font-medium tracking-wide">
                  {item.subtitle}
                </p>
              )}
              <CardDescription>{item.description}</CardDescription>
              {item.technologies && item.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
                {item.links?.map((link, index) =>
                  link?.url ? (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-700 px-2 py-1 rounded-full text-xs hover:bg-zinc-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : null,
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className="mt-16 text-center px-4"
      >
        <h3 className="text-white text-lg font-semibold mb-2">
          Want to see more?
        </h3>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
          These featured projects represent my strongest work. Visit my GitHub
          to explore additional client work, experiments, and ongoing frontend
          development.
        </p>
        <Link
          href="https://github.com/malvisanochie1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-white text-sm hover:bg-zinc-700 transition-colors duration-200"
        >
          View More Projects on GitHub →
        </Link>
      </motion.div>
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
      "rounded-2xl h-full w-full overflow-hidden bg-default backdrop-blur-md border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
      className,
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
      className,
    )}
  >
    {children}
  </p>
);
