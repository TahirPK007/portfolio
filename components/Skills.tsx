import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/40 section-padding">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-accent-gradient" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-card p-6">
                <h3 className="mb-6 text-lg font-semibold text-accent-light">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm transition-transform duration-200 hover:scale-105"
                      >
                        <Icon size={18} style={{ color: skill.color }} />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
