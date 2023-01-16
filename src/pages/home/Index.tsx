import Image from "next/image";
import * as React from "react";
import logocoll from "../../../public/logocoll.png";
import Draggable from "react-draggable";
import { COLORS, TOGGAL_WIDTH, WIDTH } from "../../utils/constants";
import LogoSlice, { Direction } from "../../components/LogoSlice";
import Logo from "../../components/Logo";
import { useHeight, useWidth } from "../../hook";
import Link from "next/link";
// import {  useRouter } from 'next/navigation';
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import HomeInfo from "../../components/HomeInfo";

export interface IHomeIndexProps { }

const LOGO = 2 * 75;
const LIMIT = 150;
const LIMIT_Y = 100;

function throttle(cb: Function, delay = 250) {
  let shouldWait = false;

  return () => {
    if (shouldWait) return;

    cb();
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

export function HomeIndex(props: IHomeIndexProps) {
  const router = useRouter();
  const [initialCord, setInitialCord] = React.useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  // const width = useWidth();
  // const height = useHeight();

  const [interpolate, setInterpolate] = React.useState(LIMIT);
  const [eventExc, setEventExc] = React.useState(false);
  const [active, setActive] = React.useState(false);
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

  const onMouseEnter = (direction: Direction) => {
    if (!eventExc) {
      console.log("onMouseEnter", direction);
      setEventExc(true);

      // switch (direction) {
      //   case Direction.LEFT:
      //     router.push("http://localhost:3000/EarnMore")
      //     return
      //   case Direction.RIGHT:
      //     router.push("http://localhost:3000/KeepMore")
      //     return
      //   default:
      //     router.push("/")
      // }
    }
    setTimeout(() => {
      console.log("ex fal");
      setEventExc(false);
    }, 500);
  };

  return (<div>
    <motion.div
      transition={{ duration: 2, ease: "easeOut" }}
      animate={{ opacity: 1 }}
      className="flex h-screen items-center  justify-center opacity-0"
      onScrollCapture={() => alert("onScrollCapture")}
      onScroll={() => alert("onScrollCapture")}

    >
      {/* {windowSize.height && windowSize.width && <>
        <Logo interpolate={interpolate} backgroundColor={COLORS.LEFT_COLOR} direction={Direction.LEFT} animateObj={{ x: -(windowSize.width / 2) + LOGO / 2, y: 0 }} />
        <Logo interpolate={interpolate} backgroundColor={COLORS.RIGHT_COLOR} direction={Direction.RIGHT} animateObj={{ x: (windowSize.width / 2) - LOGO / 2, y: 0 }} />
        <Logo interpolate={interpolate} backgroundColor={COLORS.TOP} direction={Direction.TOP} animateObj={{ x: 0, y: -(windowSize.height / 2) + LOGO / 2 }} />
        <Logo interpolate={interpolate} backgroundColor={COLORS.BOTTOM_COLOR} direction={Direction.BOTTOM} animateObj={{ x: 0, y: (windowSize.height / 2) - LOGO / 2 }} />
      </>
      } */}
      <Draggable
        disabled={!active}
        defaultPosition={initialCord}
        position={initialCord}
        onStart={(e, data) => {
          // console.log("onStart", data)
        }}
        // axis="x"
        onDrag={(e, data) => {
          if (Math.abs(data.y) > 10) setInitialCord({ x: 0, y: data.y });
          if (Math.abs(data.x) > 10) setInitialCord({ x: data.x, y: 0 });

          if (Math.abs(data.x) <= LIMIT) {
            setInterpolate(LIMIT / Math.abs(data.x));
            if (data.x > 0 && data.x >= LIMIT - 10) {
              router.push("/KeepMore");
            } else if (data.x < 0 && data.x <= -LIMIT + 10) {
              router.push("/EarnMore");
            }
          }
          if (Math.abs(data.y) <= LIMIT_Y) {
            setInterpolate(LIMIT_Y / Math.abs(data.y));
            if (data.y > 0 && data.y >= LIMIT_Y - 10) {
              router.push("/GetMore");
            } else if (data.y < 0 && data.y <= -LIMIT_Y + 10) {
              router.push("/MakeMore");
            }
          }
          // else
          //   router.push("/KeepMore")
        }}
        onStop={(e) => {
          setInitialCord({ x: 0, y: 0 });
          setInterpolate(LIMIT);
        }}
      >
        <div className="h-48 w-48 absolute flex items-center  justify-center">
          {active && (
            <>
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
            </>
          )}

          <div className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"></div>
          <div
            className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
            style={{ backgroundColor: "#525252" }}
          >
            {active && (
              <Image src={logocoll} className="h-28 w-28" alt="logo" />
            )}
          </div>
          <div
            onClick={() => setActive(true)}
            className="h-16 w-16 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
          ></div>
          <div
            className="h-8 w-8 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
            style={{ backgroundColor: "#525252" }}
          ></div>
        </div>
      </Draggable>
      {active && (
        <>
          <div
            onMouseEnter={() => router.push("/GetMore")}
            className=" absolute bottom-0"
            style={{
              width: windowSize.width / 2.5,
              height: windowSize.height / 4.5,
              // backgroundColor: "red",
            }}
          ></div>
          <div
            onMouseEnter={() => router.push("/MakeMore")}
            className=" absolute top-0"
            style={{
              width: windowSize.width / 2.5,
              height: windowSize.height / 4.5,
              // backgroundColor: "red",
            }}
          ></div>
          <div
            onMouseEnter={() => router.push("/EarnMore")}
            className=" absolute left-0"
            style={{
              height: windowSize.width / 2.5,
              width: windowSize.height / 4,
              // backgroundColor: "red",
            }}
          ></div>
          <div
            onMouseEnter={() => router.push("/KeepMore")}
            className=" absolute right-0"
            style={{
              height: windowSize.width / 2.5,
              width: windowSize.height / 4,
              // backgroundColor: "red",
            }}
          ></div>
        </>
      )}

    </motion.div>
    {/* {active&&<HomeInfo />} */}
  </div>
  );
}
