import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { About } from "@/components/home/About";
import { WorkWithMe } from "@/components/home/WorkWithMe";
import { Experience } from "@/components/home/Experience";
import { OutsideWork } from "@/components/home/OutsideWork";
import { Contact } from "@/components/home/Contact";
import { features } from "@/site.config";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      {features.workWithMe && <WorkWithMe />}
      <Experience />
      <OutsideWork />
      <Contact />
    </>
  );
}
