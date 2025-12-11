"use client"
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Button } from "./ui/button";
import { AvatarCircles } from "./ui/avatar-circles";
import { scrollToSection } from "./navbar";
import { useIsMobile } from "@/hooks/use-mobile";


const hero = () => {
  const ismobile = useIsMobile()
  return (
    <div className="space-y-4 md:space-y-6 mt-30 md:mt-40" id="home">
      <h1 className="text-3xl sm:text-4xl lg:text-7xl  font-semibold text-center font-geist-sans">
        Affordable Real-World Projects for Businesses & Students{" "}
      </h1>
      <AnimatedShinyText className="text-sm md:text-lg font-medium text-center block sm:max-w-[70%] font-geist-mono">
        We build ready-to-use academic and professional projects for students,
        startups, and small businesses—at prices everyone can afford.
      </AnimatedShinyText>
      <div className="w-full flex justify-center gap-2 font-geist-mono ">
        <Button
          className="sm:text-md cursor-pointer"
          size={ismobile ? "default" : "lg"}
          onClick={() => scrollToSection("contact")}
        >
          Get Started
        </Button>
      </div>
      <div className="w-full flex justify-center items-center gap-2 flex-col mt-25">
        <AvatarCircles avatarUrls={avatars} numPeople={99} />
        <AnimatedShinyText className="text-center text-sm sm:text-base">
          {" "}
          Trusted by 99+ students, businesses, and startups
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default hero;

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];
