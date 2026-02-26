"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { ScrollReveal, GradientText } from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <ScrollReveal delay={0.1} width="100%">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <GradientText>Hunter Baucum</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              People Leader & Full Stack Developer focused on enterprise solutions,
              cloud computing, machine learning, and emerging technologies.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Photo — centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-[17.3rem] h-[17.3rem] rounded-full p-[4px] bg-gradient-to-br from-primary via-purple-500 to-blue-500 shadow-2xl">
            <div className="relative rounded-full overflow-hidden w-full h-full">
              <Image
                src="/me/me.png"
                alt="Hunter Baucum"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Education Card — centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.25 }}
          className="max-w-2xl mx-auto space-y-4 mb-16"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio paragraphs — centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed text-center"
        >
          <p>
            Graduated from G. Brint Ryan College of Business with a bachelor&apos;s of science in Business
            Computer Information Systems. Started my career as a software engineer, and worked as a
            consultant for Cognizant Technology Solutions. Expanded my knowledge into Insurance &
            Financial technologies, and had the privilege to develop Guidewire solutions (Claims &
            Insurance platforms).
          </p>
          <p>
            Currently leading as an Enterprise Applications Manager at AAA Auto Club Enterprises.
            I bring experience in agile frameworks, team leadership, and IT infrastructure management.
            My responsibilities include enabling scrum masters, coordinating releases, managing production
            support, and ensuring a well-maintained backlog. I focus on succession planning, contract
            negotiations, and fostering collaborative relationships with stakeholders to prioritize
            initiatives and align organizational goals.
          </p>
          <p>
            Leading me to join AAA Auto Club Enterprises, where I have led projects in Guidewire,
            Open Systems, Mainframe & DB2, Automation, CI/CD pipelines and People Management.
            Including migrating physical resources to cloud providers like Mainframe to the Guidewire
            Cloud Platform. I develop machine learning applications for small to mid-size organizations
            to drive context driven intelligence and agentic workflows.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
