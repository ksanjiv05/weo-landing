import * as React from "react";
import { motion } from "framer-motion"
export enum Direction {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
}
type AnimateObj = {
    x: number,
    y: number
}
interface ILogoProps {
    backgroundColor: string;
    direction: Direction;
    animateObj?: AnimateObj
    interpolate?:number,
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const Logo: React.FunctionComponent<ILogoProps> = ({
    backgroundColor,
    direction,
    animateObj = { x: 0 },
    interpolate,
    onMouseEnter,
}) => {
    // console.log("i",interpolate)
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
    return (
        <motion.div
            style={{
                width: 75,
                height: 75,
                backgroundColor,
                opacity:interpolate&&interpolate*0.05
                // ...directionObj()?.bigCon,
            }}
            className="absolute rounded-full flex items-center  justify-center transition ease-in-out duration-150 "
            animate={animateObj}
            transition={{ delay: 1 }}
            onMouseEnter={onMouseEnter}
        >
            <div
                className="absolute rounded-full"
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor,
                    ...directionObj()?.smallCon,
                }}
            ></div>
            <div className="absolute rounded-full" style={{
                width: 45,
                height: 45,
                backgroundColor: "#fff",
            }}></div>
        </motion.div>
    );
};

export default Logo;
