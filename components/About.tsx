import Reveal from "./Reveal";
import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-accent-gradient" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-center text-lg leading-relaxed text-gray-400">
            {siteConfig.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
