"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShieldCheck, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxBenefits = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { y: 100, opacity: 0, rotateY: -20 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            }
          }
        );

        gsap.to(card, {
          y: -30,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            }
        });
      }
    });
  }, []);

  const benefits = [
    { icon: Globe, title: "Нээлттэй арилжаалагддаг", desc: "Үнэт цаасны бирж дээр бүрэн ил тод" },
    { icon: ShieldCheck, title: "Босго бага", desc: "Ердөө 100,000 төгрөгөөр эхлэх" },
    { icon: BarChart3, title: "Өндөр хөрвөх чадвар", desc: "Зах зээлд чөлөөтэй арилжаалах боломж" },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Яагаад биднийг сонгох вэ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-yellow-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-lg">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxBenefits;
