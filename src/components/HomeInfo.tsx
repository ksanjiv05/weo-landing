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
import qo from "../../public/qo.png";

import { COLORS } from "../utils/constants";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

export interface IHomeInfoProps {
  id: number;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function HomeInfo({ id }: IHomeInfoProps) {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const [inView, setInView] = React.useState(false);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

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
    <section ref={ref}>
      <motion.div
        transition={{ duration: 2, ease: "easeOut" }}
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1 },
          hidden: {
            opacity: 0.3,
          },
        }}
        initial="hidden"
        onMouseEnter={() => setInView(true)}
        onMouseLeave={() => setInView(false)}
        className="h-screen w-screen flex flex-col bg-black justify-between"
      >
        <div className="flex flex-1 items-end pb-8  justify-center">
          <motion.div
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { scale: 1, rotate: 360 },
              hidden: {
                scale: 0,
                rotate: 0,
              },
            }}
            initial="hidden"
            className="h-48 w-48 absolute flex items-center  justify-center"
          >
            <LogoSlice
              onMouseEnter={onMouseEnter}
              backgroundColor={COLORS.LEFT_COLOR}
              direction={Direction.LEFT}
              animateObj={{ x: -75, y: 0 }}
              isShow={true}
            />
            <LogoSlice
              onMouseEnter={onMouseEnter}
              backgroundColor={COLORS.RIGHT_COLOR}
              direction={Direction.RIGHT}
              animateObj={{ x: 75, y: 0 }}
              isShow={true}
            />
            <LogoSlice
              onMouseEnter={onMouseEnter}
              backgroundColor={COLORS.TOP}
              direction={Direction.TOP}
              animateObj={{ x: 0, y: -75 }}
              isShow={true}
            />
            <LogoSlice
              onMouseEnter={onMouseEnter}
              backgroundColor={COLORS.BOTTOM_COLOR}
              direction={Direction.BOTTOM}
              animateObj={{ x: 0, y: 75 }}
              isShow={true}
            />

            <div className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"></div>
            <div
              className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
              style={{ backgroundColor: "#525252" }}
            >
              <Image src={logocoll} className="h-28 w-28" alt="logo" />
              <div
              className="h-16 w-16 absolute bg-white rounded-full flex items-center justify-center shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
              
            >
              <div
                className="h-8 w-8 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: "#525252" }}
              ></div>
            </div>
            </div>
          </motion.div>
        </div>

        <div
          className=" bg-black w-screen"
          style={{ height: windowSize.height / 4 }}
        >
          <motion.div
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { y: 0 },
              hidden: {
                y: 222,
              },
            }}
            initial="hidden"
            className=" flex items-center justify-center"
          >
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
          </motion.div>
          <motion.div
            transition={{ duration: 4, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { y: -5 },
              hidden: {
                y: 222,
              },
            }}
            initial="hidden"
            className=" flex items-center justify-center"
          >
            <h1 className="" style={{ color: "#fff" }}>
              Once built for release, you'll be able to distribute the app to
              beta testers and submit the app
            </h1>
          </motion.div>
          <motion.div
            transition={{ duration: 4, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { y: -5 },
              hidden: {
                y: 222,
              },
            }}
            initial="hidden"
            className=" flex items-center justify-center"
          >
            <h1 className="" style={{ color: "#fff" }}>
              Once built for release, you'll be abl app
            </h1>
          </motion.div>
        </div>
        <footer className="flex items-center justify-between">
          <div className="w-52 h-16  flex bg-black items-center ">
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { x: -5 },
                hidden: {
                  x: -222,
                },
              }}
              initial="hidden"
              className=" flex-1 flex bg-black items-end justify-center"
            >
              <Image src={Telegram} className="h-8 w-8" alt="logo" />
            </motion.div>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { x: -5 },
                hidden: {
                  x: -222,
                },
              }}
              initial="hidden"
              className=" flex-1 flex bg-black items-end justify-center"
            >
              <Image src={Discord} className="h-8 w-8" alt="logo" />
            </motion.div>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { x: -5 },
                hidden: {
                  x: -222,
                },
              }}
              initial="hidden"
              className="  flex-1 flex bg-black items-end justify-center"
            >
              <Image src={Signal} className="h-8 w-8" alt="logo" />
            </motion.div>
          </div>
          <motion.div
              transition={{ duration: 4, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { y: -5 },
                hidden: {
                  y: 222,
                },
              }}
              initial="hidden" className=" w-16 h-16 flex items-center justify-center"> <Image src={qo} className="h-16 w-12" alt="logo" /></motion.div>

          <div className="w-52 h-16  flex  bg-black  items-center ">
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { x: 5 },
                hidden: {
                  x: 222,
                },
              }}
              initial="hidden" className=" flex-1 flex bg-black items-end justify-center">
              <Image src={YouTube} className="h-8 w-8" alt="logo" />
            </motion.div>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { x: 5 },
                hidden: {
                  x: 222,
                },
              }}
              initial="hidden" className=" flex-1 flex bg-black items-end justify-center">
              <Image src={Twitter} className="h-8 w-8" alt="logo" />
            </motion.div>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { x: 5 },
                hidden: {
                  x: 222,
                },
              }}
              initial="hidden" className=" flex-1 flex bg-black items-end justify-center">
              <Image src={LinkedIn} className="h-8 w-8" alt="logo" />
            </motion.div>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
