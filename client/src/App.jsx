import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './app.css'
import "./dark.css";
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkMode.jsx';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { dispatch } = useContext(DarkModeContext);
  return (
    <>
      <Navbar />
      <div className={darkMode ? "dark app" : "app"}>
        <div className='container mt-4'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
