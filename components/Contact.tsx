"use client";

import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { siteConfig, socials } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface/40 section-padding">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded bg-accent-gradient" />
          <p className="mb-10 text-center text-gray-400">
            Have a project in mind or just want to say hi? Send me a message.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="rounded-lg border border-white/10 bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="rounded-lg border border-white/10 bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="resize-none rounded-lg border border-white/10 bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-green-400">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please email me directly.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-colors hover:text-accent-light"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-accent-light"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 transition-colors hover:text-accent-light"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href={socials.email}
              aria-label="Email"
              className="text-gray-400 transition-colors hover:text-accent-light"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
