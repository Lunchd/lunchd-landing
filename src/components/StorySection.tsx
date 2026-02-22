"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import Image from "next/image";

const storyImages = ["/frame-alone.png", "/frame-awkward.png", "/frame-together.png"];
const storyAlts = [
  "Person eating lunch alone at their desk",
  "Two people eating separately, divided",
  "Two people enjoying lunch together",
];

const storyTexts = [
  <>
    We learn to eat together.
    <br />
    Yet most people eat lunch <em className="text-brand italic">alone</em>.
  </>,
  <>
    It&apos;s not about time.
    <br />
    It&apos;s just <em className="text-brand italic">easier</em> that way.
  </>,
  <>
    We made it simple. <em className="text-brand italic">Change</em> the table.
  </>,
];

export default function StorySection() {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v < 0.33 ? 0 : v < 0.66 ? 1 : 2;
    if (next !== activeSlide) setActiveSlide(next);
  });

  const dotsOpacity = useTransform(scrollYProgress, [0.05, 0.12], [0, 1]);

  return (
    <div ref={sectionRef} className="relative h-[400svh]" id="about">
      <div className="sticky top-0 h-svh flex flex-col items-center justify-center bg-cream overflow-hidden">
        {/* Dot indicators */}
        <motion.div
          className="absolute top-[clamp(24px,4vh,48px)] left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-espresso/[0.06] px-4 py-2.5 rounded-full"
          style={{ opacity: dotsOpacity }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block rounded-full bg-espresso transition-all duration-300 ${
                activeSlide === i
                  ? "w-2.5 h-2.5 opacity-60"
                  : "w-2 h-2 opacity-25"
              }`}
            />
          ))}
        </motion.div>

        {/* Slide content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide}
            className="flex flex-col items-center gap-[clamp(32px,5vh,60px)] w-full px-6 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-[min(900px,85vw)] aspect-[16/9]">
              <Image
                src={storyImages[activeSlide]}
                alt={storyAlts[activeSlide]}
                fill
                className="object-contain"
                quality={90}
              />
            </div>
            <p className="font-serif text-espresso text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.25] text-center max-w-[600px]">
              {storyTexts[activeSlide]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Scroll nudge */}
        <motion.div
          className="absolute bottom-[clamp(40px,6vh,80px)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
          animate={{ opacity: activeSlide === 2 ? 0 : 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <span className="text-sm font-medium tracking-[0.12em] uppercase text-espresso/55">
            Scroll
          </span>
          <div className="w-0.5 h-14 bg-gradient-to-b from-espresso/50 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
