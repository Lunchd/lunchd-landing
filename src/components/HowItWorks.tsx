"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01.",
    title: "Find a table",
    description:
      "People near you are already planning lunch. Browse what's happening or start your own.",
    card: <FindTableCard />,
  },
  {
    number: "02.",
    title: "Join the table",
    description:
      "See who's going. Like the look of it? Take a seat.",
    card: <JoinTableCard />,
  },
  {
    number: "03.",
    title: "Show up",
    description:
      "Eat. Talk. Go back to work with a new name in your phone.",
    card: <ShowUpCard />,
  },
];

function FindTableCard() {
  return (
    <div className="w-full max-w-[280px] bg-white rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transform rotate-[-2deg] transition-transform duration-500 group-hover:rotate-0">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Lorenzo&apos;s table</h3>
            <p className="text-xs text-gray-500">Eataly, Liverpool St</p>
          </div>
        </div>
        <div className="bg-brand text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          12:30 PM
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((n) => (
            <Image
              key={n}
              src={`/avatar-${n}.png`}
              alt="User"
              width={28}
              height={28}
              className="rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <span className="text-xs font-medium text-brand">N/4</span>
      </div>
    </div>
  );
}

function JoinTableCard() {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[280px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transform rotate-[1deg] transition-transform duration-500 group-hover:rotate-0 flex flex-col gap-4"
      onViewportEnter={() => setIsInView(true)}
      viewport={{ margin: "-30%" }}
    >
      <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-sm">Friday Feast</h3>
          <p className="text-xs text-gray-500 font-medium">4 spots left</p>
        </div>
      </div>
      <div className="flex -space-x-2">
        {[1, 2, 3].map((n) => (
          <Image
            key={n}
            src={`/avatar-${n}.png`}
            alt="User"
            width={36}
            height={36}
            className="rounded-full border-2 border-white object-cover"
          />
        ))}
        <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs text-gray-400 font-medium">
          +2
        </div>
      </div>
      <motion.button
        className="w-full py-2.5 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
        animate={{
          backgroundColor: isInView ? "#E84908" : "#2D2D2D"
        }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span>Join Table</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.button>
    </motion.div>
  );
}

function ShowUpCard() {
  return (
    <div className="w-full max-w-[280px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transform rotate-[-1deg] transition-transform duration-500 group-hover:rotate-0 flex flex-col">
      <div className="h-24 bg-gray-100 relative w-full overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M-10,30 L110,30" stroke="#999" strokeWidth="2" fill="none" />
            <path d="M40,-10 L40,110" stroke="#999" strokeWidth="2" fill="none" />
            <path d="M30,30 L50,50" stroke="#999" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#E84908">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
            It&apos;s happening!
          </span>
        </div>
        <h3 className="font-semibold text-sm mb-1">Meet at the entrance</h3>
        <p className="text-xs text-gray-500 mb-3">Today &bull; 12:30 PM</p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-2">
            <Image
              src="/avatar-1.png"
              alt="You"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <span className="text-xs text-gray-600">You&apos;re going</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl italic text-espresso">
            How it works
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col gap-6 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Card illustration */}
              <motion.div
                className="relative w-full aspect-[4/3] bg-card-bg rounded-[2rem] border border-card-border overflow-hidden flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-lg group-hover:border-[#d6d3cb]"
                viewport={{ margin: "-30%" }}
                onViewportEnter={(entry) => {
                  if (i === 2) {
                    entry.target.classList.add("in-view");
                  }
                }}
              >
                {step.card}
                {i === 2 && (
                  <>
                    <motion.div
                      className="absolute top-10 right-10 text-brand"
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ margin: "-30%", once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                      </svg>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-10 left-10 text-yellow-400"
                      initial={{ opacity: 0, y: -4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ margin: "-30%", once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                      </svg>
                    </motion.div>
                  </>
                )}
              </motion.div>

              {/* Step info */}
              <div className="space-y-2 px-2">
                <span className="font-serif text-2xl text-brand italic">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
