"use client";
import { motion } from "motion/react";
import {
  IndianRupee,
  Code2,
  Zap,
  Headphones,
  Briefcase,
  Shield,
  ShieldQuestionMark,
} from "lucide-react";
import IconWrapper from "./ui/icon-wrapper";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

const features = [
  {
    icon: IndianRupee,
    title: "Student-Friendly Pricing",
    description: "Affordable rates designed for students on a budget",
  },
  {
    icon: Code2,
    title: "Original & Customizable",
    description: "Every project is unique and can be tailored to your needs",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your project delivered within the promised timeline",
  },
  {
    icon: Headphones,
    title: "Personal Support",
    description: "Direct communication with developers, not bots",
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description: "Industry-standard code that prepares you for the job market",
  },
  {
    icon: Shield,
    title: "Trusted by Many",
    description: "500+ students and startups have chosen us",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20" id="why-us">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <IconWrapper size="md" cyan>
            <ShieldQuestionMark className="size-8" />
          </IconWrapper>
          <h2 className="text-3xl md:text-4xl font-bold ">
            Why Choose{" "}
            <span className="text-gradient font-geist-sans">Project Hub?</span>
          </h2>
          <AnimatedShinyText className="font-geist-mono text-center block max-w-[60%]">
            We're not just another project seller. We're your partner in
            success.
          </AnimatedShinyText>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <IconWrapper size="md" perspective={false}>
                <feature.icon className="w-8 h-8 text-primary" />
              </IconWrapper>
              <h4 className="font-bold text-lg  mt-2 font-geist-sans">{feature.title}</h4>
              <p className="text-muted-foreground text-sm font-geist-mono">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
