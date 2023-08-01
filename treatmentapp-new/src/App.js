import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Treatment from './Pages/Treatment';
import React, { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import BackgroundMusic from './Background Music.mp3';
import Allergies from './Pages/Allergies';
import CalandlyLink from './Components/CalendlyLink';
import AllergyInfo from './Pages/AllergyInfo';
import Admin from './Pages/Admin';

function App() {
  return (
    <div id='appDiv'>
      <audio src={BackgroundMusic} controls />
      <audio
        src='https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Background Music.mp3'
        alt="BackgroundMusic"
      />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/allergies' element={<Allergies />} />
          <Route path='/calandly' element={<CalandlyLink />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/allergyinfo" element={<AllergyInfo />} />
          <Route path="/treatment" element={<Treatment />} />

          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
