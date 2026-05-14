"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Star, Shield, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -z-10" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100 font-medium text-sm mb-6 shadow-sm">
              <Star size={14} className="fill-primary" />
              <span>#1 Premium Dental Clinic</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              Advanced Dental Care for a <span className="text-gradient">Confident Smile</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Experience painless, state-of-the-art dentistry in a luxury environment. Your journey to a perfect smile begins here.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover-lift transition-all group"
              >
                Book Appointment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-md border border-slate-100 hover:shadow-lg hover-lift transition-all"
              >
                Free Consultation
              </a>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-foreground">5,000+</h4>
                  <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-primary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-foreground">10+ Years</h4>
                  <p className="text-sm text-slate-500 font-medium">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image & Floating Cards Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Placeholder (Using a generic professional URL or gradient placeholder since we don't have local assets) */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Premium Dental Care" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Trust Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -left-6 md:-left-12 glass p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Sterilized</p>
                <p className="text-xs text-slate-500">Equipment</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-6 md:-right-8 glass p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                <Star size={20} className="fill-cyan-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">4.9/5 Rating</p>
                <p className="text-xs text-slate-500">Google Reviews</p>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
