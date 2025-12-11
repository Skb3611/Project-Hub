import React from "react";
import { CodeIcon, FileIcon, Atom, FileBraces, ScrollText } from "lucide-react";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { CountingNumber } from "./animate-ui/primitives/texts/counting-number";
import IconWrapper from "./ui/icon-wrapper";
const stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 my-20 md:my-30 max-w-5xl mx-auto">
      {STATS.map(({ heading, subheading }) => (
        <Card key={subheading} heading={heading} subheading={subheading} />
      ))}
    </div>
  );
};

export default stats;

const Card = ({
  heading,
  subheading,
}: {
  heading: number | typeof Atom;
  subheading: string;
}) => {
  return (
    <div className="flex justify-center items-center border flex-col h-30 rounded-md gap-2 hover:bg-card/60 transition-all duration-300 hover:border-primary/30 ">
      <div className="text-2xl font-bold ">
        {typeof heading === "number" ? (
          <span className="flex items-center">
            <CountingNumber number={heading} inView />+
          </span>
        ) : (
          <IconWrapper size="sm">
            {React.createElement(heading, { size: 20 })}
          </IconWrapper>
        )}
      </div>
      <AnimatedShinyText className="text-sm text-gray-500 font-geist-mono text-center">
        {subheading}
      </AnimatedShinyText>
    </div>
  );
};

const STATS: { heading: number | typeof Atom; subheading: string }[] = [
  {
    heading: 100,
    subheading: "Projects Delivered",
  },
  {
    heading: FileBraces,
    subheading: "Sources Code Included",
  },
  {
    heading: ScrollText,
    subheading: "Full Documentation",
  },
  {
    heading: Atom,
    subheading: "Latest Tech",
  },
];
