import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Private from './components/Private';
import Company from './components/Company';
import Tours from './components/Tours';
import Pottery from './components/Pottery';
import Janur from './components/Janur';
import HazharatNegishut from './components/HazharatNegishut';



function App() {

  const [width, setWidth] = useState(0);
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-ND4DK7X2' }); // הכנס את ה-GTM שלך כאן
 console.log('Google tag works!') }, []);

  return (
    <div className="App">
     
   
      <BrowserRouter>
       
          <Menu />
     

          <Routes>
            <Route path='/' element={<Home width={width} setWidth={setWidth} />} />
            <Route path='/private' element={<Private width={width} setWidth={setWidth} />} />
            <Route path='/company' element={<Company width={width} setWidth={setWidth} />} />
            <Route path='/tours' element={<Tours width={width} setWidth={setWidth} />} />
            <Route path='/pottery' element={<Pottery width={width} setWidth={setWidth} />} />
            <Route path='/janur' element={<Janur width={width} setWidth={setWidth} />} />
            <Route path='/hazharatNegishut' element={<HazharatNegishut />} />
      

          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
