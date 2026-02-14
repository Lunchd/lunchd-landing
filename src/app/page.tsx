"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import ScrollTransition from "@/components/ScrollTransition";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <main
        className={`${loaderDone ? "" : "overflow-hidden max-h-screen"}`}
      >
        <Hero />
        <ScrollTransition />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
