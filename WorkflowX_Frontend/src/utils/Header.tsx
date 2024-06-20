import React from 'react';
import AnimateText from './CustomTags/AnimateText';

const Header : React.FC = () => {
  return (
    <div className=' z-30  w-full h-12 flex flex-row items-center justify-between px-6 fixed top-0 left-0 drop-shadow-md bg-secondary dark:bg-dark-secondary'>
      <div className='flex flex-row items-center gap-4'>
        
        <p className='font-bruno text-2xl font-medium'>WorkflowX</p>        
      </div>
        
      <AnimateText className='text-xl text-primary font-semibold' duration={200}>Sakthikarthick</AnimateText>
    </div>
  )
}

export default Header