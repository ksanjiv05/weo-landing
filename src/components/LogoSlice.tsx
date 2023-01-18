import * as React from "react";
import { motion } from "framer-motion";
export enum Direction {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
}
type AnimateObj = {
  x: number;
  y: number;
};
interface ILogoSliceProps {
  backgroundColor: string;
  direction: Direction;
  animateObj?: AnimateObj;
  onMouseEnter: (direction: Direction) => void;
  isShow?:Boolean
}



const LogoSlice: React.FunctionComponent<ILogoSliceProps> = ({
  backgroundColor,
  direction,
  animateObj = { x: 0,y:0 },
  onMouseEnter,
  isShow = false
}) => {
  const directionObj = () => {
    switch (direction) {
      case 0:
        return {
          bigCon: {
            top: -15,
          },
          smallCon: {
            top: -25,
          },
        };
      case 1:
        return {
          bigCon: {
            bottom: -15,
          },
          smallCon: {
            bottom: -25,
          },
        };
      case 2:
        return {
          bigCon: {
            left: -15,
          },
          smallCon: {
            left: -25,
          },
        };
      case 3:
        return {
          bigCon: {
            right: -15,
          },
          smallCon: {
            right: -25,
          },
        };
    }
  };
  const [hide,setHide] = React.useState({x:0,y:0})

  React.useEffect(()=>{
    setHide(animateObj)
    if(!isShow){
    setTimeout(()=>{
      setHide({x:0,y:0})
      // console.log("setHide")
    },1200)
  }
  },[animateObj])
  return (
    <motion.div
      style={{
        width: 75,
        height: 75,
        backgroundColor,
        // ...directionObj()?.bigCon,
      }}
      className="absolute rounded-full flex items-center  justify-center transition ease-in-out duration-150 "
      animate={hide}
      transition={{ delay: 1 }}
      onMouseOver={(e) => {
        console.log("mouseOver",e.target)
        e.preventDefault();
        e.stopPropagation();
        onMouseEnter(direction);
      }}
    >
      {/* <div
        className="w-36 h-36 rounded absolute cursor-pointer bg-transparent"
        onMouseOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onMouseEnter(direction);
        }}
      ></div> */}
      <div
        className="absolute rounded-full"
        style={{
          width: 20,
          height: 20,
          backgroundColor,
          ...directionObj()?.smallCon,
        }}
      ></div>
    </motion.div>
  );
};

export default LogoSlice;
