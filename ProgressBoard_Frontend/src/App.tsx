import Header from './utils/Header';
import NewTask from './utils/NewTask';
import Notification from './utils/CustomTags/Notification';
import TaskDetail from './utils/TaskDetail';
import TaskHub from './pages/TaskHub';
import MainRoutes from './routes/MainRoutes';

function App() {

  

  return (
    <div className='font-poppins  text-text dark:text-dark-text h-[100vh] w-[100vw] bg-background dark:bg-dark-background p-16'>
      <MainRoutes/>
      <Notification/>
    </div>
  )
}

export default App
