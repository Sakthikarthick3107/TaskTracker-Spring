import Header from './utils/Header';
import NewTask from './utils/NewTask';
import Notification from './utils/CustomTags/Notification';
import TaskDetail from './utils/TaskDetail';
import TaskHub from './pages/TaskHub';
import MainRoutes from './routes/MainRoutes';

function App() {

  

  return (
    <div className='font-poppins h-screen text-text dark:bg-dark-text w-screen'>
      <MainRoutes/>
      <Notification/>
    </div>
  )
}

export default App
