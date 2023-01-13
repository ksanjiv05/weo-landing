import Image from 'next/image';
import * as React from 'react';
import logocoll from "../../../public/logocoll.png"
import Draggable from 'react-draggable';
import { COLORS, TOGGAL_WIDTH, WIDTH } from '../../utils/constants';
import LogoSlice, { Direction } from '../../components/LogoSlice';
import Logo from '../../components/Logo';
import { useHeight, useWidth } from '../../hook';
import Link from 'next/link';
// import {  useRouter } from 'next/navigation';
import { useRouter } from 'next/router';
import { motion } from "framer-motion"

export interface IHomeIndexProps {
}

const LOGO = 2 * 75;
const LIMIT = 150;

function throttle(cb: Function, delay = 250) {
  let shouldWait = false

  return () => {
    if (shouldWait) return

    cb()
    shouldWait = true
    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}

export function HomeIndex(props: IHomeIndexProps) {
  const router = useRouter()
  const [initialCord, setInitialCord] = React.useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 })
  // const width = useWidth();
  // const height = useHeight();

  const [interpolate, setInterpolate] = React.useState(LIMIT)
  const [eventExc, setEventExc] = React.useState(false)
  React.useEffect(() => {

    const handleResize = () => { console.log("use effec", window.Event.name); return setWindowSize({ width: window.innerWidth, height: window.innerHeight }) };
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);

  }, [])

  const onMouseEnter = (direction: Direction) => {

    if (!eventExc) {
      console.log("onMouseEnter", direction)
      setEventExc(true)
      
      switch (direction) {
        case Direction.LEFT:
          router.push("/EarnMore")
          return
        case Direction.RIGHT:
          router.push("/KeepMore")
          return
        default:
          router.push("/")
      }
    }
    setTimeout(() => {
      console.log("ex fal")
      setEventExc(false)
    }, 500)
  }

  return (
    <motion.div transition={{ duration: 2, ease: 'easeOut' }} animate={{ opacity: 1 }} className='flex h-screen items-center  justify-center opacity-0'>
      {windowSize.height && windowSize.width && <>
        <Logo interpolate={interpolate} backgroundColor={COLORS.LEFT_COLOR} direction={Direction.LEFT} animateObj={{ x: -(windowSize.width / 2) + LOGO / 2, y: 0 }} />
        <Logo interpolate={interpolate} backgroundColor={COLORS.RIGHT_COLOR} direction={Direction.RIGHT} animateObj={{ x: (windowSize.width / 2) - LOGO / 2, y: 0 }} />
        <Logo interpolate={interpolate} backgroundColor={COLORS.TOP} direction={Direction.TOP} animateObj={{ x: 0, y: -(windowSize.height / 2) + LOGO / 2 }} />
        <Logo interpolate={interpolate} backgroundColor={COLORS.BOTTOM_COLOR} direction={Direction.BOTTOM} animateObj={{ x: 0, y: (windowSize.height / 2) - LOGO / 2 }} />
      </>
      }
      <Draggable
        defaultPosition={initialCord}
        position={initialCord}
        onStart={(e, data) => {
          // console.log("onStart", data)
        }}
        onDrag={(e, data) => {
          if (Math.abs(data.x) <= LIMIT)
            setInterpolate(LIMIT / Math.abs(data.x))
          else
            router.push("/KeepMore")
        }}
        onStop={e => {
          setInitialCord(initialCord)
          setInterpolate(LIMIT)
        }}
      >
        <div className='h-48 w-48 absolute flex items-center  justify-center'>

          <LogoSlice onMouseEnter={onMouseEnter} backgroundColor={COLORS.LEFT_COLOR} direction={Direction.LEFT} animateObj={{ x: -75, y: 0 }} />
          <LogoSlice onMouseEnter={onMouseEnter} backgroundColor={COLORS.RIGHT_COLOR} direction={Direction.RIGHT} animateObj={{ x: 75, y: 0 }} />
          <LogoSlice onMouseEnter={onMouseEnter} backgroundColor={COLORS.TOP} direction={Direction.TOP} animateObj={{ x: 0, y: -75 }} />
          <LogoSlice onMouseEnter={onMouseEnter} backgroundColor={COLORS.BOTTOM_COLOR} direction={Direction.BOTTOM} animateObj={{ x: 0, y: 75 }} />

          <div className='h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]'></div>
          <div className='h-36 w-36 absolute rounded-full border-2 flex items-center justify-center' style={{ backgroundColor: "#525252" }}>
            <Image src={logocoll} className="h-28 w-28" alt='logo' />
          </div>

        </div>
      </Draggable>

    </motion.div>
  );
}
