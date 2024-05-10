import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/shared/NavBar'

function App() {

  return (
    <>
    <div className=' container_viewport bg-[#262739e7] h-[65px]'>
        <NavBar></NavBar>
    </div>
    <div className='bg-[#0e0f24]'>
    <Outlet />
    </div>
    </>
  )
}

export default App;
