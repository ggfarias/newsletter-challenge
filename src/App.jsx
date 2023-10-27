import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import InitialPage from './pages/InitialPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-[#36384D] w-screen h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/success' element={<SuccessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
