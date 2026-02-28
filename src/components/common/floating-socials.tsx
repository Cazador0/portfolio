"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, type LucideProps } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

type SocialItem = {
  Icon: React.ComponentType<LucideProps>;
  href: string;
  label: string;
};

const socials: SocialItem[] = [
  { Icon: Github,   href: SITE_CONFIG.links.github,              label: "GitHub"   },
  { Icon: Linkedin, href: SITE_CONFIG.links.linkedin,            label: "LinkedIn" },
  { Icon: Mail,     href: `mailto:${SITE_CONFIG.links.email}`,   label: "Email"    },
];

export function FloatingSocials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, ...(isMobile ? { y: -20 } : { x: -20 }) }}
      animate={{ opacity: 1, ...(isMobile ? { y: 0 } : { x: 0 }) }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed
        top-20 left-1/2 -translate-x-1/2 flex-row
        md:top-1/2 md:left-2 md:-translate-y-1/2 md:translate-x-0 md:flex-col
        lg:left-3 xl:left-5
        flex gap-2 lg:gap-3 xl:gap-4 z-50"
    >
      {socials.map(({ Icon, href, label }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, ...(isMobile ? { y: -20 } : { x: -20 }) }}
          animate={{ opacity: 1, ...(isMobile ? { y: 0 } : { x: 0 }) }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
          whileHover="hovered"
          whileTap={{ scale: 0.95 }}
          variants={{
            hovered: {
              ...(isMobile ? { y: -4 } : { x: 4 }),
              transition: { type: "spring", stiffness: 400, damping: 20, delay: 0 },
            },
          }}
          className="p-1.5 md:p-2 lg:p-2.5 xl:p-3 rounded-full bg-background border shadow-lg hover:shadow-xl hover:text-primary transition-all"
          aria-label={label}
        >
          <motion.span
            className="flex items-center justify-center"
            variants={{
              hovered: {
                scale: 1.4,
                transition: { type: "spring", stiffness: 350, damping: 14, delay: 0 },
              },
            }}
          >
            <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
          </motion.span>
        </motion.a>
      ))}

      {/* Decorative line — only when there's enough space */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden lg:block w-px h-12 xl:h-20 bg-border mx-auto mt-2 xl:mt-4"
        style={{ originY: 0 }}
      />
    </motion.div>
  );
}
