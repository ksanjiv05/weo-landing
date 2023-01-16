import * as React from "react";
import { COLORS } from "../utils/constants";
import { motion } from "framer-motion";
import { useWidth } from "../hook";
import { useRouter } from "next/router";

const OLogo = () => {
  return (
    <div className="flex-1 p-4 flex items-center  justify-end max-sm:justify-center">
      <div className="h-52 w-52 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center">
        <div
          className="h-40 w-40 absolute rounded-full border-2 flex items-center"
          style={{ backgroundColor: COLORS.RIGHT_COLOR }}
        >
          <div className="h-4 w-4 absolute rounded-full left-3 bg-white"></div>
          <div className="h-12 w-12 absolute bg-white rounded-full flex items-center justify-center left-8">
            <div
              className="h-8 w-8 absolute rounded-full border-2 flex items-center justify-center"
              style={{ backgroundColor: COLORS.RIGHT_COLOR }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface IKeepMoreProps {}

export default function KeepMore(props: IKeepMoreProps) {
  const router = useRouter();
  const width = useWidth();
  const [inView, setInView] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

  const variants = {
    visible: {  x: 0 },
    hidden: {
      // opacity: 0,
      // scale: 0,
      x: 600,
    },
  };
  React.useEffect(() => {
    setInView(true);
  }, []);
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
    <div style={{ overflow: "hidden" }}>
      <motion.div
        transition={{ duration: 2, ease: "easeOut" }}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        initial="hidden"
        className="flex h-screen max-sm:flex-col opacity-1 "
        style={{ backgroundColor: COLORS.RIGHT_COLOR }}
      >
        <div className="flex-1 flex">
          <OLogo />
        </div>

        <div className="flex-1 p-4 flex-col max-sm:flex-row flex max-sm:block justify-center">
          <div className="flex max-sm:items-center max-sm:justify-center">
            <h1 className=" text-8xl font-bold" style={{ color: "#ffffff4a" }}>
              keep
            </h1>
          </div>
          <div className="flex max-sm:items-center max-sm:justify-center">
            <h1 className=" text-8xl font-bold" style={{ color: "#ffffff4a" }}>
              more
            </h1>
          </div>
          <div className="flex max-sm:items-center max-sm:justify-center mt-4 text-center">
            <p style={{ color: "#ffffff" }}>
              Options open to Collected and Share the Best Offer
            </p>
          </div>
        </div>
        <div
          className=" absolute left-0  flex items-center justify-center"
          style={{
            height: windowSize.height,
            width: windowSize.height / 4,
            // backgroundColor: "red",
          }}
        >
          <div
            onMouseEnter={() => router.push("/")}
            className=" absolute left-0"
            style={{
              height: windowSize.width / 2.5,
              width: windowSize.height / 4,
              // backgroundColor: "red",
            }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
}
