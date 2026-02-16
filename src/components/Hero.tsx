"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      <Image
        src="/lunchd-background-exact.png?rev=20260216-2315"
        alt="Friends enjoying lunch together"
        fill
        className="object-cover"
        priority
        quality={85}
        unoptimized
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 md:pt-10 pb-16 md:pb-24">
        {/* Nav */}
        <motion.nav
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Logo className="w-24 md:w-32" />
          <div className="hidden md:flex items-center gap-8 text-white font-semibold text-[19px]">
            <a
              href="#about"
              className="relative group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span>About</span>
            </a>
            <a
              href="#how-it-works"
              className="relative group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span>How it Works</span>
            </a>
            <a
              href="#faq"
              className="relative group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span>FAQ</span>
            </a>
            <a
              href="https://www.instagram.com/lunchdapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </motion.nav>

        {/* Hero content */}
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-5 md:gap-6">
            <motion.div
              className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2.5 w-fit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">
                Starting in London
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-white text-7xl sm:text-8xl md:text-8xl lg:text-[100px] leading-[0.95] max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              New friends <em className="italic">through</em> lunch
            </motion.h1>
          </div>

          <motion.a
            href="#cta"
            className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-white font-semibold text-base md:text-lg px-7 md:px-9 py-2 md:py-2.5 rounded-full w-fit transition-all duration-300 shadow-sm hover:shadow-md group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get early access
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
