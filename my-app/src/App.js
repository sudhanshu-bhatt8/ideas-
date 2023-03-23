
import './App.css';
import Navbar from './components/Navbar';
import Aler from './components/Aler';
import Textform from './components/Textform'
import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import About from './components/About';
function App() {
  const [mode, setmode] = useState('light') // whether dark mode is enable or not 
  const [alert, setalert] = useState(null) // whether dark mode is enable or not 
  function showalert(message, type) {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 5000);
  }
  function togglemode() {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#031a3c';
      document.body.style.color = 'white';
      showalert("dark mode has been enabled ", "Success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = '#ec7a7a';
      document.body.style.color = 'white'
      showalert("light mode has been enable", "Success")
    }
  }
  return (
    <>
      <div className='mainpage'>
        <Navbar title="text" mode={mode} togglemode={togglemode} />
        <Aler alert={alert} className=' alertbox' />
        <div className="container" mode={mode} togglemode={togglemode}>
        <Textform showalert={showalert} mode={mode} />
          {/* <BrowserRouter>
            <Routes>
              <Route path='/' element={}></Route>
              <Route path='/About' element={<About></About>}></Route>
            </Routes>
          </BrowserRouter> */}
        </div>
      </div>
    </>
  );
}

export default App;
