"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const faqs = [
  {
    question: "Is this a dating app?",
    answer:
      "No. Lunchd is for friendships. You're going to lunch, not on a date. If something else happens that's your business.",
  },
  {
    question: "Is it free?",
    answer:
      'Yes. Completely free. No trials, no tiers, no "premium tables."',
  },
  {
    question: "Do I have to go alone?",
    answer:
      "No. Bring someone if that's easier. Some tables are solo, some are open to pairs. You'll see before you join.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "Things come up. Just cancel through the app and the seat opens for someone else. No penalty. But try not to make it a habit — someone was looking forward to meeting you.",
  },
  {
    question: "How many people are at a table?",
    answer:
      "Usually 2–4. Small enough for a real conversation. This isn't a networking event with name tags.",
  },
  {
    question: "Is this just in London?",
    answer:
      "For now. We're starting small on purpose. Join the waitlist and we'll tell you when we're in your city.",
  },
  {
    question: "Who built this?",
    answer:
      "Three people who were tired of eating lunch alone. Zero backend experience. A group chat full of bugs. But the app works. Mostly.",
  },
];

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="faq-item bg-white rounded-2xl overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2.5 md:px-5 md:py-3 text-center cursor-pointer"
      >
        <span className="font-medium text-base md:text-[17px] text-espresso flex-1 text-center">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-espresso text-2xl flex-shrink-0 ml-4 font-light"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 md:px-8 pb-6 md:pb-8 text-muted leading-relaxed text-sm md:text-base text-center max-w-xl mx-auto">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Element | null;
      if (!target) return;
      if (target.closest(".faq-item")) return;
      setOpenIndex(null);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <section id="faq" className="bg-cream min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28">
      <div className="max-w-3xl mx-auto w-full flex flex-col gap-10 items-center">
        <motion.h2
          className="w-full max-w-[34rem] mx-auto font-serif text-espresso text-4xl md:text-5xl lg:text-[56px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <em className="italic">Questions</em>
        </motion.h2>

        <div className="w-full max-w-[34rem] mx-auto flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
