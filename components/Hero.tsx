"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(badgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      )
      .fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      if (ctaRef.current) {
        const buttons = ctaRef.current.querySelectorAll('button');
        gsap.fromTo(buttons,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.4 }
        );
      }

      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-yellow-50/30 to-white px-6 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Гурав дахь амжилттай гаргалт</span>
          </div>
          
          <h1 ref={titleRef} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 tracking-tight text-yellow-600">
            Omni Asset 2
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Хөрөнгөөр баталгаажсан үнэт цаас <span className="text-yellow-600 font-bold">жилийн 19.2% өгөөж</span>, улирал бүрийн ногдол ашигтай
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/30"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform">Дэлгэрэнгүй</span>
            </button>
            <button 
              onClick={() => window.open('https://trader.apex.mn', '_blank')}
              className="px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg border-2 border-gray-200 transition-all hover:scale-105 active:scale-95"
            >
              Хөрөнгө оруулах
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
