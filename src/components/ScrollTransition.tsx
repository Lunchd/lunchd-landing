"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const firstOpacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0, 0.3, 0.45], [0, 0, -60]);
  const secondOpacity = useTransform(scrollYProgress, [0.4, 0.55, 1], [0, 1, 1]);
  const secondY = useTransform(scrollYProgress, [0.4, 0.55, 1], [60, 0, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative" id="about">
      <div className="sticky top-0 h-screen">
        {/* Section 2: "250 lunches a year..." */}
        <motion.div
          className="absolute inset-0 flex items-center bg-white"
          style={{ opacity: firstOpacity }}
        >
          <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
            <motion.div
              className="flex flex-col gap-8 lg:flex-1 lg:py-24"
              style={{ y: firstY }}
            >
              <h2 className="font-serif text-espresso text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none max-w-2xl">
                <span className="text-brand">250 lunches a year</span> and you
                eat most of them <em className="italic">alone.</em>
              </h2>
              <a
                href="#cta"
                className="inline-flex items-center gap-3 bg-espresso hover:bg-espresso/90 text-white font-semibold text-base px-8 py-4 rounded-full w-fit transition-colors"
              >
                Get early access
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
            <div className="lg:flex-1 w-full max-w-md lg:max-w-none h-64 lg:h-[500px]">
              <div className="relative h-full rounded-3xl overflow-hidden">
                <Image
                  src="/section-friends-dining.jpg"
                  alt="Friends enjoying lunch"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3: "One of them..." */}
        <motion.div
          className="absolute inset-0 flex items-center bg-white"
          style={{ opacity: secondOpacity }}
        >
          <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
            <motion.div
              className="flex flex-col gap-8 lg:flex-1 lg:py-24"
              style={{ y: secondY }}
            >
              <h2 className="font-serif text-espresso text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none max-w-2xl">
                <span className="text-brand">One of them</span> is all it
                takes to meet <em className="italic">someone new.</em>
              </h2>
              <a
                href="#cta"
                className="inline-flex items-center gap-3 bg-espresso hover:bg-espresso/90 text-white font-semibold text-base px-8 py-4 rounded-full w-fit transition-colors"
              >
                Get early access
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
            <div className="lg:flex-1 w-full max-w-md lg:max-w-none h-64 lg:h-[500px]">
              <div className="relative h-full rounded-3xl overflow-hidden">
                <Image
                  src="/section-friends-table.jpg"
                  alt="Friends meeting someone new"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
