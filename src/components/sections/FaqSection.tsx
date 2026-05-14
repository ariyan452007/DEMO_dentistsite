"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is root canal treatment painful?",
    answer: "Not at all. With our advanced anesthesia and modern endodontic technology, root canal treatments are virtually painless. Most patients compare the experience to getting a routine filling."
  },
  {
    question: "How long does teeth whitening last?",
    answer: "Professional teeth whitening can last from 1 to 3 years, depending on your lifestyle habits (like drinking coffee or smoking) and oral hygiene. We also provide touch-up kits to help maintain your bright smile."
  },
  {
    question: "Do you offer emergency dental appointments?",
    answer: "Yes, we reserve dedicated slots every day for dental emergencies. If you're experiencing severe pain, swelling, or have a broken tooth, please call us immediately and we will see you as soon as possible."
  },
  {
    question: "Are clear aligners better than traditional braces?",
    answer: "Clear aligners (like Invisalign) offer a virtually invisible, comfortable, and removable alternative to traditional braces. However, the best option depends on the complexity of your case. We provide a free digital scan to determine the best treatment for you."
  },
  {
    question: "Is dental implant treatment safe?",
    answer: "Yes, dental implants have a success rate of over 95% and are considered the gold standard for replacing missing teeth. Our board-certified implantologists use 3D guided surgery for maximum precision and safety."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Common Questions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Frequently Asked Questions
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-800 pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
