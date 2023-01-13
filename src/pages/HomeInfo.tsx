import Image from "next/image";
import * as React from "react";
import logocoll from "../../public/logocoll.png";
import { Direction } from "../components/Logo";
import LogoSlice from "../components/LogoSlice";
import { useHeight } from "../hook";
import { COLORS } from "../utils/constants";

export interface IHomeInfoProps {}

export default function HomeInfo(props: IHomeInfoProps) {
  const height = useHeight();
  const onMouseEnter = (direction: Direction) => {
    console.log("onMouseEnter info");
  };
  return (
    <div className="container mx-auto overflow-hidden bg-black">
      <div className="flex h-screen items-center  justify-center">
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
        <div
          className=" bg-black absolute bottom-0 w-screen"
          style={{ height: height / 4 }}
        >
          <div className=" flex items-center justify-center">
            <h1 className=" font-bold" style={{ color: "#fff", fontSize: 35 }}>
              Our
            </h1>
            <h1
              className=" font-bold"
              style={{ color: "#ffffff4a", fontSize: 35,marginLeft:10 }}
            >
              Marketplace,
            </h1>
            <h1 className=" font-bold" style={{ color: "#fff", fontSize: 35,marginLeft:10 }}>
              Our
            </h1>
            <h1
              className=" font-bold"
              style={{ color: "#ffffff4a", fontSize: 35,marginLeft:10 }}
            >
              Way
            </h1>
          </div>
          <div className=" flex items-center justify-center">
            <h1 className="" style={{ color: "#fff" }}>
              Once built for release, you'll be able to distribute the app to
              beta testers and submit the app
            </h1>
          </div>
          <div className=" flex items-center justify-center">
            <h1 className="" style={{ color: "#fff" }}>
              Once built for release, you'll be abl app
            </h1>
          </div>
        </div>
        <div className=" w-16 h-16 absolute bg-white bottom-0"> icons</div>

      </div>
      <div className=" w-72 h-16 absolute bg-white bottom-0 left-0"> icons hear</div>
        
        <div className=" w-72 h-16 absolute bg-white bottom-0 right-0"> icons hear</div>
    </div>
  );
}
