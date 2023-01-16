import Image from "next/image";
import * as React from "react";
import logocoll from "../../public/logocoll.png";
import Telegram from "../../public/Telegram.png";
import Discord from "../../public/Discord.png";
import Signal from "../../public/Signal.png";

import YouTube from "../../public/YouTube.png";
import Twitter from "../../public/Twitter.png";
import LinkedIn from "../../public/LinkedIn.png";
// import Signal from "../../public/Signal.png";

import { Direction } from "../components/Logo";
import LogoSlice from "../components/LogoSlice";
import { useHeight } from "../hook";
import { COLORS } from "../utils/constants";

export interface IHomeInfoProps {}

export default function HomeInfo(props: IHomeInfoProps) {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

  const onMouseEnter = (direction: Direction) => {
    console.log("onMouseEnter info");
  };
  React.useEffect(() => {
    const handleResize = () => {
      console.log("use effec", window.Event.name);
      return setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-screen flex flex-col bg-black justify-between">
      <div className="flex flex-1 items-end pb-8  justify-center">
        <div className="h-48 w-48 absolute flex items-center  justify-center">
          <LogoSlice
            onMouseEnter={onMouseEnter}
            backgroundColor={COLORS.LEFT_COLOR}
            direction={Direction.LEFT}
            animateObj={{ x: -75, y: 0 }}
          />
          <LogoSlice
            onMouseEnter={onMouseEnter}
            backgroundColor={COLORS.RIGHT_COLOR}
            direction={Direction.RIGHT}
            animateObj={{ x: 75, y: 0 }}
          />
          <LogoSlice
            onMouseEnter={onMouseEnter}
            backgroundColor={COLORS.TOP}
            direction={Direction.TOP}
            animateObj={{ x: 0, y: -75 }}
          />
          <LogoSlice
            onMouseEnter={onMouseEnter}
            backgroundColor={COLORS.BOTTOM_COLOR}
            direction={Direction.BOTTOM}
            animateObj={{ x: 0, y: 75 }}
          />

          <div className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"></div>
          <div
            className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
            style={{ backgroundColor: "#525252" }}
          >
            <Image src={logocoll} className="h-28 w-28" alt="logo" />
          </div>
        </div>
      </div>

      <div
        className=" bg-black w-screen"
        style={{ height: windowSize.height / 4 }}
      >
        <div className=" flex items-center justify-center">
          <h1 className=" font-bold" style={{ color: "#fff", fontSize: 35 }}>
            Our
          </h1>
          <h1
            className=" font-bold"
            style={{ color: "#ffffff4a", fontSize: 35, marginLeft: 10 }}
          >
            Marketplace,
          </h1>
          <h1
            className=" font-bold"
            style={{ color: "#fff", fontSize: 35, marginLeft: 10 }}
          >
            Our
          </h1>
          <h1
            className=" font-bold"
            style={{ color: "#ffffff4a", fontSize: 35, marginLeft: 10 }}
          >
            Way
          </h1>
        </div>
        <div className=" flex items-center justify-center">
          <h1 className="" style={{ color: "#fff" }}>
            Once built for release, you'll be able to distribute the app to beta
            testers and submit the app
          </h1>
        </div>
        <div className=" flex items-center justify-center">
          <h1 className="" style={{ color: "#fff" }}>
            Once built for release, you'll be abl app
          </h1>
        </div>
      </div>
      <footer className="flex items-center justify-between">
        <div className="w-52 h-16  flex bg-black items-center ">
          <div className=" flex-1 flex bg-black items-end justify-center">
            <Image src={Telegram} className="h-8 w-8" alt="logo" />
          </div>
          <div className=" flex-1 flex bg-black items-end justify-center">
            <Image src={Discord} className="h-8 w-8" alt="logo" />
          </div>
          <div className=" flex-1 flex bg-black items-end justify-center">
            <Image src={Signal} className="h-8 w-8" alt="logo" />
          </div>
        </div>
        <div className=" w-16 h-16  bg-white "> icons</div>

        <div className="w-52 h-16  flex  bg-black  items-center ">
          <div className=" flex-1 flex bg-black items-end justify-center">
            <Image src={YouTube} className="h-8 w-8" alt="logo" />
          </div>
          <div className=" flex-1 flex bg-black items-end justify-center">
            <Image src={Twitter} className="h-8 w-8" alt="logo" />
          </div>
          <div className=" flex-1 flex bg-black items-end justify-center">
            <Image src={LinkedIn} className="h-8 w-8" alt="logo" />
          </div>
        </div>
      </footer>
    </div>
  );
}
