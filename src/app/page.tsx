"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";


export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <GrainOverlay />
      <main
        className={`${loaderDone ? "" : "overflow-hidden max-h-screen"}`}
      >
        <Hero />
        <StorySection />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
