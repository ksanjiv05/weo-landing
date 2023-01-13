import * as React from 'react';
import { COLORS } from '../utils/constants';
import { motion, useAnimation } from "framer-motion"
import { useWidth } from '../hook';
import { useRouter } from 'next/router';

const OLogo = () => {
 const router = useRouter()
  return <div className='flex-1 p-4 flex items-end  justify-center max-sm:justify-center'>
    <div className='h-52 w-52 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center'>
      <div className='h-40 w-40 absolute rounded-full border-2 flex justify-center' style={{ backgroundColor: COLORS.TOP }}>
        <div className='h-4 w-4 absolute rounded-full top-3 bg-white'>
        </div>
        <div onMouseEnter={()=>router.push("/")} className='h-12 w-12 absolute bg-white rounded-full flex items-center justify-center top-8'>
          <div className='h-8 w-8 absolute rounded-full border-2 flex items-center justify-center' style={{ backgroundColor: COLORS.TOP }}>
          </div>
        </div>
      </div>
    </div>

  </div>
}

export interface IKeepMoreProps {
}

export default function KeepMore(props: IKeepMoreProps) {
  const animate = useAnimation();
  const width = useWidth()
  const [inView ,setInView ] = React.useState(false)
 
  const variants = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      scale: 0,
      x: width
    }
  };
  React.useEffect(()=>{
    setInView(true)
  },[])
  return (<div style={{ overflow: "hidden" }}>
    <motion.div
      transition={{ duration: 2, ease: 'easeOut' }}
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      initial='hidden'
      className='flex flex-col h-screen max-sm:flex-col opacity-0 scale-50' style={{ backgroundColor: COLORS.TOP, }}>
      <div className='flex-1 flex'>
        <OLogo />
      </div>

      <div className='flex-1 p-4 flex-row max-sm:flex-row flex max-sm:block'>
        <div className='flex-1'></div>
        <div className='flex-1'>
        <div className='flex  max-sm:items-center max-sm:justify-center'>
          <h1 className=' text-8xl font-bold' style={{ color: "#ffffff4a" }} >make more</h1>
        </div>
        {/* <div className='flex max-sm:items-center max-sm:justify-center'>
          <h1 className=' text-8xl font-bold' style={{ color: "#ffffff4a" }}>more</h1>
        </div> */}
        <div className='flex max-sm:items-center max-sm:justify-center mt-4'>
          <p style={{ color: "#ffffff",textAlign:"right" }}>Options open to Collected and Share the Best Offer</p>
        </div>
        </div>
      </div>
    </motion.div></div>
  );
}
