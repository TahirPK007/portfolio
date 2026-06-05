import Image from "next/image";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-accent-gradient" />
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          <Reveal>
            <div className="relative mx-auto w-[220px] md:w-[260px]">
              <div className="absolute -inset-3 rounded-3xl bg-accent-gradient opacity-30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={siteConfig.photo}
                  alt={siteConfig.name}
                  width={520}
                  height={680}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-gray-400">
              {siteConfig.about}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
