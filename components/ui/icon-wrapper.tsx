import React from "react";

const IconWrapper = ({
  children,
  size,
  perspective = true,
  cyan = false,
}: {
  children: React.ReactNode;
  size: "xs" | "sm" | "md";
  perspective?: boolean;
  cyan?:boolean
}) => {
  return (
    <div className={` ${perspective ? "perspective-[400] transform-3d" : ""}`}>
      <div
        className={`${
          size == "sm"
            ? "size-10 p-[3px]"
            : size == "md"
            ? "size-14 p-[4px]"
            : "size-8 p-[2px]"
        }  rounded-md bg-gradient-to-b from-neutral-800 to-neutral-950 mx-auto relative rotate-x-25 `}
      >
        <div className={`bg-charcoal rounded-[5px] h-full w-full relative z-20 flex justify-center items-center overflow-hidden bg-linear-to-b from-black to-black/60 ${cyan ? "text-cyan-500" : ""}`}>
          {children}
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-neutral-600 opacity-50 rounded-full blur-lg h-4 w-full mx-auto z-30"></div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-[60%] mx-auto"></div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-600 blur-sm to-transparent h-[8px] w-[60%] mx-auto"></div>
      </div>
    </div>
  );
};

export default IconWrapper;
