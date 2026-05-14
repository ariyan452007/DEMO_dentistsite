"use client";

import { motion } from "framer-motion";
import { 
  Smile, 
  Syringe, 
  Sparkles, 
  Stethoscope, 
  ActivitySquare, 
  Baby, 
  HeartPulse,
  Activity,
  AlertCircle
} from "lucide-react";

const services = [
  {
    title: "Root Canal Treatment",
    description: "Painless RCT procedures using advanced endodontic technology.",
    icon: <ActivitySquare size={32} />,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth looking and feeling natural.",
    icon: <Syringe size={32} />,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "Teeth Whitening",
    description: "Professional laser whitening for a bright, confident smile.",
    icon: <Sparkles size={32} />,
    color: "from-amber-400 to-amber-600"
  },
  {
    title: "Invisalign & Braces",
    description: "Clear aligners and modern braces for perfect teeth alignment.",
    icon: <Smile size={32} />,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Smile Makeover",
    description: "Customized cosmetic procedures to design your dream smile.",
    icon: <Stethoscope size={32} />,
    color: "from-rose-400 to-rose-600"
  },
  {
    title: "Kids Dentistry",
    description: "Gentle and friendly dental care tailored specially for children.",
    icon: <Baby size={32} />,
    color: "from-teal-400 to-teal-600"
  },
  {
    title: "Gum Treatment",
    description: "Advanced periodontal therapy to ensure healthy gums.",
    icon: <HeartPulse size={32} />,
    color: "from-fuchsia-400 to-fuchsia-600"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and shaping to perfect your teeth aesthetics.",
    icon: <Activity size={32} />,
    color: "from-violet-400 to-violet-600"
  },
  {
    title: "Emergency Care",
    description: "24/7 immediate support for toothaches and dental emergencies.",
    icon: <AlertCircle size={32} />,
    color: "from-red-400 to-red-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Comprehensive Dental Care
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            From routine check-ups to complex procedures, we offer a full spectrum of premium dental treatments tailored to your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group relative overflow-hidden"
            >
              {/* Gradient Accent on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors group/link">
                Learn More 
                <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
