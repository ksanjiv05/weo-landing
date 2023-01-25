import Image from "next/image";
import * as React from "react";
import logocoll from "../../public/logocoll.png";
import qo from "../../public/qo.png";
// import Signal from "../../public/Signal.png";
import { motion, useScroll } from "framer-motion";

import { Direction } from "../components/Logo";
import HomeInfo from "./HomeInfo";
import LogoSlice from "./LogoSlice";
import { COLORS } from "../utils/constants";
import Discord from "../../public/Discord.png";

export interface IBeMoreProps {}

export default function BeMore(props: IBeMoreProps) {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const [showHomeInfo, setShowInfo] = React.useState(false);
  const [showIcon, setShowIcon] = React.useState(false);

  const onMouseEnter = (direction: Direction) => {
    console.log("onMouseEnter info");
  };
  React.useEffect(() => {
    const handleResize = () => {
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

  const onScroll = React.useCallback((event) => {
    const { scrollY, innerHeight } = window;
    console.log("_______________", innerHeight < scrollY, innerHeight, scrollY);
    if (innerHeight + innerHeight / 2.5 < scrollY) {
      // setInView(false)
      setShowInfo(true);
    } else if (2 * innerHeight + innerHeight / 2.5 < scrollY) {
      setShowIcon(true);
    } else {
      setShowInfo(false);
      setShowIcon(false);
    }
    // setScrollY(window.pageYOffset);
  }, []);

  const hideHomeinfo = () => {
    setShowInfo(false);
  };

  const showHomeinfoM = () => {
    setShowInfo(false);
  };

  React.useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // window.addEventListener("scrollend", ()=>console.log("_L_"));
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const [inView, setInView] = React.useState(false);

  return (
    <section>
      <div className="h-screen sticky bottom-0 top-0">
        <motion.div
          transition={{ duration: 2, ease: "easeOut" }}
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { backgroundColor: "#525252" },
            hidden: {
              backgroundColor: "#000000",
            },
          }}
          initial="hidden"
          onMouseEnter={() => {
            setInView(true);
            setShowInfo(false);
          }}
          onMouseLeave={() => setInView(false)}
          className="h-screen flex flex-col justify-between "
          // onScroll={() => alert("scroll")}
        >
          <div className="flex flex-1 items-end pb-8  justify-center">
            <motion.div
              transition={{ duration: 2, ease: "easeOut" }}
              animate={inView || showHomeInfo ? "visible" : "hidden"}
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
              {showHomeInfo && (
                <>
                  <LogoSlice
                    isShow={true}
                    onMouseEnter={onMouseEnter}
                    backgroundColor={COLORS.LEFT_COLOR}
                    direction={Direction.LEFT}
                    animateObj={{ x: -75, y: 0 }}
                  />
                  <LogoSlice
                    isShow={true}
                    onMouseEnter={onMouseEnter}
                    backgroundColor={COLORS.RIGHT_COLOR}
                    direction={Direction.RIGHT}
                    animateObj={{ x: 75, y: 0 }}
                  />
                  <LogoSlice
                    isShow={true}
                    onMouseEnter={onMouseEnter}
                    backgroundColor={COLORS.TOP}
                    direction={Direction.TOP}
                    animateObj={{ x: 0, y: -75 }}
                  />
                  <LogoSlice
                    isShow={true}
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
                style={{ backgroundColor: "#525252", zIndex: 999 }}
              >
                {!showHomeInfo && (
                  <Image src={logocoll} className="h-28 w-28" alt="logo" />
                )}
                <motion.div className="h-16 w-16 absolute bg-white rounded-full flex items-center justify-center shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]">
                  <div
                    className="h-8 w-8 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
                    style={{ backgroundColor: "#525252" }}
                  >
                    {showIcon && (
                      <Image src={Discord} className="h-8 w-8" alt="logo" />
                    )}
                  </div>
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
              <h1
                className=" text-8xl font-bold"
                style={{ color: "#ffffff4a" }}
              >
                be more
              </h1>
            </motion.div>
            <motion.div
              transition={{ delay: 2, duration: 1, ease: "easeIn" }}
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { y: -20, x: 180,opacity:1 },
                hidden: {
                  y: -20,
                  x: 180,
                  opacity:0
                },
              }}
              initial="hidden"
              className=" flex items-center justify-center"
            >
              <h1 className="" style={{ color: "#fff" }}>
                with Real Time Returns Between Me and You
              </h1>
            </motion.div>
          </div>
          <footer className="flex items-center justify-center">
            <motion.div
              transition={{ type: "spring", duration: 3, bounce: 0.5 }}
              animate={inView || showHomeInfo ? "visible" : "hidden"}
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
        </motion.div>
      </div>
      <motion.div
        className="h-screen block"
        // animate={
        //   { y: showHomeInfo }
        // }
        // style={{zIndex:-1}}
      >
        <HomeInfo
          id={1}
          hideHomeinfo={hideHomeinfo}
          showHomeinfoM={showHomeinfoM}
          showHomeInfo={showHomeInfo}
        />
      </motion.div>
    </section>
  );
}
