"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      className="bg-white px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.h2
          className="font-serif text-espresso text-4xl md:text-5xl lg:text-[56px] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          You&apos;re eating lunch tomorrow anyway.
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitted ? (
            <motion.p
              className="text-orange font-medium text-lg w-full py-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              You&apos;re on the list. We&apos;ll be in touch.
            </motion.p>
          ) : (
            <>
              <input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-base focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
              />
              <motion.button
                type="submit"
                className="bg-orange hover:bg-orange-hover text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Save my spot
              </motion.button>
            </>
          )}
        </motion.form>

        <motion.p
          className="text-grey text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We&apos;ll email you when we launch. That&apos;s it.
        </motion.p>
      </div>
    </section>
  );
}
