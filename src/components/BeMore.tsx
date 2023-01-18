import Image from "next/image";
import * as React from "react";
import logocoll from "../../public/logocoll.png";
import qo from "../../public/qo.png";
// import Signal from "../../public/Signal.png";
import { motion, useScroll } from "framer-motion";

import { Direction } from "../components/Logo";

export interface IBeMoreProps {}

export default function BeMore(props: IBeMoreProps) {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll();
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

  const [inView, setInView] = React.useState(false);


  return (<section>
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
      className="h-screen flex flex-col justify-between"
      style={{ backgroundColor: "#525252" }}
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
          {/* <LogoSlice
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
                    /> */}

          <div className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"></div>
          <div
            className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
            style={{ backgroundColor: "#525252" }}
          >
            <Image src={logocoll} className="h-28 w-28" alt="logo" />
            <motion.div
              className="h-16 w-16 absolute bg-white rounded-full flex items-center justify-center shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
              
            >
              <div
                className="h-8 w-8 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: "#525252" }}
              ></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className=" w-screen" style={{ height: windowSize.height / 4 }}>
        <motion.div
          transition={{ duration: 2, ease: "easeOut" }}
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { y: -20, x: 100 },
            hidden: {
              y: 222,
              x: 100,
            },
          }}
          initial="hidden"
          className=" flex items-center justify-center"
        >
          <h1 className=" text-8xl font-bold" style={{ color: "#ffffff4a" }}>
            be more
          </h1>
        </motion.div>
        <motion.div
          transition={{ duration: 4, ease: "easeOut" }}
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { y: -20, x: 180 },
            hidden: {
              y: 222,
              x: 180,
            },
          }}
          initial="hidden"
          className=" flex items-center justify-center"
        >
          <h1 className="" style={{ color: "#fff" }}>
            Once built for release, you'll be able to distribute the app to
          </h1>
        </motion.div>
      </div>
      <footer className="flex items-center justify-center">
        <motion.div
          transition={{ type: "spring", duration: 3, bounce: 0.5 }}
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: {
              y: -900,
              opacity: 0,
            },
          }}
          initial="hidden"
          className=" w-16 h-16 "
        >
          <Image src={qo} className="h-16 w-12" alt="logo" />
        </motion.div>
      </footer>
    </motion.div></section>
  );
}
