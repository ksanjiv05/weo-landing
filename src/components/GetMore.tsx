import * as React from "react";
import { COLORS } from "../utils/constants";
import { motion, useAnimation } from "framer-motion";
import { useWidth } from "../hook";
import { useRouter } from "next/router";

const OLogo = () => {
  return (
    <div className="flex-1 p-4 flex items-start  justify-center  max-sm:justify-center">
      <div className="h-52 w-52 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center">
        <div
          className="h-40 w-40 absolute rounded-full border-2 flex justify-center"
          style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
        >
          <div className="h-4 w-4 absolute rounded-full top-3 bg-white"></div>
          <div className="h-12 w-12 absolute bg-white rounded-full flex items-center justify-center top-8">
            <div
              className="h-8 w-8 absolute rounded-full border-2 flex items-center justify-center"
              style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export interface IGetMoreProps {}

// export default function GetMore(props: IGetMoreProps) {
//   const router = useRouter();

//   const width = useWidth();
//   const [inView, setInView] = React.useState(false);
//   const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

//   const variants = {
//     visible: { y: 0 },
//     hidden: {
//       // opacity: 0,
//       // scale: 0,
//       y: 900,
//     },
//   };
//   React.useEffect(() => {
//     setInView(true);
//   }, []);

//   React.useEffect(() => {
//     const handleResize = () => {
//       console.log("use effec", window.Event.name);
//       return setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener("load", handleResize);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <div style={{ overflow: "hidden" }}>
//       <motion.div
//         transition={{ duration: 2, ease: "easeOut" }}
//         animate={inView ? "visible" : "hidden"}
//         variants={variants}
//         initial="hidden"
//         className="flex flex-col h-screen max-sm:flex-col "
//         style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
//       >
//         <div className="flex-1 p-4 flex-row max-sm:flex-row flex max-sm:block">
//           <div className="flex-1 flex items-end flex-col ">
//             <div className="flex-1 flex items-end  max-sm:items-center max-sm:justify-center">
//               <h1
//                 className=" text-8xl font-bold"
//                 style={{ color: "#ffffff4a" }}
//               >
//                 get more
//               </h1>
//             </div>

//             <div className="flex max-sm:items-center max-sm:justify-center mt-4">
//               <p style={{ color: "#ffffff", textAlign: "right" }}>
//                 Options open to Collected and Share the Best Offer
//               </p>
//             </div>
//           </div>
//           <div className="flex-1 "></div>
//         </div>
//         <div className="flex-1 flex">
//           <OLogo />
//         </div>

//         <div
//           className=" absolute top-0 flex items-center justify-center"
//           style={{
//             width: windowSize.width,
//             height: windowSize.height / 4.5,
//             // backgroundColor: "red",
//           }}
//           onMouseEnter={() => {setInView(false)}}

//         >
//           <div
//             // onMouseEnter={() => router.push("/")}
//             className=" absolute top-0 flex self-center"
//             style={{
//               width: windowSize.width / 2.5,
//               height: windowSize.height / 4.5,
//               backgroundColor: "red",
//             }}
//           ></div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

export const GetMoreTextElements = ({ inView=false }) => {
  return (
    <motion.div className="p-4 flex-col  max-sm:flex-row flex max-sm:block justify-center items-end">
      <motion.div
        transition={{ duration: 2, ease: "easeOut" }}
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { y: -200 },
          hidden: { y: 900 },
        }}
        initial="hidden"
        className="flex max-sm:items-center max-sm:justify-center"
      >
        <h1 className=" text-8xl font-bold" style={{ color: "#ffffff4a" }}>
          get more
        </h1>
      </motion.div>

      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { y: -200, opacity: 1 },
          hidden: { y: -200, opacity: 0 },
        }}
        initial="hidden"
        transition={{ delay: 2, duration: 2, ease: "easeOut" }}
        className="flex max-sm:items-center max-sm:justify-center mt-4 text-center"
      >
        <p style={{ color: "#ffffff" }}>2-Way Negotiable Custom Offers!</p>
      </motion.div>
    </motion.div>
  );
};

export const GetMoreOLogo = (props: any) => {
  return (
    <div className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center">
      <motion.div
        className="h-36 w-36 absolute rounded-full border-2 flex items-center justify-center"
        style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
        // {...props}
      >
        <div className="h-4 w-4 absolute rounded-full top-2 bg-white"></div>
        {/* <div className="h-12 w-12 absolute bg-white rounded-full flex items-center justify-center top-8">
          <div
            className="h-8 w-8 absolute rounded-full border-2 flex items-center justify-center"
            style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
          ></div>
        </div> */}
        <motion.div
          title="click to activate"
          className="h-16 w-16 absolute bg-white rounded-full flex items-center justify-center shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)] activeBtn"
          {...props}
          initial="hidden"
        >
          <div
            className="h-10 w-10 absolute rounded-full shadow-[inset_0_0px_10px_rgba(0,0,0,0.25)]"
            style={{ backgroundColor: COLORS.BOTTOM_COLOR }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};
