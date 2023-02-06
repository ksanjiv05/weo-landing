import Image from "next/image";
import * as React from "react";
import logocoll from "../../../public/loggif.gif";
//   logocoll.png";
import info from "../../../public/info.png";
import darrow from "../../../public/darrow.png";


import Draggable from "react-draggable";
import { COLORS } from "../../utils/constants";
import LogoSlice, { Direction } from "../../components/LogoSlice";
import { useRouter } from "next/router";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  EarnMoreOLogo,
  EarnMoreTextElements,
} from "../../components/EarnMore";
import { KeepMoreOLogo, KeepMoreTextElements } from "../../components/KeepMore";
import { GetMoreOLogo, GetMoreTextElements } from "../../components/GetMore";
import { MakeMoreOLogo, MakeMoreTextElements } from "../../components/MakeMore";
import BeMore from "../../components/BeMore";
import HomeInfo from "../../components/HomeInfo";
import { TourProvider, useTour } from '@reactour/tour'
import { useScrollSections } from "../../hook";

export interface IHomeIndexProps { }

const LOGO = 2 * 75;
const LIMIT = 150;
const LIMIT_Y = 100;



let set = new Set();
export default function HomeIndex(props: IHomeIndexProps) {
  const router = useRouter();
  const [initialCord, setInitialCord] = React.useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  // const width = useWidth();
  // const height = useHeight();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  const [interpolate, setInterpolate] = React.useState(LIMIT);
  const [eventExc, setEventExc] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [showScreen, setShowScreen] = React.useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });
  const [moveLogo, setMoveLogo] = React.useState("hidden");
  const [triggerOnce, setTriggerOnce] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true)
    const handleResize = () => {
      // console.log("use effec", window.Event.name);
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
    console.log(key, set,triggerOnce,set.size >= 4&&key=="home"&&!triggerOnce);
    // set.add(key);
    key != "home" && set.add(key);
    if(set.size >= 4&&!triggerOnce) {
      // alert("go to be")
      setTimeout(() =>{
        router.push("#bemore");
        setTriggerOnce(true)
      },4000)
    }
    switch (key) {
      case "left":
        setShowScreen({
          top: false,
          bottom: false,
          left: true,
          right: false,
        });
        setMoveLogo("left")
        break;

      case "right":
        setShowScreen({
          top: false,
          bottom: false,
          left: false,
          right: true,
        });
        setMoveLogo("right")

        break;
      case "bottom":
        setShowScreen({
          top: false,
          bottom: true,
          left: false,
          right: false,
        });
        setMoveLogo("bottom")

        break;
      case "top":
        setShowScreen({
          top: true,
          bottom: false,
          left: false,
          right: false,
        });
        setMoveLogo("top")

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
  //   const onScroll = useCallback(event => {
  //     const { pageYOffset, scrollY } = window;
  //     console.log("yOffset", pageYOffset, "scrollY", scrollY);
  //     setScrollY(window.pageYOffset);
  // }, []);

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //      window.removeEventListener("scroll", onScroll, { passive: true });
  //   }
  // }, []);
  const { setIsOpen } = useTour()
  const currentSection = useScrollSections();
  return (
    <div>
      {/* {!active && <div className="h-5 w-5 rounded absolute top-3 left-3 cursor-pointer" onClick={() => setIsOpen(true)}><Image src={info} className="h-5 w-5 rounded" alt="info" /></div>} */}
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
            inView={inView}

          />
          <EarnMoreOLogo
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
             hidden: {  opacity: 1,x:0 },
             visible: { opacity: 1,x:12 },
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
            
            inView={inView}
          />
          <KeepMoreOLogo
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
             hidden: {  opacity: 1,x:0 },
             visible: { opacity: 1,x:-12 },
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
            inView={inView}
          />
          <GetMoreOLogo
            transition={{ duration: 2, ease: "easeOut" }}
            animate={inView ? "visible" : "hidden"}
            variants={{
             hidden: {  opacity: 1,y:0 },
             visible: { opacity: 1,y:-12 },
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
            inView={inView}
          />
          <MakeMoreOLogo
            transition={{ duration: 2, ease: "easeOut" }}

            animate={inView ? "visible" : "hidden"}
            variants={{
             hidden: {  opacity: 1,y:0 },
             visible: { opacity: 1,y:12 },
            }}
          />
        </motion.div>
      )}
      <section
        className="flex h-screen w-screen items-center  justify-center opacity-1"
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
            // onMouseOver={() => handleShowScreen("home")}
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

            <div  className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"></div>
            <motion.div
              className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
              style={{ backgroundColor: "#525252" }}
              // onMouseOver={() => handleShowScreen("home")}
              // transition={{ duration: 2, ease: "easeOut" }}
              // animate={!inView ? "visible" : "hidden"}
              // variants={{
              //   hidden: { rotateY: 180, opacity: 0 },
              //   visible: { rotateY: 0, opacity: 1 },
              // }}
              // initial="visible"
            >
              {active && (
                <Image src={logocoll} className="h-36 w-36 rounded-full" alt="logo" />
              )}
            </motion.div>
            {!active&&<motion.div
              onClick={() => { setActive(true); setIsOpen(false) }}
              title="click to activate"
              className="h-16 w-16 absolute bg-white rounded-full flex items-center justify-center shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)] activeBtn"
              transition={{ duration: 2, ease: "easeOut" }}
              // animate={!inView ? "visible" : "hidden"}
              // variants={{
              //   hidden: { rotateY: 180, opacity: 0,x:0 },
              //   visible: { rotateY: 0, opacity: 1,x:12 },
              // }}
              animate={moveLogo}
              variants={{
                hidden: {  opacity: 1,x:0 },
                left: { opacity: 1,x:12 },
                right: { opacity: 1,x:-12 },
                top: { opacity: 1,y:12},
                bottom: { opacity: 1,y:-12 },

              }}
              initial="hidden"
            >
              <div
                className="h-10 w-10 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: "#525252" }}
              ></div>
            </motion.div>}

          </div>
        </Draggable>



        
        {active && (
          <>
            <div
              onMouseOver={() => handleShowScreen("bottom")}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => {setInView(false);setMoveLogo("hidden")}}
              className=" absolute bottom-0 rotate-45"
              style={{
                width: windowSize.height, /// 3.5,
                height: windowSize.height, /// 3.5,
                // backgroundColor: "red",
                bottom: -windowSize.height /1.3,
                borderRadius: 222
              }}
            ></div>
            <div
              // onMouseEnter={() => router.push("/MakeMore")}
              onMouseOver={() => handleShowScreen("top")}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => {setInView(false);setMoveLogo("hidden")}}
              className=" absolute top-0 rotate-45"
              style={{
                width: windowSize.height, /// 3.5,
                height: windowSize.height, /// 3.5,
                // backgroundColor: "red",
                top: -windowSize.height /1.3,
                borderRadius: 222
              }}
            ></div>
            <div
              onMouseOver={() => {
                handleShowScreen("left");
              }}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => {setInView(false);setMoveLogo("hidden")}}
              className=" absolute left-0 rotate-45"
              style={{
                height: windowSize.width / 2,// / 1.5,
                width: windowSize.width / 2,// / 2.9,
                // backgroundColor: "red",
                left: -windowSize.width / 5,
                borderRadius: 20
              }}
            ></div>
            <div
              onMouseOver={() => handleShowScreen("right")}
              onMouseEnter={() => setInView(true)}
              onMouseLeave={() => {setInView(false);setMoveLogo("hidden")}}
              className=" absolute right-0 rotate-45"
              style={{
                // height: windowSize.height / 1.5,
                // width: windowSize.width / 2.9,
                // backgroundColor:"red"
                height: windowSize.width / 2,// / 1.5,
                width: windowSize.width / 2,// / 2.9,
                // backgroundColor: "red",
                right: -windowSize.width / 5,
                borderRadius: 20
              }}
            ></div>
          </>
        )}
        {active && set.size >= 4 && <motion.div transition={{ repeat: 30 }} animate={{
          y: [10, 0, 10]
        }} className=" h-16 w-8 absolute bottom-8 flex items-center justify-center">
          <Image src={darrow} className="h-12 w-8 rounded" alt="info" />
        </motion.div>}
      </section>
      {active && set.size >= 4 && <BeMore />}
      {/* {active && set.size >= 4 && <HomeInfo id={1} />} */}

      {/* <div className=" h-screen flex bg-slate-400 sticky top-0">
        hii i am 
      </div>
      <div className=" h-screen flex bg-black">
        hii i am 
      </div> */}
    </div>
  );
}
