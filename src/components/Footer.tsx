"use client";

import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <motion.footer
      className="bg-espresso text-white px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo className="w-24" />
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              X
            </a>
            <a
              href="mailto:hello@lunchd.app"
              className="hover:opacity-70 transition-opacity"
            >
              say hi
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <span>Lunchd &copy; 2026</span>
          <span>Made in London. Mostly works.</span>
        </div>
      </div>
    </motion.footer>
  );
}
