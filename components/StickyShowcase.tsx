"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StickyShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visual1Ref = useRef<HTMLDivElement>(null);
  const visual2Ref = useRef<HTMLDivElement>(null);
  const visual3Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".sticky-content",
        pinSpacing: false,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0% top",
          end: "35% top",
          scrub: 1,
        }
      })
      .to(visual1Ref.current, { opacity: 0, scale: 0.9, duration: 0.5 })
      .to(text1Ref.current, { opacity: 0, y: -20, duration: 0.5 }, 0);

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% top",
          end: "35% top",
          scrub: 1,
        }
      })
      .fromTo(visual2Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 })
      .fromTo(text2Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0);

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "60% top",
          end: "65% top",
          scrub: 1,
        }
      })
      .to(visual2Ref.current, { opacity: 0, scale: 0.9 })
      .to(text2Ref.current, { opacity: 0, y: -20 }, 0);

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "60% top",
          end: "65% top",
          scrub: 1,
        }
      })
      .fromTo(visual3Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 })
      .fromTo(text3Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-white to-gray-50 h-[400vh]">
      
      <div className="sticky-content sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            <div className="relative h-[200px] lg:min-h-[400px] w-full flex items-center justify-center lg:block">
              
              <div ref={text1Ref} className="absolute inset-0 group cursor-default flex flex-col justify-center lg:block text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-4 lg:mb-6 group-hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0">
                  <TrendingUp className="w-4 h-4 text-yellow-600 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-bold text-yellow-700">ӨНДӨР ӨГӨӨЖ</span>
                </div>
                <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                  Жилийн 19.2%
                </h2>
                <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 group-hover:text-gray-900 transition-colors duration-300">
                  Зах зээлийн бусад бүтээгдэхүүнээс илүү өгөөжтэй, улирал бүрийн тогтмол төлбөр.
                </p>
              </div>

              <div ref={text2Ref} className="absolute inset-0 opacity-0 group cursor-default flex flex-col justify-center lg:block text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-4 lg:mb-6 group-hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0">
                  <ShieldCheck className="w-4 h-4 text-yellow-600 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-bold text-yellow-700">НАЙДВАРТАЙ & БАТАЛГААТАЙ</span>
                </div>
                <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                  Давхар барьцаатай
                </h2>
                <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 group-hover:text-gray-900 transition-colors duration-300">
                  14.0 тэрбум ₮-ийн гаргалтыг 15.8 тэрбум ₮-ийн хөрөнгөөр баталгаажуулсан. 100% чанартай зээлийн багц.
                </p>
              </div>

              <div ref={text3Ref} className="absolute inset-0 opacity-0 group cursor-default flex flex-col justify-center lg:block text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-4 lg:mb-6 group-hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0">
                  <Globe className="w-4 h-4 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-bold text-orange-700">БҮГДЭД НЭЭЛТТЭЙ</span>
                </div>
                <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  Өнөөдөр эхлэх
                </h2>
                <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 group-hover:text-gray-900 transition-colors duration-300">
                  Үнэт цаасны бирж дээр арилжаалагддаг. Ердөө <span className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">100,000 төгрөгөөр</span>.
                </p>
              </div>

            </div>

            <div className="relative aspect-square w-full max-w-[300px] lg:max-w-2xl mx-auto group perspective-1000">
              
              <div ref={visual1Ref} className="absolute inset-0 transition-transform duration-500 hover:scale-[1.02] hover:rotate-1 cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-[2rem] lg:rounded-[3rem] w-full h-full flex items-center justify-center text-white shadow-2xl shadow-yellow-500/30 relative overflow-hidden group-hover:shadow-yellow-500/50 transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="text-center relative z-10">
                    <div className="flex items-start justify-center gap-2 lg:gap-3 mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-8xl lg:text-[12rem] font-bold tracking-tighter leading-none">19.2</span>
                      <span className="text-5xl lg:text-7xl font-bold mt-4">%</span>
                    </div>
                    <p className="text-xl lg:text-3xl font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-500">Жилийн өгөөж</p>
                    <div className="mt-6 lg:mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 lg:px-6 py-2 lg:py-3 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="font-semibold text-sm lg:text-lg">Улирал бүр төлөгдөнө</span>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={visual2Ref} className="absolute inset-0 opacity-0 transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 cursor-pointer">
                <div className="bg-white rounded-[2rem] lg:rounded-[3rem] w-full h-full flex items-center justify-center shadow-2xl border-2 border-gray-100 p-8 lg:p-16 relative overflow-hidden group-hover:border-yellow-200 transition-colors duration-500">
                  <div className="absolute top-6 left-6 lg:top-8 lg:left-8 group-hover:scale-110 transition-transform duration-300 origin-top-left">
                    <div className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Барьцааны харьцаа</div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">113%</div>
                  </div>
                  <div className="flex items-end justify-center gap-6 lg:gap-16 w-full h-full pt-12">
                    <div className="text-center flex-1 group/bar h-full flex flex-col justify-end">
                      <div className="bg-gradient-to-t from-gray-300 to-gray-200 h-[60%] w-full rounded-t-[1.5rem] lg:rounded-t-[2rem] mb-4 lg:mb-6 relative group-hover/bar:scale-y-105 transition-transform duration-500 origin-bottom">
                        <div className="absolute -top-10 lg:-top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 lg:px-4 lg:py-2 rounded-xl shadow-lg border border-gray-200 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">
                          <div className="text-[10px] lg:text-xs font-bold text-gray-500">САНХҮҮЖИЛТ</div>
                        </div>
                      </div>
                      <div className="text-2xl lg:text-4xl font-bold text-gray-900">14.0 тэрбум</div>
                      <div className="text-xs lg:text-sm text-gray-500 font-medium mt-1">Төгрөг</div>
                    </div>
                    <div className="text-center flex-1 group/bar h-full flex flex-col justify-end">
                      <div className="bg-gradient-to-t from-yellow-500 via-yellow-400 to-yellow-300 h-[80%] w-full rounded-t-[1.5rem] lg:rounded-t-[2rem] shadow-2xl shadow-yellow-500/40 mb-4 lg:mb-6 relative group-hover/bar:scale-y-105 transition-transform duration-500 origin-bottom">
                        <div className="absolute -top-10 lg:-top-12 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-xl shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">
                          <div className="text-[10px] lg:text-xs font-bold">БАРЬЦАА</div>
                        </div>
                      </div>
                      <div className="text-2xl lg:text-4xl font-bold text-yellow-600">15.8 тэрбум</div>
                      <div className="text-xs lg:text-sm text-yellow-600 font-medium mt-1">Төгрөг</div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={visual3Ref} className="absolute inset-0 opacity-0 transition-transform duration-500 hover:scale-[1.02] hover:rotate-1 cursor-pointer">
                <div className="bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 rounded-[2rem] lg:rounded-[3rem] w-full h-full flex flex-col items-center justify-center shadow-2xl text-white relative overflow-hidden group-hover:shadow-orange-500/50 transition-shadow duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.3),rgba(255,255,255,0))]"></div>
                  <Globe className="w-32 h-32 lg:w-56 lg:h-56 stroke-[0.5] mb-6 lg:mb-12 relative z-10 opacity-90 group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="bg-white/15 backdrop-blur-xl px-6 lg:px-10 py-4 lg:py-6 rounded-2xl lg:rounded-3xl border-2 border-white/20 relative z-10 group-hover:bg-white/25 transition-colors duration-300">
                    <div className="text-center">
                      <div className="text-xs lg:text-sm text-white/70 font-bold uppercase tracking-wider mb-2 lg:mb-3">Хамгийн бага хөрөнгө оруулалт</div>
                      <div className="text-4xl lg:text-7xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">100,000</div>
                      <div className="text-lg lg:text-2xl font-semibold text-white/90">Төгрөг</div>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-8 text-center relative z-10">
                    <p className="text-white/80 text-sm lg:text-lg font-medium group-hover:text-white transition-colors">Нээлттэй арилжаалагддаг · Бүрэн ил тод</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyShowcase;
