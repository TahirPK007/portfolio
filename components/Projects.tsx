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
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d0d14] shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#1a1a26] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      </div>
      <div className="relative aspect-video w-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[200px] rounded-[2rem] border-[6px] border-[#2a2a3a] bg-[#0d0d14] p-1.5 shadow-lg">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.5rem]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="200px" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      <div className="mb-5 flex items-center justify-center">
        {project.type === "mobile" ? (
          <PhoneMockup src={project.images[0]} alt={project.title} />
        ) : (
          <BrowserMockup src={project.images[0]} alt={project.title} />
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-light">
            {project.type === "mobile" ? "Mobile" : "Web"}
          </span>
        </div>

        <p className="mb-4 flex-1 text-sm text-gray-400">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-white/10 bg-background/60 px-2 py-1 text-xs text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-accent-light"
            >
              <FaExternalLinkAlt size={13} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-accent-light"
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
