import { FocusCards } from "./ui/focus-cards";
import IconWrapper from "./ui/icon-wrapper";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Projector } from 'lucide-react';

export default function FocusCardDemo() {
  const cards = [
    {
      title: "GitFolio",
      src: "./gitfolio.png",
      description: "A GitFolio turns your GitHub profile into a stunning portfolio website.",
      url: "https://www.gitfolio.in/"
    },
    {
      title: "Vengence UI",
      src: "./vengenceui.png",
      description: "A curated collection of beautifully crafted React components.",
      url: "https://www.vengenceui.com/"
    },
    {
      title: "Imagica",
      src: "./imagika.png",
      description: "It turns your photo into the look you love, without any guesswork.",
      url: "https://imagika.app/"
    },
    {
      title: "LaunchIdea",
      src: "./launchidea.png",
      description: "Turn your concept into a live, interactive product within weeks using AI-powered development.",
      url: "https://www.launchidea.today/"
    },
    {
      title: "Vision Labs",
      src: "./visionlab.png",
      description: "From startups to enterprises,Vision Labs help brands bring their ideas to life with creativity and precision.",
      url: "https://vision-agency.vercel.app/"
    },
    {
      title: "Nail Art AI",
      src: "./nailartai.png",
      description: "An e-commerce platform.That use AI to instantly preview hundreds of stunning nail arts on your own hands.",
      url: "https://nailartai.app/"
    },
  ];

  return(
    <div>
      <div className="flex justify-center items-center gap-2 m-1">
        <IconWrapper size="md" cyan>
          <Projector />
        </IconWrapper>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground font-geist-sans">
          Experience
        </h2>
      </div>
      <AnimatedShinyText className="font-geist-mono text-center block sm:max-w-[60%] text-sm sm:text-base p-10">
        Each project here reflects our work, experience, and learning.
      </AnimatedShinyText>
      <FocusCards cards={cards} />
    </div>
  )
}