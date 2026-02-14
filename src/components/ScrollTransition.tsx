"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollTransition() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Add spring physics for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to opacity values
  const firstOpacity = useTransform(smoothProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const secondOpacity = useTransform(smoothProgress, [0.5, 0.6, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="relative h-[200vh]" id="about">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="lg:flex-1 w-full flex flex-col gap-8">
              <div className="relative">
                <motion.h2
                  style={{ opacity: firstOpacity }}
                  className="font-serif text-espresso text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center lg:text-left max-w-2xl"
                >
                  <span className="text-brand">250 lunches a year</span> and you eat most of them <em className="italic">alone.</em>
                </motion.h2>
                <motion.h2
                  style={{ opacity: secondOpacity }}
                  className="font-serif text-espresso text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center lg:text-left max-w-2xl absolute inset-0"
                >
                  <span className="text-brand">One of them</span> is all it takes to meet <em className="italic">someone new.</em>
                </motion.h2>
              </div>

              <a
                href="#cta"
                className="hidden lg:inline-flex items-center gap-3 bg-espresso hover:bg-espresso/90 text-white font-semibold text-base px-8 py-4 rounded-full w-fit transition-all duration-300 shadow-sm hover:shadow-md mx-auto lg:mx-0"
              >
                Get early access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:flex-1 h-80 sm:h-96 lg:h-[500px] max-w-md lg:max-w-none">
              <div className="relative h-full rounded-3xl overflow-hidden">
                <motion.div
                  style={{ opacity: firstOpacity }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/section-friends-dining.jpg"
                    alt="Friends enjoying lunch"
                    fill
                    className="object-cover"
                    quality={80}
                  />
                </motion.div>
                <motion.div
                  style={{ opacity: secondOpacity }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/section-friends-table.jpg"
                    alt="Friends meeting someone new"
                    fill
                    className="object-cover"
                    quality={80}
                  />
                </motion.div>
              </div>
            </div>

            {/* Mobile CTA */}
            <a
              href="#cta"
              className="lg:hidden inline-flex items-center gap-3 bg-espresso hover:bg-espresso/90 text-white font-semibold text-base px-8 py-4 rounded-full w-fit transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get early access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
