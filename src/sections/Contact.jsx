import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { business } from "../data/business";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase mb-4 border border-gold/20"
          >
            Get In Touch
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            <span className="gold-gradient">Contact</span> Us
          </h2>
          <p className="text-cream/50 text-sm sm:text-base font-body mt-4 max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-gold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:+91${business.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-body uppercase tracking-wider">Phone</p>
                    <p className="text-cream font-body text-sm sm:text-base font-medium">
                      +91 {business.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-body uppercase tracking-wider">Location</p>
                    <p className="text-cream font-body text-sm sm:text-base font-medium">
                      {business.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-body uppercase tracking-wider">Hours</p>
                      <p className="text-cream font-body text-sm sm:text-base font-medium">
                        {business.workingHours}
                      </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`tel:+91${business.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold text-dark-maroon font-body font-semibold text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
              >
                <Phone size={16} />
                Call Now
              </motion.a>

              <motion.a
                href={`https://wa.me/91${business.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-body font-semibold text-sm hover:bg-green-500/20 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="font-heading text-xl font-semibold text-gold mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/10 text-cream placeholder-cream/30 font-body text-sm focus:outline-none focus:border-gold/40 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/10 text-cream placeholder-cream/30 font-body text-sm focus:outline-none focus:border-gold/40 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/10 text-cream placeholder-cream/30 font-body text-sm focus:outline-none focus:border-gold/40 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold text-dark-maroon font-body font-semibold text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
