"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import { projects, Project } from "@/lib/data";

type Filter = "all" | "web" | "mobile";
const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden border-b border-white/10 bg-[#0d0d14]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#1a1a26] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 hidden truncate rounded bg-white/5 px-2 py-0.5 text-[10px] text-gray-500 sm:block">
          {alt}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0d0d14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(99,102,241,0.22),transparent_42%)]" />
      <div className="absolute left-1/2 top-1/2 w-[34%] min-w-[142px] max-w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border-[6px] border-[#2a2a3a] bg-[#0d0d14] p-1.5 shadow-2xl">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.45rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="180px"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      {project.type === "mobile" ? (
        <PhoneMockup src={project.images[0]} alt={project.title} />
      ) : (
        <BrowserMockup src={project.images[0]} alt={project.title} />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-light">
            {project.type === "mobile" ? "Mobile" : "Web"}
          </span>
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-background/60 px-2 py-1 text-xs text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 border-t border-white/5 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent-gradient px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white"
            >
              <FaGithub size={15} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded bg-accent-gradient" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-12 flex justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  filter === f.value
                    ? "bg-accent-gradient text-white"
                    : "border border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
