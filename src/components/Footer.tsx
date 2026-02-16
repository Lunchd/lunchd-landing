"use client";

import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <motion.footer
      className="bg-brand text-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-[210px] md:h-[245px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center overflow-hidden">
        <Logo className="h-[calc(100%-1rem)] md:h-[calc(100%-1.25rem)] w-auto" />
      </div>
    </motion.footer>
  );
}
