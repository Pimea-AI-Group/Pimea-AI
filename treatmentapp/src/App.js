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
  const audioRef = useRef(null);  // Reference to the audio element

  useEffect(() => {
    // Event listener to play audio once user interacts with the document
    const handleUserInteraction = () => {
      if (audioRef && audioRef.current && audioRef.current.paused) {
        audioRef.current.play();
        // Removing the event listener after the audio starts playing
        document.removeEventListener('click', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      // Cleanup to remove the event listener on unmount
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className='container'>
      {/* Audio component without autoPlay to avoid DOMException */}
      <audio src={BackgroundAudio} ref={audioRef} controls loop />
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
