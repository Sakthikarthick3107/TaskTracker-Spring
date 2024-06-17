import Lottie from 'lottie-react'
import React from 'react';
import teamLottie from '../assets/Team.json';
import AnimateText from '../utils/CustomTags/AnimateText';
import Button from '../utils/CustomTags/Button';
import { ArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='w-screen  h-screen grid grid-cols-2 items-center overflow-hidden justify-around bg-background'>
        <AnimateText duration={100} className='w-w-full h-full flex flex-col items-center justify-center border-0 border-r'>
            <Lottie animationData={teamLottie}  loop={true}/>
        </AnimateText>
        <div className='w-full gap-10  text-text h-full drop-shadow-md rounded-r-lg p-4 flex flex-col  justify-center'>
            <div>   
                <AnimateText duration={300} className='text-5xl font-bruno my-2 font-bold'>WorkflowX</AnimateText>
                <AnimateText duration={1000} className=''>Empower your workflow. Simplify tasks, enhance productivity, and stay organized effortlessly.</AnimateText>
            </div>
            
            <div>
                <Link to={'/tasks'}>
                <AnimateText duration={1200}>
                    <button className='bg-[#24689c] px-4 py-2 text-text2 shadow-lg drop-shadow-lg rounded-md'>
                            Resume your journey
                            <ArrowRight/>
                    </button>
                </AnimateText>
                </Link>
            </div>
            
        </div>

    </div>
  )
}

export default Welcome