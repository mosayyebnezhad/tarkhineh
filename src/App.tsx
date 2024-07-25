import React from 'react';
// import Header from './Components/header/header';
import { Routes, Route } from 'react-router-dom';
import Notfound from './Pages/Notfound/notfound';
import Home from './Pages/home/home';


function App() {
  return (
    <>
      <Routes>

        <Route index element={<Home />} />

        <Route path="*" element={<Notfound />} />

      </Routes>


      {/* <Notfound /> */}
    </>
  );
}

export default App;
