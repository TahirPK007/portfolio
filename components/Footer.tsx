import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
