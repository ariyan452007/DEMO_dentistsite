"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Visit Our Clinic
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-slate-50 rounded-[3rem] p-4 md:p-8 border border-slate-100">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Clinic Address</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  123 Elite Avenue, Premium Med District,<br />
                  Metropolis, NY 10001
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Call Us</h4>
                <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
                <p className="text-slate-600 text-sm">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Working Hours</h4>
                <p className="text-slate-600 text-sm">Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p className="text-slate-600 text-sm">Sat - Sun: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all flex items-center justify-center gap-3 font-bold text-lg group"
            >
              <MessageSquare className="group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map Image/Placeholder */}
          <div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden min-h-[400px] border border-slate-200">
             {/* In a real app, you would use an iframe Google Map here. Using a styled placeholder for the demo to look premium */}
             <div className="absolute inset-0 bg-slate-200">
                {/* Fake Map Image */}
                <Image 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Location Map" 
                  fill
                  className="object-cover opacity-80 mix-blend-multiply"
                />
             </div>
             
             {/* Map Pin Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-white px-4 py-2 rounded-full shadow-lg font-bold text-slate-800 text-sm mb-2 whitespace-nowrap">
                  SmileCraft Dental Studio
                </div>
                <div className="w-12 h-12 bg-primary rounded-full shadow-xl flex items-center justify-center text-white relative">
                  <MapPin size={24} />
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
