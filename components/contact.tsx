"use client";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import IconWrapper from "./ui/icon-wrapper";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

export const ContactSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <IconWrapper size="md" cyan>
            <Phone />
          </IconWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="text-primary font-geist-sans">Touch</span>
          </h2>
          <AnimatedShinyText className="font-geist-mono text-center block max-w-[60%]">
            Have a question or want to discuss your project? We'd love to hear
            from you.
          </AnimatedShinyText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="hover:bg-card/60 hover:border-primary/30 transition-all dura rounded-2xl p-6 shadow-lg border border-border text-center">
              <IconWrapper size="sm" perspective={false}>
                <Mail className="w-5 h-5 " />
              </IconWrapper>
              <h4 className="font-medium text-foreground mb-1 mt-2 font-geist-sans">
                Email Us
              </h4>
              <p className="text-muted-foreground text-sm font-geist-mono">
                projecthubbusiness @gmail.com
              </p>
            </div>

            <div className="hover:bg-card/60 hover:border-primary/30 transition-all dura rounded-2xl p-6 shadow-lg border border-border text-center">
              <IconWrapper size="sm" perspective={false}>
                <Phone className="w-5 h-5" />
              </IconWrapper>
              <h4 className="font-medium text-foreground mb-1 mt-2 font-geist-sans">
                Call or WhatsApp
              </h4>
              <p className="text-muted-foreground text-sm font-geist-mono">
                +91 7775858902
              </p>
              <p className="text-muted-foreground text-sm font-geist-mono">
                +91 7888124630
              </p>
            </div>

            <div className="hover:bg-card/60 hover:border-primary/30 transition-all dura rounded-2xl p-6 shadow-lg border border-border text-center ">
              <IconWrapper size="sm" perspective={false}>
                <MapPin className="w-5 h-5 " />
              </IconWrapper>
              <h4 className="font-medium text-foreground mt-2 mb-1 font-geist-sans">
                Location
              </h4>
              <p className="text-muted-foreground text-sm font-geist-mono">
                Pune, Maharashtra
              </p>
              <p className="text-muted-foreground text-sm font-geist-mono">
                India
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 text-center">
            <h4 className="font-semibold text-foreground mb-2">
              Quick Response Guaranteed
            </h4>
            <p className="text-sm text-muted-foreground">
              We understand the urgency of academic deadlines. Student inquiries
              are prioritized and typically answered within 2-4 hours during
              business hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
