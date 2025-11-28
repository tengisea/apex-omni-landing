"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Clock, Calendar, ShieldCheck, BarChart3, Landmark } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Хөрөнгө оруулалтын онцлох зүйлс</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Орчин үеийн ухаалаг хөрөнгө оруулагчдад зориулав
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnimatedCard delay={0.1}>
            <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Жилийн өгөөж</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">19.2%</div>
              <p className="text-gray-600">Улирал бүрийн тогтмол өгөөж</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Хугацаа</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">24</div>
              <p className="text-gray-600">Сарын хугацаатай</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Төлбөр</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">Улирал бүр</div>
              <p className="text-gray-600">Тогтмол орлого</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Нийт хэмжээ</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">14.0 тэрбум</div>
              <p className="text-gray-600">Төгрөг</p>
            </div>
          </AnimatedCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard delay={0.5}>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <ShieldCheck className="w-16 h-16 mb-6 relative z-10" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Давхар барьцаатай</h3>
              <p className="text-white/90 text-lg mb-6 relative z-10">
                14.0 тэрбум ₮-ийн үнэт цаасыг 15.8 тэрбум ₮-ийн барьцаагаар хангасан. 100% чанартай зээлийн багц.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full relative z-10">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">Бага эрсдэлтэй хөрөнгө оруулалт</span>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.6}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <BarChart3 className="w-16 h-16 mb-6 relative z-10" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Татварын таатай нөхцөл</h3>
              <p className="text-white/90 text-lg mb-6 relative z-10">
                Татварын дараах өгөөж 18.24%. Биржийн бус бондоо илүү таатай нөхцөлтэй.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full relative z-10">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">Өгөөжийг нэмэгдүүлэх</span>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
