import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { setPrimaryTheme, toggleTheme } from '../redux/theme/themeActions';
import { DarkMode, LightMode, MenuRounded } from '@mui/icons-material';
import Circle from './CustomTags/Circle';
import Tooltip from './CustomTags/Tooltip';
import { handleOptionsDrawer } from '../redux/UIManagement/UiActions';
import AnimateText from './CustomTags/AnimateText';

const Header : React.FC = () => {
    const dispatch = useDispatch();
    const { isDark , primary } = useSelector((state : RootState) => state.theme);
    const isDrawerOpen = useSelector((state : RootState) => state.ui.areOptionsOpen);
    
    const handleThemeChange = () => {
        dispatch(toggleTheme());
    }

    // const handlePrimaryChange = (primary : string) => {
    //   dispatch(setPrimaryTheme(primary));
    // } ;

    // const handleOptionDrawer = () => {
    //   dispatch(handleOptionsDrawer());
    // }

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    },[isDark]);

    useEffect(() =>{
      document.documentElement.style.setProperty('--color-primary' , primary)
    },[primary])


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