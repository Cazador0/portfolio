import { Metadata } from "next";
import { About } from "@/components/sections/about";



export const metadata: Metadata = {
  title: "About | Hunter Baucum",
  description: "Learn more about Hunter Baucum  - Bachelors in Science - Business Computer Information Systems at University of North Texas",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
      </div>
    </>
  );
}