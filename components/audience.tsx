import React from "react";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import {
  Award,
  Building2,
  Code,
  Cog,
  FileCode,
  FileText,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Rocket,
  Wrench,
} from "lucide-react";
import IconWrapper from "./ui/icon-wrapper";

const audience = () => {
  return (
    <div className="my-20 max-w-5xl mx-auto">
      <div className="space-y-3 mb-20">
        <IconWrapper size="md" cyan>
          <Rocket />
        </IconWrapper>
        <h2 className="text-4xl font-bold text-center font-geist-sans">
          Built For EveryOne
        </h2>
        <AnimatedShinyText className="font-geist-mono text-center block max-w-[70%] ">
          Whether you're a student looking for your final year project or a
          startup building your MVP, we've got you covered.
        </AnimatedShinyText>
      </div>
      <div className="grid grid-cols-2 max-w-4xl  gap-5 mx-auto h-120">
        {CONTENT.map((item) => {
          return (
            <div
              className="bg-zinc-900 border-zinc-800 rounded-xl p-2 "
              key={item.heading}
            >
              <div className="w-full h-full rounded-lg shadow-xl bg-black flex flex-col gap-2 items-start p-4">
                <IconWrapper size="md">{<item.Icon />}</IconWrapper>
                <h2 className="text-2xl font-semibold font-geist-sans">
                  {item.heading}
                </h2>
                <AnimatedShinyText className="font-geist-mono">
                  {item.sub_heading}
                </AnimatedShinyText>
                <ul className="mt-5 space-y-1.5">
                  {item.points.map((pt) => {
                    return (
                      <li key={pt.text} className="flex items-center gap-2">
                        <IconWrapper perspective={false} size="xs">
                          <pt.Icon className="size-4" />
                        </IconWrapper>
                        {pt.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default audience;

const CONTENT: {
  Icon: typeof GraduationCap;
  heading: string;
  sub_heading: string;
  points: { Icon: typeof GraduationCap; text: string }[];
}[] = [
  {
    Icon: GraduationCap,
    heading: "For Students",
    sub_heading:
      "Get academic projects that help you learn, build your portfolio,and ace your presentations.",
    points: [
      { Icon: FileCode, text: "Final Year Projects" },
      { Icon: FileText, text: "Mini Projects" },
      { Icon: Award, text: "Resume Projects" },
      { Icon: FileText, text: "Viva-Ready Documentation" },
      { Icon: Wrench, text: "Custom Feature Requests" },
    ],
  },
  {
    Icon: Building2,
    heading: "For Clients",
    sub_heading:
      "Get professional solutions for your business without the agency price tag.",
    points: [
      { Icon: Globe, text: "Business Websites" },
      { Icon: FileText, text: "Landing Pages" },
      { Icon: LayoutDashboard, text: "Dashboards" },
      { Icon: Cog, text: "Automation Tools" },
      { Icon: Rocket, text: "Startup MVPs" },
    ],
  },
];
