import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experince from './components/Experince';
import Skils from './components/Skils';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init()    
  }, [])
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
        <Experince/>
        <Skils/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
