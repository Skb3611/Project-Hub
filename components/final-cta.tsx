import React, { SVGProps } from "react";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { PulsatingButton } from "./ui/pulsating-button";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className=" relative flex flex-col justify-center items-center space-y-5 py-48 px-4 my-10">
      <div className="w-full h-full">
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 p-4 -rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.nextjs className="size-20" />}
            </span>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 rotate-z-20">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.tailwind className="size-15" />}
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-1/4 transform translate-x-1/2 p-4 rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">{<svgs.node className="size-15" />}</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 -rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.prisma className="size-15" />}
            </span>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.mongo className="size-15" />}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 p-4 -rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.cloud className="size-15" />}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.python className="size-15" />}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 p-4 rotate-z-25">
          <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
            <span className="text-xl">
              {<svgs.react className="size-15" />}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="size-25 absolute top-0 left-1/4 rounded-full bg-blue-200"></div>
      <div className="size-25 absolute top-0 left-1/2 rounded-full bg-blue-200"></div>
      <div className="size-25 absolute top-0 right-1/4 rounded-full bg-blue-200"></div>
      <div className="size-25 absolute bottom-0 left-0 rounded-full bg-blue-200"></div>
      <div className="size-25 absolute bottom-0 left-1/2 rounded-full bg-blue-200"></div>
      <div className="size-25 absolute bottom-0 left-[90%] rounded-full bg-blue-200"></div> */}
      <h2 className="text-5xl font-geist-sans">Ready to Build Your Project?</h2>
      <AnimatedShinyText className="font-geist-mono text-center">
        Join 100+ students and startups who have already transformed their ideas
        into reality.
      </AnimatedShinyText>
      <Button>Get Started</Button>
    </div>
  );
};

export default CTA;

const svgs = {
  nextjs: function NextjsIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <defs>
          <linearGradient
            id="logosNextjsIcon0"
            x1="55.633%"
            x2="83.228%"
            y1="56.385%"
            y2="96.08%"
          >
            <stop offset="0%" stopColor="#FFF"></stop>
            <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="logosNextjsIcon1"
            x1="50%"
            x2="49.953%"
            y1="0%"
            y2="73.438%"
          >
            <stop offset="0%" stopColor="#FFF"></stop>
            <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
          </linearGradient>
          <circle id="logosNextjsIcon2" cx="128" cy="128" r="128"></circle>
        </defs>
        <mask id="logosNextjsIcon3" fill="#fff">
          <use href="#logosNextjsIcon2"></use>
        </mask>
        <g mask="url(#logosNextjsIcon3)">
          <circle cx="128" cy="128" r="128"></circle>
          <path
            fill="url(#logosNextjsIcon0)"
            d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
          ></path>
          <path
            fill="url(#logosNextjsIcon1)"
            d="M163.556 76.8h17.067v102.4h-17.067z"
          ></path>
        </g>
      </svg>
    );
  },
  tailwind: function Tailwindcss(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="#38bdf8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
        ></path>
      </svg>
    );
  },
  node: function Nodejs(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="url(#deviconNodejs0)"
          d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
        ></path>
        <path
          fill="url(#deviconNodejs1)"
          d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"
        ></path>
        <path
          fill="url(#deviconNodejs2)"
          d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
        ></path>
        <defs>
          <linearGradient
            id="deviconNodejs0"
            x1="34.513"
            x2="27.157"
            y1="15.535"
            y2="30.448"
            gradientTransform="translate(-129.242 -73.715)scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F873F"></stop>
            <stop offset=".33" stopColor="#3F8B3D"></stop>
            <stop offset=".637" stopColor="#3E9638"></stop>
            <stop offset=".934" stopColor="#3DA92E"></stop>
            <stop offset="1" stopColor="#3DAE2B"></stop>
          </linearGradient>
          <linearGradient
            id="deviconNodejs1"
            x1="30.009"
            x2="50.533"
            y1="23.359"
            y2="8.288"
            gradientTransform="translate(-129.242 -73.715)scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".138" stopColor="#3F873F"></stop>
            <stop offset=".402" stopColor="#52A044"></stop>
            <stop offset=".713" stopColor="#64B749"></stop>
            <stop offset=".908" stopColor="#6ABF4B"></stop>
          </linearGradient>
          <linearGradient
            id="deviconNodejs2"
            x1="21.917"
            x2="40.555"
            y1="22.261"
            y2="22.261"
            gradientTransform="translate(-129.242 -73.715)scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".092" stopColor="#6ABF4B"></stop>
            <stop offset=".287" stopColor="#64B749"></stop>
            <stop offset=".598" stopColor="#52A044"></stop>
            <stop offset=".862" stopColor="#3F873F"></stop>
          </linearGradient>
        </defs>
      </svg>
    );
  },
  prisma: function Prisma(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="none">
          <rect width="256" height="256" fill="#677EEB" rx="60"></rect>
          <path
            fill="#F7FAFC"
            fillRule="evenodd"
            d="M52.658 165.183a9.39 9.39 0 0 1-.075-9.929L123.045 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065z"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    );
  },
  mongo: function Mongodb(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="none">
          <rect width="256" height="256" fill="#023430" rx="60"></rect>
          <path
            fill="#10AA50"
            d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
          ></path>
          <path
            fill="#B8C4C2"
            d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
          ></path>
          <path
            fill="#12924F"
            d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"
          ></path>
        </g>
      </svg>
    );
  },
  react: function React(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>
    );
  },
  python: function PythonDark(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="none">
          <rect width="256" height="256" fill="#242938" rx="60"></rect>
          <path
            fill="url(#skillIconsPythonDark0)"
            d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717"
          ></path>
          <path
            fill="url(#skillIconsPythonDark1)"
            d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716"
          ></path>
          <defs>
            <linearGradient
              id="skillIconsPythonDark0"
              x1="47.22"
              x2="146.333"
              y1="46.896"
              y2="145.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#387EB8"></stop>
              <stop offset="1" stopColor="#366994"></stop>
            </linearGradient>
            <linearGradient
              id="skillIconsPythonDark1"
              x1="108.056"
              x2="214.492"
              y1="109.905"
              y2="210.522"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE052"></stop>
              <stop offset="1" stopColor="#FFC331"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>
    );
  },
  cloud: function CloudflareLight(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="none">
          <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
          <g clipPath="url(#skillIconsCloudflareLight0)">
            <path
              fill="#fff"
              d="M79 171.75h132.356v-36.625l-25.144-14.419l-4.337-1.875L79 119.537z"
            ></path>
            <path
              fill="#F38020"
              d="M165.575 166.887c1.231-4.218.763-8.087-1.287-10.962c-1.875-2.638-5.044-4.163-8.85-4.338l-72.157-.937c-.469 0-.875-.238-1.112-.588s-.294-.812-.175-1.287c.237-.706.937-1.231 1.7-1.288l72.8-.937c8.625-.413 18-7.388 21.275-15.938l4.162-10.843a2.37 2.37 0 0 0 .125-1.407c-4.687-21.218-23.625-37.043-46.25-37.043c-20.875 0-38.562 13.481-44.9 32.187a21.63 21.63 0 0 0-14.95-4.162c-10.025 1-18.125 9.025-19.05 19.05a22.4 22.4 0 0 0 .525 7.443A30.25 30.25 0 0 0 28 166.125c0 1.462.125 2.937.294 4.394c.125.706.706 1.231 1.406 1.231h133.175a1.81 1.81 0 0 0 1.7-1.288z"
            ></path>
            <path
              fill="#FAAE40"
              d="m188.55 120.519l-2 .062c-.469 0-.875.35-1.063.813l-2.812 9.787c-1.231 4.219-.763 8.088 1.287 10.963c1.875 2.637 5.044 4.162 8.85 4.337l15.357.938c.468 0 .875.237 1.112.587s.294.875.175 1.288c-.237.706-.937 1.231-1.7 1.287l-16 .938c-8.675.412-18 7.387-21.275 15.937l-1.175 2.988c-.237.587.175 1.175.813 1.175H225.1a1.44 1.44 0 0 0 1.406-1.057a40 40 0 0 0 1.494-10.65a39.5 39.5 0 0 0-39.45-39.387"
            ></path>
          </g>
          <defs>
            <clipPath id="skillIconsCloudflareLight0">
              <path fill="#fff" d="M28 28h200v200H28z"></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    );
  },
};
