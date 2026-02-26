"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Cpu, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import { projects as allProjects, type Project } from "@/data/projects";

const CATEGORY_LABEL: Record<string, string> = {
  web: "Web App",
  mobile: "Mobile App",
  blockchain: "Blockchain",
  ai: "AI / Data",
};

export function FeaturedProjects() {
  const projects = allProjects;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* 🌌 Starry Black Background */}
      <ShootingStars />
      <StarsBackground />

      {/* Subtle radial dark glow for focus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.75),transparent_80%)]" />

      {/* faint grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em]">
            <Sparkles className="h-3 w-3" />
            <span className="font-mono">Projects driving business value</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">Professional & Personal Projects</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
            Enterprise & personal projects that provide {" "}
            <span className="font-semibold text-zinc-100">innovative, scalable UI</span>{" "}
            with{" "}
            <span className="font-semibold text-zinc-100">proven system designs</span>{" "}
            and smooth workflows to full-scale platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Glow border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_140deg,_rgba(244,244,245,0.16),_rgba(39,39,42,0.2),_rgba(148,163,184,0.35),_rgba(244,244,245,0.16))] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

              <Card
                className="relative z-10 h-full rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-white shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardHeader className="pb-3">
                  <div className="space-y-1">
                    <CardTitle className="text-base md:text-lg font-semibold">
                      {project.title}
                    </CardTitle>
                    <p className="text-xs md:text-sm text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border-none bg-zinc-800/80 text-[11px] font-normal text-zinc-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 && (
                      <Badge
                        variant="outline"
                        className="border-zinc-600/60 bg-transparent text-[11px] text-zinc-300"
                      >
                        +{project.technologies.length - 5} more
                      </Badge>
                    )}
                  </div>

                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-zinc-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover expand — long description + remaining features */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-zinc-700/50 space-y-2">
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {project.longDescription}
                          </p>
                          {project.features.slice(3).length > 0 && (
                            <ul className="space-y-1.5 text-xs text-zinc-300">
                              {project.features.slice(3).map((feature) => (
                                <li key={feature} className="flex gap-2">
                                  <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-zinc-400" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">
                    <Badge
                      variant="outline"
                      className="border-zinc-600/70 bg-transparent text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-300"
                    >
                      <Code2 className="mr-1 h-3 w-3" />
                      {CATEGORY_LABEL[project.category ?? ""]}
                    </Badge>

                    <div className="flex items-center gap-3">
                      {project.demoUrl && (
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-100 hover:text-white"
                        >
                          Live Demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-100"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
