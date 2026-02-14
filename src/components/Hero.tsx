"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt="Friends enjoying lunch together"
        fill
        className="object-cover"
        priority
        quality={85}
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
          <div className="hidden md:flex items-center gap-8 text-white font-semibold text-base">
            <a href="#about" className="hover:opacity-80 transition-opacity">
              About
            </a>
            <a
              href="#how-it-works"
              className="hover:opacity-80 transition-opacity"
            >
              How it Works
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Instagram
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
              className="font-serif text-white text-6xl sm:text-7xl md:text-8xl lg:text-[132px] leading-[0.9] max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              New friends <em className="italic">through</em> lunch
            </motion.h1>

            <motion.p
              className="text-white font-medium text-lg md:text-2xl lg:text-3xl max-w-xl leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              One hour. One stranger. One table. That&apos;s all it takes.
            </motion.p>
          </div>

          <motion.a
            href="#cta"
            className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-white font-semibold text-base md:text-lg px-8 md:px-10 py-3.5 md:py-4 rounded-full w-fit transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get early access
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
