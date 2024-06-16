import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { setPrimaryTheme, toggleTheme } from '../redux/theme/themeActions';
import { DarkMode, LightMode, MenuRounded } from '@mui/icons-material';
import Circle from './CustomTags/Circle';
import Tooltip from './CustomTags/Tooltip';
import { handleOptionsDrawer } from '../redux/UIManagement/UiActions';

const Header : React.FC = () => {
    const dispatch = useDispatch();
    const { isDark , primary } = useSelector((state : RootState) => state.theme);

    const handleThemeChange = () => {
        dispatch(toggleTheme());
    }

    const handlePrimaryChange = (primary : string) => {
      dispatch(setPrimaryTheme(primary));
    } ;

    const handleOptionDrawer = () => {
      dispatch(handleOptionsDrawer());
    }

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
      <div className='flex flex-row items-center gap-2'>
        
        <MenuRounded onClick={handleOptionDrawer} />

        <Tooltip message='Set Blue as Primary' position='bottom'>
          <Circle active = {primary === '#24689c'} onClick={() => handlePrimaryChange('#24689c')} color='#24689c' />
        </Tooltip>
        
        <Tooltip message='Set Red as Primary' position='bottom'>
          <Circle active = {primary === '#aa0f44'} onClick={() => handlePrimaryChange('#aa0f44')} color='#aa0f44' />
        </Tooltip>
        
        <Tooltip message='Set Green as Primary' position='bottom'>
          <Circle active = {primary === '#006400'} onClick={() => handlePrimaryChange('#006400')} color='#006400' />
        </Tooltip>
        
      </div>
        <Tooltip message='Switch Theme' position='left'>
        <button onClick={handleThemeChange} className='p-2 rounded-md'>
          {isDark ? <LightMode/> : <DarkMode/>}
        </button>
        </Tooltip>
    </div>
  )
}

export default Header