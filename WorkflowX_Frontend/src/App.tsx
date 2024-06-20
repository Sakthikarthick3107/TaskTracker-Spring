import Notification from './utils/CustomTags/Notification';
import MainRoutes from './routes/MainRoutes';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useEffect } from 'react';

function App() {

  const { isDark , primary } = useSelector((state : RootState) => state.theme);
    

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
    <div className='font-poppins h-screen text-text dark:bg-dark-text w-screen'>
      <MainRoutes/>
      <Notification/>
    </div>
  )
}

export default App
