import type { Metadata } from "next";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Hunter Baucum",
  description: "Learn more about Hunter Baucum  - Bachelors in Science - Business Computer Information Systems at University of North Texas",
};

export default function AccomplishmentsPage() {
    return (
    <div className="pt-20 min-h-screen">
      <Achievements />
    </div>
  );
}