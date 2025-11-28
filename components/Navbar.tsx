"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-8 w-8">
            <Image src="/omni-logo.png" alt="Omni" fill className="object-contain" />
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="relative h-6 w-20">
            <Image src="/apex-logo.png" alt="Apex" fill className="object-contain" />
          </div>
        </div>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group px-6 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20"
        >
          <span className="inline-block group-hover:scale-110 transition-transform">Хөрөнгө оруулах</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
