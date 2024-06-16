import Lottie from 'lottie-react'
import React from 'react';
import teamLottie from '../assets/Team.json';
import AnimateText from '../utils/CustomTags/AnimateText';
import Button from '../utils/CustomTags/Button';
import { ArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='w-full border h-full flex flex-row items-center justify-around bg-background   drop-shadow-lg shadow-xl rounded-lg'>
        <AnimateText duration={100} className='w-1/2 h-full flex flex-col items-center justify-center border-0 border-r'>
            <Lottie animationData={teamLottie}  loop={true}/>
        </AnimateText>
        <div className='w-1/2  gap-10  text-text h-full drop-shadow-md rounded-r-lg p-4 flex flex-col  justify-center'>
            <div>   
                <AnimateText duration={300} className='text-3xl  font-bold'>WorkflowX</AnimateText>
                <AnimateText duration={1000} className=''>Empower your workflow. Simplify tasks, enhance productivity, and stay organized effortlessly.</AnimateText>
            </div>
            
            <div className='w-full'>
                <Link to={'/tasks'}>
                <AnimateText duration={1200}>
                    <Button  className='bg-orange-800'>
                            Resume your journey
                            <ArrowRight/>
                    </Button>
                </AnimateText>
                </Link>
            </div>
            
        </div>

    </div>
  )
}

export default Welcome