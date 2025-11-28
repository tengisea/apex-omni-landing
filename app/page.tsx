"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import StickyShowcase from "../components/StickyShowcase";
import ParallaxBenefits from "../components/ParallaxBenefits";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-yellow-200 selection:text-yellow-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <StickyShowcase />
      <ParallaxBenefits />
      <CTA />
      <Footer />
    </main>
  );
}
