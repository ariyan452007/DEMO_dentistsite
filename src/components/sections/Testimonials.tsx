"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    text: "The most luxurious dental experience I've ever had. Dr. Jenkins and the team completely transformed my smile with veneers. The process was entirely painless and the results are stunning.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    text: "I used to have severe dental anxiety, but the environment at SmileCraft is so calming. Their use of advanced technology made my root canal quick and genuinely painless.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    text: "Got my Invisalign here. The digital smile design preview was mind-blowing! I could see exactly what my teeth would look like before we even started. Highly recommend.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    text: "Premium service from start to finish. The clinic feels like a 5-star hotel, and the staff's attention to detail is unmatched. Worth every penny for the quality of care.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-blue-50/50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Patient Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Don&apos;t Just Take Our Word For It
          </motion.h3>
        </div>

        {/* CSS Auto-scrolling Carousel */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee group-hover:pause whitespace-nowrap py-4">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx} 
                className="w-[350px] md:w-[450px] mx-4 whitespace-normal"
              >
                <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 relative h-full flex flex-col">
                  <Quote className="absolute top-6 right-6 text-blue-100" size={48} />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed flex-grow italic">
                    &quot;{t.text}&quot;
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">{t.name}</h5>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add custom CSS for marquee animation in globals.css later, but for now we can rely on Tailwind if configured or add it directly */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
