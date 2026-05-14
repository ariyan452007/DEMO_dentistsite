"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

const cases = [
  {
    id: 1,
    title: "Full Mouth Reconstruction",
    before: "https://images.unsplash.com/photo-1598256989800-fea5f6c8c494?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // placeholder
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // placeholder
  },
  {
    id: 2,
    title: "Veneers & Whitening",
    before: "https://images.unsplash.com/photo-1598256989800-fea5f6c8c494?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Invisalign Treatment",
    before: "https://images.unsplash.com/photo-1598256989800-fea5f6c8c494?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  }
];

export default function BeforeAfterGallery() {
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({
    1: 50, 2: 50, 3: 50
  });

  const handleSliderChange = (id: number, value: number) => {
    setSliderPositions(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light font-bold tracking-wider uppercase text-sm mb-3"
          >
            Smile Gallery
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Life-Changing Transformations
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-3xl p-4 border border-slate-700"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none group">
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <Image src={item.after} alt="After" fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    After
                  </div>
                </div>

                {/* Before Image (Clipped) */}
                <div 
                  className="absolute inset-0 border-r-2 border-white"
                  style={{ clipPath: `inset(0 ${100 - sliderPositions[item.id]}% 0 0)` }}
                >
                  <Image src={item.before} alt="Before" fill className="object-cover grayscale" />
                  <div className="absolute top-4 left-4 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    Before
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center pointer-events-none group-hover:bg-primary-light transition-colors"
                  style={{ left: `calc(${sliderPositions[item.id]}% - 2px)` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-primary pointer-events-auto hover:scale-110 transition-transform">
                    <MoveHorizontal size={16} />
                  </div>
                </div>

                {/* Invisible Range Input for accessibility and easy drag */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPositions[item.id]}
                  onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
              </div>
              <h4 className="text-xl font-semibold text-center mt-6 mb-2">{item.title}</h4>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3 rounded-full font-medium border border-slate-600 hover:bg-slate-800 transition-colors">
            View All Cases
          </a>
        </div>
      </div>
    </section>
  );
}
