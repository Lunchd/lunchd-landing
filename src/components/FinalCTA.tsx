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
      className="bg-white min-h-screen flex flex-col px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 md:pt-28 pb-6 md:pb-8"
    >
      <div className="flex-1 flex items-center">
        <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center gap-8">
          <motion.h2
            className="font-serif text-espresso text-6xl md:text-7xl lg:text-[88px] leading-tight"
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
                className="text-brand font-medium text-lg w-full py-3"
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
                  className="flex-1 px-6 py-3 rounded-full border-2 border-card-border bg-warm-white text-base placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand focus:bg-white transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  className="bg-brand hover:bg-brand-hover text-white font-semibold text-base px-8 py-3 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-brand-glow inline-flex items-center gap-3 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Save my spot
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </>
            )}
          </motion.form>

          <motion.p
            className="text-muted text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We&apos;ll email you when we launch. That&apos;s it.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-6 text-sm text-espresso/45">
          <a
            href="/privacy-policy"
            className="underline underline-offset-4 hover:text-espresso transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="underline underline-offset-4 hover:text-espresso transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
        <p className="text-espresso/35 text-sm">
          &copy; 2025, Lunchd by APT53. All rights reserved.
        </p>
      </div>
    </section>
  );
}
