import Image from "next/image";
import * as React from "react";
import logocoll from "../../../public/logocoll.png";
import Draggable from "react-draggable";
import { COLORS, TOGGAL_WIDTH, WIDTH } from "../../utils/constants";
import LogoSlice, { Direction } from "../../components/LogoSlice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import HomeInfo from "../../components/HomeInfo";
import  {
  EarnMoreOLogo,
  EarnMoreTextElements,
} from "../../components/EarnMore";
import  { KeepMoreOLogo, KeepMoreTextElements } from "../../components/KeepMore";
import  { GetMoreOLogo, GetMoreTextElements } from "../../components/GetMore";
import { MakeMoreOLogo, MakeMoreTextElements } from "../MakeMore";
import BeMore from "../../components/BeMore";

export interface IHomeIndexProps { }

const LOGO = 2 * 75;
const LIMIT = 150;
const LIMIT_Y = 100;



let set = new Set();
export function HomeIndex(props: IHomeIndexProps) {
  const router = useRouter();
  const [initialCord, setInitialCord] = React.useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  // const width = useWidth();
  // const height = useHeight();

  const [interpolate, setInterpolate] = React.useState(LIMIT);
  const [eventExc, setEventExc] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [showScreen, setShowScreen] = React.useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });
  const [thrashold, setThreshold] = React.useState(0);

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

  function handleShowScreen(key: string) {
    console.log(key,set,set.size);
    set.add(key);
    
    switch (key) {
      case "left":
        setShowScreen({
          top: false,
          bottom: false,
          left: true,
          right: false,
        });
        break;
      case "right":
        setShowScreen({
          top: false,
          bottom: false,
          left: false,
          right: true,
        });
        break;
      case "bottom":
        setShowScreen({
          top: false,
          bottom: true,
          left: false,
          right: false,
        });
        break;
        case "top":
        setShowScreen({
          top: true,
          bottom: false,
          left: false,
          right: false,
        });
        break;
      default:
        setShowScreen({
          top: false,
          bottom: false,
          left: false,
          right: false,
        });
    }

  }

  // React.useEffect(() => {
  //   window.addEventListener('mousemove', (event) => {
  //     console.log(event.clientX, event.clientY,active, showScreen.left ,"mouse",Math.abs(event.clientX) > (windowSize.width / 2) + 200,(windowSize.width / 2) + 200);
  //     // if (Math.abs(event.clientX) >(windowSize.width/2)+100) {
  //     //   if (event.clientX > (windowSize.width/2)+100)
  //     //     handleShowScreen("right")
  //     //   else
  //     //     handleShowScreen("left")
  //     // }
  //     if (showScreen.left && Math.abs(event.clientX) > (windowSize.width / 2) + 200)
  //       setShowScreen({
  //         top: false,
  //         bottom: false,
  //         left: false,
  //         right: false,
  //       })

  //   });
  // }, [])

  const [inView, setInView] = React.useState(false);
  const variants = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  };

  console.log("active state ", active);
  return (
    <div>
      {active && showScreen.left && (
        <motion.div
          className=" absolute h-screen w-screen flex items-center  justify-center top-0 flex-row"
          transition={{ duration: 2, ease: "easeOut" }}
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1 },
            hidden: {
              opacity: 0,
            },
          }}
          initial="hidden"
          style={{ backgroundColor: COLORS.LEFT_COLOR }}
        >
          <EarnMoreTextElements
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { x: -350 },
              hidden: { x: -900 },
            }}
            initial="hidden"
           
          />
          <EarnMoreOLogo
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { rotateY: 180, },
              visible: { rotateY: 0, },
            }}

          />
        </motion.div>
      )}
      {active && showScreen.right && (
         <motion.div
         className=" absolute h-screen w-screen flex items-center  justify-center top-0 flex-row"
         transition={{ duration: 2, ease: "easeOut" }}
         animate={inView ? "visible" : "hidden"}
         variants={{
           visible: { opacity: 1 },
           hidden: {
             opacity: 0,
           },
         }}
         initial="hidden"
         style={{ backgroundColor: COLORS.RIGHT_COLOR }}
       >
         <KeepMoreTextElements
           transition={{ duration: 2, ease: "easeOut" }}
           animate={inView ? "visible" : "hidden"}
           variants={{
             visible: { x: 350 },
             hidden: { x: 900 },
           }}
           initial="hidden"
         />
         <KeepMoreOLogo
           transition={{ duration: 2, ease: "easeOut" }}
           animate={inView ? "visible" : "hidden"}
           variants={{
             hidden: { rotateY: 180, },
             visible: { rotateY: 0, },
           }}
         />
       </motion.div>
      )}
      {active && showScreen.bottom && (
         <motion.div
         className=" absolute h-screen w-screen flex items-center  justify-center top-0 flex-row"
         transition={{ duration: 2, ease: "easeOut" }}
         animate={inView ? "visible" : "hidden"}
         variants={{
           visible: { opacity: 1 },
           hidden: {
             opacity: 0,
           },
         }}
         initial="hidden"
         style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
       >
         <GetMoreTextElements
           transition={{ duration: 2, ease: "easeOut" }}
           animate={inView ? "visible" : "hidden"}
           variants={{
             visible: { y: -200 },
             hidden: { y: 900 },
           }}
           initial="hidden"
         />
         <GetMoreOLogo
           transition={{ duration: 2, ease: "easeOut" }}
           animate={inView ? "visible" : "hidden"}
           variants={{
            hidden: { rotateY: 180, },
             visible: { rotateY: 0, },
           }}
         />
       </motion.div>
      )}
       {active && showScreen.top && (
         <motion.div
         className=" absolute h-screen w-screen flex items-center  justify-center top-0 flex-row"
         transition={{ duration: 2, ease: "easeOut" }}
         animate={inView ? "visible" : "hidden"}
         variants={{
           visible: { opacity: 1 },
           hidden: {
             opacity: 0,
           },
         }}
         initial="hidden"
         style={{ backgroundColor: COLORS.TOP }}
       >
         <MakeMoreTextElements
           transition={{ duration: 2, ease: "easeOut" }}
           animate={inView ? "visible" : "hidden"}
           variants={{
             visible: { y: 200 },
             hidden: { y: -900 },
           }}
           initial="hidden"
         />
         <MakeMoreOLogo
           transition={{ duration: 2, ease: "easeOut" }}
           animate={inView ? "visible" : "hidden"}
           variants={{
            hidden: { rotateY: 180, },
            visible: { rotateY: 0, },
           }}
         />
       </motion.div>
      )}
      <div
        className="flex h-screen items-center  justify-center opacity-1"
      >
        <Draggable
          disabled={!active}
          defaultPosition={initialCord}
          position={initialCord}
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
          <div
            className="h-48 w-48 absolute flex items-center  justify-center"
            style={{ zIndex: active ? -99 : 1 }}
          >
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
            <motion.div
              className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
              style={{ backgroundColor: "#525252" }}
              transition={{ duration: 2, ease: "easeOut" }}
              animate={!inView ? "visible" : "hidden"}
              variants={{
                hidden: { rotateY: 180, opacity: 0 },
                visible: { rotateY: 0, opacity: 1 },
              }}
              initial="visible"
            >
              {active && (
                <Image src={logocoll} className="h-28 w-28" alt="logo" />
              )}
            </motion.div>
            <motion.div
              onClick={() => setActive(true)}
              className="h-16 w-16 absolute bg-white rounded-full flex items-center justify-center shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
              transition={{ duration: 2, ease: "easeOut" }}
              animate={!inView ? "visible" : "hidden"}
              variants={ {
                hidden: { rotateY: 180, opacity: 0 },
                visible: { rotateY: 0, opacity: 1 },
              }}
              initial="visible"
            >
              <div
                className="h-8 w-8 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: "#525252" }}
              ></div>
            </motion.div>

          </div>
        </Draggable>
        {active && (
          <>
            <div
              onMouseOver={() => handleShowScreen("bottom")}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => setInView(false)}
              className=" absolute bottom-0"
              style={{
                width: windowSize.width / 3.5,
                height: windowSize.height / 4.5,
                // backgroundColor: "red",
              }}
            ></div>
            <div
              // onMouseEnter={() => router.push("/MakeMore")}
              onMouseOver={() => handleShowScreen("top")}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => setInView(false)}
              className=" absolute top-0"
              style={{
                width: windowSize.width / 3.5,
                height: windowSize.height / 4.5,
                // backgroundColor: "red",
              }}
            ></div>
            <div
              onMouseOver={() => {
                handleShowScreen("left");
              }}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => setInView(false)}
              className=" absolute left-0"
              style={{
                height: windowSize.width / 2.5,
                width: windowSize.height / 3.6,
              }}
            ></div>
            <div
              onMouseOver={() => handleShowScreen("right")}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => setInView(false)}
              className=" absolute right-0"
              style={{
                height: windowSize.width / 2.5,
                width: windowSize.height / 4,
                // backgroundColor: "red",
              }}
            ></div>
          </>
        )}
      </div>
      {active&&<BeMore />}
    </div>
  );
}
