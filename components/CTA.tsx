"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(ctaRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div
          ref={ctaRef}
          className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Хөрөнгө оруулахад бэлэн үү?</h2>
            <p className="text-2xl mb-10 text-white/95 max-w-2xl mx-auto">
              Хязгаарлагдмал тоотой. Арилжаа эхлэх: <span className="font-bold">2025 оны 6-р сарын 25</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => window.open('https://trader.apex.mn', '_blank')}
                className="group px-12 py-5 rounded-full bg-white text-yellow-600 font-bold text-xl hover:bg-gray-100 transition-all hover:scale-110 active:scale-95 shadow-2xl"
              >
                <span className="inline-block group-hover:scale-110 transition-transform">Захиалах</span>
              </button>
              <a 
                href="tel:75107500"
                className="flex items-center gap-3 text-white px-10 py-5 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm border-2 border-white/20"
              >
                <Phone className="w-6 h-6" /> 
                <span className="font-bold text-xl">7510-7500</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
