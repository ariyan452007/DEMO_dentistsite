"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function DoctorProfile() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Doctor Image & Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-slate-50">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Sarah Jenkins" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-3xl font-bold text-white mb-1">Dr. Sarah Jenkins</h3>
                <p className="text-blue-200 font-medium text-lg">Lead Prosthodontist & Founder</p>
              </div>
            </div>

            {/* Floating Experience Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-12 -right-4 md:-right-8 glass p-6 rounded-2xl shadow-xl border border-white/40 max-w-[200px]"
            >
              <div className="text-4xl font-black text-primary mb-2">15+</div>
              <p className="text-sm font-bold text-slate-700">Years of Clinical Excellence</p>
            </motion.div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Meet The Expert</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">World-Class Care by a Renowned Specialist</h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Sarah Jenkins is a board-certified prosthodontist dedicated to creating beautiful, natural-looking smiles. With over 15 years of experience, she combines advanced digital dentistry with a gentle, patient-first approach.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Top Qualifications</h4>
                  <p className="text-slate-600">DDS from Harvard School of Dental Medicine. Specialized training in advanced restorative techniques.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Recognized Excellence</h4>
                  <p className="text-slate-600">Voted &quot;Top Dentist&quot; for 5 consecutive years. Fellow of the American College of Prosthodontists.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
              {['Digital Smile Design', 'Full Mouth Rehab', 'Implant Surgery', 'Painless Injections'].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <CheckCircle className="text-cyan-500" size={20} />
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
