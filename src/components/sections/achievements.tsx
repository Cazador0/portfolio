"use client";

import { motion } from "framer-motion";
import { achievementsData, certificationsData, milestonesData } from "@/data/achievements";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Award, TrendingUp } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">

        {/* Leadership Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Making a positive impact to enterprises and early career developers through mentorship and technical leadership.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="space-y-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-primary font-medium mb-3">{achievement.organization}</p>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    {/* Impact Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievement.impact.map((impact, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{impact}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certifications — wider container to prevent title wrapping */}
      <div className="container mx-auto max-w-5xl px-4">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mt-20 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized credentials across leadership, enterprise platforms, and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                    <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{cert.credential}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="container mx-auto max-w-4xl px-4">

        {/* Milestones Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mt-20 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones.
          </p>
        </motion.div>

        {/* Milestones Cards */}
        <div className="space-y-6">
          {milestonesData.map((milestones, index) => (
            <motion.div
              key={milestones.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-1">{milestones.title}</h3>
                    <p className="text-primary font-medium mb-3">{milestones.organization}</p>
                    <p className="text-muted-foreground mb-4">{milestones.description}</p>
                    {/* Impact Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {milestones.impact.map((impact, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{impact}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

