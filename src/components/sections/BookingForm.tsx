"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Phone, Mail, FileText, ChevronDown, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Book Appointment</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready for your <br/><span className="text-gradient">Dream Smile?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Schedule your visit today. Our team of specialists is ready to provide you with a comprehensive evaluation and personalized treatment plan.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Flexible Timing</h4>
                  <p className="text-slate-500 text-sm">Open weekends & evenings</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-cyan-50 text-primary flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Instant Confirmation</h4>
                  <p className="text-slate-500 text-sm">No waiting in queues</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Booking Requested!</h4>
                <p className="text-slate-600">Our team will contact you shortly to confirm your appointment time.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="text" placeholder="Full Name" required className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="tel" placeholder="Phone Number" required className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="email" placeholder="Email Address" required className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="date" required className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600" />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"><StethoscopeIcon /></div>
                    <select required defaultValue="" className="w-full pl-12 pr-10 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-slate-600 cursor-pointer">
                      <option value="" disabled>Select Treatment</option>
                      <option value="general">General Checkup</option>
                      <option value="cleaning">Teeth Cleaning</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="implants">Dental Implants</option>
                      <option value="rct">Root Canal</option>
                      <option value="braces">Braces/Invisalign</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="relative">
                  <FileText className="absolute left-4 top-4 text-slate-400" size={20} />
                  <textarea placeholder="Message or specific concerns (optional)" rows={3} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Request Appointment
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StethoscopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
      <circle cx="20" cy="10" r="2"/>
    </svg>
  );
}
