import * as React from "react";
import { COLORS } from "../utils/constants";
import { motion } from "framer-motion";


// const OLogo = () => {
//   const router = useRouter()
//   return <div className='flex-1 p-4 flex items-center  justify-start max-sm:justify-center'>
//     <div className='h-52 w-52 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center'>
//       <div className='h-40 w-40 absolute rounded-full border-2 flex items-center' style={{ backgroundColor: COLORS.LEFT_COLOR }}>
//         <div className='h-4 w-4 absolute rounded-full right-3 bg-white'>
//         </div>
//         <div className='h-12 w-12 absolute bg-white rounded-full flex items-center justify-center right-8'>
//           <div className='h-8 w-8 absolute rounded-full border-2 flex items-center justify-center' style={{ backgroundColor: COLORS.LEFT_COLOR }}>
//           </div>
//         </div>
//       </div>
//     </div>

//   </div>
// }

// export interface IEarnMoreProps {
//     onMove:React.MouseEventHandler<HTMLDivElement> | undefined,
//     show:Boolean
// }

// export default function EarnMore({onMove,show}: IEarnMoreProps) {
//   const width = useWidth()
//   const [inView, setInView] = React.useState(false)
//   const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
//   const router = useRouter()
//   const variants = {
//     visible: {  x: 0 },
//     hidden: {
//       // opacity: 0,
//       // scale: 0,
//       x: -1600
//     }
//   };
//   React.useEffect(() => {
//     setInView(true)
//   }, [])

//   React.useEffect(() => {
//     const handleResize = () => {
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

//   return (<div style={{ overflow: "hidden" }}>
//     <motion.div
//       transition={{ duration: 2, ease: 'easeOut' }}
//       animate={inView ? 'visible' : 'hidden'}
//       variants={variants}
//       initial='hidden'
//       className='flex h-screen max-sm:flex-col' style={{ backgroundColor: COLORS.LEFT_COLOR, }}>

//       <div className='flex-1 p-4 flex-col  max-sm:flex-row flex max-sm:block justify-center items-end'>
//         <div className='flex max-sm:items-center max-sm:justify-center'>
//           <h1 className=' text-8xl font-bold' style={{ color: "#ffffff4a" }} >earn</h1>
//         </div>
//         <div className='flex max-sm:items-center max-sm:justify-center'>
//           <h1 className=' text-8xl font-bold' style={{ color: "#ffffff4a" }}>more</h1>
//         </div>
//         <div className='flex max-sm:items-center max-sm:justify-center mt-4 text-center'>
//           <p style={{ color: "#ffffff" }}>Options open to Collected and Share the Best Offer</p>
//         </div>
//       </div>
//       <div className='flex-1 flex'>
//         <OLogo />
//       </div>

//       <div
//         className="absolute right-0  flex items-center justify-center"
//         style={{
//           height: windowSize.height,
//           width:windowSize.width / 4,
//         }}
//         onMouseEnter={()=>{setInView(false)}}
//       >
//         <div
//         //   onMouseEnter={() => router.push("/")}
//           className=" absolute right-0"
//           style={{
//             height: windowSize.height /1.2,
//             width:windowSize.width / 4,
//           }}
//         ></div>
//       </div>
//     </motion.div>

//   </div>
//   );
// }

export const EarnMoreTextElements = (props:any) => {
  return (
    <motion.div
      
      className="p-4 flex-col  max-sm:flex-row flex max-sm:block justify-center items-end"
    >
      <motion.div {...props} className="flex max-sm:items-center max-sm:justify-center">
        <h1 className=" text-8xl font-bold" style={{ color: "#ffffff4a" }}>
          earn
        </h1>
      </motion.div>
      <motion.div {...props} className="flex max-sm:items-center max-sm:justify-center">
        <h1 className=" text-8xl font-bold" style={{ color: "#ffffff4a" }}>
          more
        </h1>
      </motion.div>
      <motion.div {...props} transition={{ duration: 4, ease: "easeOut" }} className="flex max-sm:items-center max-sm:justify-center mt-4 text-center">
        <p style={{ color: "#ffffff" }}>
          Prepaid Customer Commitments.
        </p>
      </motion.div>
    </motion.div>
  );
};

export const EarnMoreOLogo = (props: any) => {
  return (
    <div
      
      className="h-48 w-48 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center"
    >
      <motion.div
        className="h-36 w-36 absolute rounded-full border-2 flex items-center"
        style={{ backgroundColor: COLORS.LEFT_COLOR }}
        {...props}
      >
        <div className="h-4 w-4 absolute rounded-full right-3 bg-white"></div>
        <div className="h-12 w-12 absolute bg-white rounded-full flex items-center justify-center right-8">
          <div
            className="h-8 w-8 absolute rounded-full border-2 flex items-center justify-center"
            style={{ backgroundColor: COLORS.LEFT_COLOR }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};