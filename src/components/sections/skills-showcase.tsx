"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

// Skill type
interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "JAVA", logo: "https://skillicons.dev/icons?i=java" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs&theme=light" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
  { name: "Material UI", logo: "https://skillicons.dev/icons?i=materialui" },
  { name: "MySQL", logo: "https://skillicons.dev/icons?i=mysql" },
  { name: "AWS", logo: "https://skillicons.dev/icons?i=aws" },
  { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel&theme=light" },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", logo: "https://skillicons.dev/icons?i=github&theme=light" },

];

export function SkillsShowcase() {
  const rows = [
    skills.slice(0, 5),
    skills.slice(5, 10),
    skills.slice(10, 15),
    skills.slice(15),
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      {/* 🌌 Shooting Stars + Star Background */}
      <ShootingStars />
      <StarsBackground />

      {/* Subtle radial vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85),transparent_85%)] pointer-events-none" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10 w-full">

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
            <span className="font-mono">Tools of the trade</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
            Languages, frameworks, and platforms I build with across{" "}
            <span className="font-semibold text-zinc-100">enterprise</span> and{" "}
            <span className="font-semibold text-zinc-100">personal</span> projects.
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center space-y-12">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {row.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
        </div>

      </div>{/* end container */}

      {/* Soft top/bottom glow for cinematic depth */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

// Skill Icon Component
function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* glow ring */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative z-10">
          {imgError ? (
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
              <span className="text-xs text-white text-center px-1">
                {skill.name}
              </span>
            </div>
          ) : (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
    </div>
  );
}
