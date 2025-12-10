import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Button } from "./ui/button";
import { AvatarCircles } from "./ui/avatar-circles";

const hero = () => {
  return (
    <div className="space-y-6 mt-40">
      <h1 className="text-7xl  font-semibold text-center font-geist-sans">
        Affordable Real-World Projects for Businesses & Students{" "}
      </h1>
      <AnimatedShinyText className="text-lg font-medium text-center block max-w-[70%] font-geist-mono">
        We build ready-to-use academic and professional projects for students,
        startups, and small businesses—at prices everyone can afford.
      </AnimatedShinyText>
      <div className="w-full flex justify-center gap-2 font-geist-mono ">
        <Button className="text-md" size={"lg"}>
          Get Started
        </Button>
      </div>
      <div className="w-full flex justify-center items-center gap-2 flex-col mt-25">
        <AvatarCircles avatarUrls={avatars} numPeople={99} />
        <AnimatedShinyText>
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
