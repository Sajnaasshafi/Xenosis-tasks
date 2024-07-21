import './App.scss';
import {Routes, Route} from 'react-router-dom'


import Home from './containers/Home';
import Contact from './containers/Contact';
import About from './containers/About';
import Projects from './containers/Projects';
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">


      <Navbar/>
    <div className='App__main-page-content'>
    <Routes>
      <Route index path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>  
    </div>  
    </div>
  );
}

export default App;
