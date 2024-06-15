import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { handleNotification } from '../../redux/UIManagement/UiActions';
import { ErrorOutline, ThumbUp, WarningAmber } from '@mui/icons-material';



const Notification = () => {

    const { message , status } = useSelector((state : RootState) => state.ui.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        if(message.length > 0){
            setTimeout(() => {
                dispatch(handleNotification('' , ''));
            },4000);
        }
    },[message])

  return (
    <div className={`fixed p-4 flex flex-row items-center gap-4 justify-center text-lg
                    top-5 left-1/3 
                     bg-text2/60 
                     dark:bg-dark-text2/60 
                     w-1/3 h-[8vh] drop-shadow-md 
                     rounded-2xl  z-[100]
                     transition duration-300 ease-in-out
                     ${message.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}
                     `
                    }>
        {status === 'success' ? 
              <ThumbUp style={{color : '#006400'}} /> : status ==='error' ?  
                  <WarningAmber style={{color : '#aa0f44'}} /> : status ==='warning' ? 
                        <ErrorOutline style={{ color : '#cc3300'}}  /> : '' }
        <p>{message}</p>
    </div>
  )
}

export default Notification