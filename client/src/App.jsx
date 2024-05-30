import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './app.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        <Outlet />
      </div>
    </>
  )
}

export default App
