import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsShowcase } from "@/components/sections/skills-showcase";

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <FeaturedProjects />
      <SkillsShowcase />
    </div>
  );
}