// App constants

export const SITE_CONFIG = {
  name: "Hunter Baucum",
  description:
    "Applications Manager & Full Stack Developer",
  url: "https://hunterbaucum.com",
  ogImage: "/images/.png",
  links: {
    email: "hunterbaucum@gmail.com",
    github: "https://github.com/Cazador0",
    linkedin: "https://www.linkedin.com/in/hunter-baucum/",
    phone: "469-865-9890"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Accomplishments", href: "/accomplishments" },
  { label: "About", href: "/about" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
