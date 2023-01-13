import * as React from 'react';
import { COLORS } from '../utils/constants';
import { motion } from "framer-motion"
import { useWidth } from '../hook';
import { useRouter } from 'next/router';

const OLogo = () => {
    const router = useRouter()
  return <div className='flex-1 p-4 flex items-center  justify-start max-sm:justify-center'>
    <div className='h-52 w-52 absolute bg-white rounded-full shadow-[inset_0_0px_16px_rgba(0,0,0,0.45)] flex items-center justify-center'>
      <div className='h-40 w-40 absolute rounded-full border-2 flex items-center' style={{ backgroundColor: COLORS.LEFT_COLOR }}>
        <div className='h-4 w-4 absolute rounded-full right-3 bg-white'>
        </div>
        <div onMouseEnter={()=>router.push("/")} className='h-12 w-12 absolute bg-white rounded-full flex items-center justify-center right-8'>
          <div className='h-8 w-8 absolute rounded-full border-2 flex items-center justify-center' style={{ backgroundColor: COLORS.LEFT_COLOR }}>
          </div>
        </div>
      </div>
    </div>

  </div>
}

export interface IEarnMoreProps {
}

export default function EarnMore(props: IEarnMoreProps) {
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
      className='flex h-screen max-sm:flex-col opacity-0 scale-50' style={{ backgroundColor: COLORS.LEFT_COLOR, }}>
      

      <div className='flex-1 p-4 flex-col  max-sm:flex-row flex max-sm:block justify-center items-end'>
        <div className='flex max-sm:items-center max-sm:justify-center'>
          <h1 className=' text-8xl font-bold' style={{ color: "#ffffff4a" }} >earn</h1>
        </div>
        <div className='flex max-sm:items-center max-sm:justify-center'>
          <h1 className=' text-8xl font-bold' style={{ color: "#ffffff4a" }}>more</h1>
        </div>
        <div className='flex max-sm:items-center max-sm:justify-center mt-4 text-center'>
          <p style={{ color: "#ffffff" }}>Options open to Collected and Share the Best Offer</p>
        </div>
      </div>
      <div className='flex-1 flex'>
        <OLogo />
      </div>
    </motion.div></div>
  );
}
