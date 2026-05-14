"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Clock, SmilePlus, HandHeart, CreditCard, Stethoscope, Video } from "lucide-react";

const features = [
  { icon: <HandHeart />, title: "Painless Procedures", desc: "Advanced anesthesia tech for zero pain." },
  { icon: <Cpu />, title: "Advanced Technology", desc: "3D scanners and laser dentistry." },
  { icon: <Video />, title: "Digital Smile Design", desc: "See your new smile before we start." },
  { icon: <Stethoscope />, title: "Experienced Specialists", desc: "Board-certified expert doctors." },
  { icon: <ShieldCheck />, title: "Hygienic Environment", desc: "Hospital-grade sterilization protocols." },
  { icon: <CreditCard />, title: "Affordable EMI Options", desc: "Flexible 0% interest payment plans." },
  { icon: <Clock />, title: "Emergency Support", desc: "Priority slots for dental emergencies." },
  { icon: <SmilePlus />, title: "Personalized Care", desc: "Treatments tailored specifically to you." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Setting a New Standard in Dentistry
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
