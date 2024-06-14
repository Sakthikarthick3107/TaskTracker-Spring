import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/theme/themeActions';

const Header : React.FC = () => {
    const dispatch = useDispatch();
    const isDark = useSelector((state : RootState) => state.theme.isDark);

    const handleThemeChange = () => {
        dispatch(toggleTheme());
      }

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    },[isDark]);


  return (
    <div className=' z-30  w-full h-12 flex flex-row items-center justify-end px-6 fixed top-0 left-0 drop-shadow-md bg-secondary dark:bg-dark-secondary'>
        <button onClick={handleThemeChange} className='p-2 rounded-md'>{isDark ? 'Dark' : 'Light'}</button>
    </div>
  )
}

export default Header