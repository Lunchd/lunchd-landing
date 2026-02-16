"use client";

import { motion } from "motion/react";

export default function Footer() {
  const maskStyle = {
    WebkitMaskImage: "url('/Union.svg')",
    maskImage: "url('/Union.svg')",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  } as const;

  return (
    <motion.footer
      className="bg-white overflow-hidden px-2 pb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full aspect-[130/40]">
        <div className="h-full w-full bg-brand" style={maskStyle} />
      </div>
    </motion.footer>
  );
}
