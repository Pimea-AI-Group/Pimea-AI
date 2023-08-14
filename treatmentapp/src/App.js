import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Treatment/Pages/LogIn';
import Treatment from './Treatment/Pages/Treatment';
import React, { useEffect, useRef } from 'react';
import LandingPage from './Landing/Pages/LandingPage';
import Allergies from './Landing/Pages/Allergies';
import CalandlyLink from './Landing/Components/CalendlyLink';
import AllergyInfo from './Treatment/Pages/AllergyInfo';
import Admin from './Admin/Pages/Admin';

// Constant containing the base audio URL
const audioUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/';
const BackgroundAudio = audioUrl + 'Background+Music.mp3'; 

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <div className='container'>
      <audio src={BackgroundAudio} ref={audioRef} controls autoPlay loop />
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
