import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import About from './components/About';
import Service from './components/Service';
import Technologies from './components/Technologies';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/technologies' element={<Technologies/>}/>
      </Routes>
    </div>
  );
}

export default App;
