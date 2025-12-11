"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, Code, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Button } from "./ui/button";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = id !== "home" ? -80 : -150;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  }
};
const Navbar = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const navItems = [
    <Button
      key={"home"}
      variant={"link"}
      onClick={() => {
        scrollToSection("home");
        isMobile ? setOpen(false) : null;
      }}
    >
      Home
    </Button>,
    <Button
      key={"about"}
      variant={"link"}
      onClick={() => {
        scrollToSection("about");
        isMobile ? setOpen(false) : null;
      }}
      className="p-0 text-white text-lg md:text-sm text-center"
    >
      About
    </Button>,
    <Button
      key={"services"}
      variant={"link"}
      onClick={() => {
        scrollToSection("services");
        isMobile ? setOpen(false) : null;
      }}
      className="p-0 text-white text-lg md:text-sm text-center"
    >
      Services
    </Button>,

    <Button
      key={"why-us"}
      variant={"link"}
      className="p-0 text-white text-lg md:text-sm text-center"
      onClick={() => {
        scrollToSection("why-us");
        isMobile ? setOpen(false) : null;
      }}
    >
      Why Us
    </Button>,
    <Button
      key={"contact"}
      variant={"link"}
      onClick={() => {
        scrollToSection("contact");
        isMobile ? setOpen(false) : null;
      }}
      className="p-0 text-white text-lg md:text-sm text-center"
    >
      Contact
    </Button>,
  ];

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 70) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <div>
      <header className=" fixed top-2 w-full z-50 mx-auto max-w-6xl font-geist-mono">
        <motion.div
          initial={{
            maxWidth: isMobile ? "100%" : "72rem",
          }}
          animate={{
            maxWidth: isMobile ? "90%" : visible ? "64rem" : "72rem",
          }}
          transition={{
            duration: 0.5,
          }}
          ref={ref}
          className={`container overflow-hidden  bg-transparent rounded-xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-[90%] lg:max-w-6xl  relative  ${
            visible &&
            "backdrop-blur-lg border supports-[backdrop-filter]:bg-background/20"
          }`}
        >
          <div
            className="flex items-center space-x-0 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/logo.png"}
              width={40}
              height={60}
              alt="logo"
              className="invert"
            />
            <span className="text-xl font- text-white bg-clip-text">
              Project Hub
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems}
          </nav>
          <Button
            className="cursor-pointer"
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Contact Us
          </Button>
          <div className="md:hidden flex justify-center items-center gap-2 relative">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                        <Code className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-xl font- text-white bg-clip-text">
                        GitFolio
                      </span>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <AnimatedShinyText>Navigation Menu</AnimatedShinyText>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 justify-center items-center">
                  {navItems}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default Navbar;
