"use client";
import { motion } from "motion/react";
import {
  Globe,
  Layers,
  Cpu,
  Brain,
  Code2,
  Wifi,
  Layout,
  Palette,
  Rocket,
  LayoutDashboard,
  Cog,
  Smartphone,
  Wrench,
} from "lucide-react";
import IconWrapper from "./ui/icon-wrapper";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

const studentServices = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications",
  },
  {
    icon: Layers,
    title: "MERN Stack",
    description: "MongoDB, Express, React, Node.js",
  },
  {
    icon: Code2,
    title: "Next.js Projects",
    description: "Modern React framework",
  },
  {
    icon: Brain,
    title: "Python / AI / ML",
    description: "Machine learning & AI projects",
  },
  { icon: Cpu, title: "Java Projects", description: "Enterprise applications" },
  {
    icon: Wifi,
    title: "IoT & Automation",
    description: "Hardware integration projects",
  },
];

const clientServices = [
  {
    icon: Layout,
    title: "Website Development",
    description: "Custom business websites",
  },
  {
    icon: Palette,
    title: "Portfolio Websites",
    description: "Showcase your work",
  },
  { icon: Rocket, title: "Startup MVPs", description: "Launch your idea fast" },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Data management tools",
  },
  {
    icon: Cog,
    title: "Software Automation",
    description: "Streamline your workflow",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Works on all devices",
  },
];

export const Services = () => {
  return (
    <section className="py-10 md:py-20" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <IconWrapper size="md" cyan>
            <Wrench />
          </IconWrapper>
          <h2 className="text-2xl md:text-4xl font-bold font-geist-sans">
            Our Services
          </h2>
          <AnimatedShinyText className="font-geist-mono text-center block sm:max-w-[60%] text-sm md:text-base">
            From academic projects to production-ready software, we deliver
            quality at every level.
          </AnimatedShinyText>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto ">
          {/* Student Services */}
          <div className="font-geist-mono">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-8 flex items-center gap-2"
            >
              <span className="w-8 h-1 bg-primary rounded-full" />
              Student Projects
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {studentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-4 py-6 rounded-xl hover:bg-card/60 border hover:border-primary/30 hover:shadow-card transition-all duration-300 flex flex-col items-start"
                >
                  <IconWrapper size="sm" perspective={false}>
                    <service.icon className="w-6 h-6 text-primary " />
                  </IconWrapper>

                  <h4 className="font-semibold text-lg mb- mt-1">
                    {service.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Client Services */}
          <div className="font-geist-mono">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl font-bold  mb-4 sm:mb-8 flex items-center gap-2"
            >
              <span className="w-8 h-1 bg-white rounded-full" />
              Client Services
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {clientServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-4 py-6 rounded-xl border hover:border-primary/30 hover:shadow-card transition-all duration-300 flex flex-col items-start hover:bg-card/60 "
                >
                  <IconWrapper size="sm" perspective={false}>
                    <service.icon className="w-6 h-6 text-primary " />
                  </IconWrapper>
                  <h4 className="font-semibold text-lg mt-1">
                    {service.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
