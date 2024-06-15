import Header from './utils/Header';
import Home from './pages/Home';
import NewTask from './utils/NewTask';
import Notification from './utils/CustomTags/Notification';
import TaskDetail from './utils/TaskDetail';
// import { useSelector } from 'react-redux';
// import { RootState } from './redux/store';

function App() {

  

  return (
    <div className=' font-poppins text-text dark:text-dark-text h-[100vh] w-[100vw] bg-background dark:bg-dark-background p-16'>
      <Header/>
      <Home/>
      <NewTask />
      <Notification/>
      <TaskDetail/>
    </div>
  )
}

export default App
