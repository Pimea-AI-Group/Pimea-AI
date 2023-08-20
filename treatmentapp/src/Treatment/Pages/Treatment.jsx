import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Relaxed from '../Components/Relaxed';
import AntiAllergen from '../Components/AntiAllergen';
import Finish from '../Components/Finish';
let soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/';
const allergyUrl = `${soundUrl}Allergy/`;

export default function Treatment() {
  const location = useLocation();
  const allergy = location.state.allergy;
  const [antiAllergen, setAntiAllergen] = useState(null);
  const audioRef = useRef();
  const [flag, setFlag] = useState(false);
  const [relaxIndex, setRelaxIndex] = useState(0);

  if (location.state.user.gender === 'female') {
    soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Female/';
  }
  else {
    soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Male/'
  }
  const Ready = `${soundUrl}Ready+To+Continue.mp3`;

  const allergies = [
    { name: 'Cat', audio: `${allergyUrl}Cat.mp3`, screenName: 'חתולים' },
    { name: 'Dog', audio: `${allergyUrl}Dog.mp3`, screenName: 'כלבים' },
    { name: 'Grass', audio: `${allergyUrl}Grass.mp3`, screenName: 'דשא' },
    { name: 'Dust Bunny', audio: `${allergyUrl}Dust Bunny.mp3`, screenName: 'קרדית האבק' },
    { name: 'Pine Bloom', audio: `${allergyUrl}Pine Bloom.mp3`, screenName: 'פריחת עץ האורן' },
    { name: 'Hay Fever', audio: `${allergyUrl}Hay Feber.mp3`, screenName: 'קדחת השחת' },
    { name: 'Latex', audio: `${allergyUrl}Latex.mp3`, screenName: 'לאטקס' }
  ];

  const allergySound = allergies.find(a => a.name === allergy).audio;

  const relaxSounds = [`${soundUrl}Relax+1.mp3`, `${soundUrl}Relax+2.mp3`];
  const soundFiles = [
    [
      `${soundUrl}IntroPart1.mp3`,
      allergySound,
      `${soundUrl}IntroPart2.mp3`
    ],
    [
      `${soundUrl}IntroPart3.mp3`,
      allergySound,
      `${soundUrl}IntroPart4.mp3`,
      allergySound,
      `${soundUrl}IntroPart5.mp3`,
      `${soundUrl}IdentifyingTheDominantSense6.mp3`,
      allergySound,
      `${soundUrl}IdentifyingTheDominantSense7.mp3`,
      allergySound,
      `${soundUrl}IdentifyingTheDominantSense8.mp3`,
      allergySound,
      `${soundUrl}IdentifyingTheDominantSense9.mp3`,
      allergySound,
      Ready
    ],
    [
      `${soundUrl}IdentifyingAnti-Allergen11.mp3`,
      allergySound,
      `${soundUrl}IdentifyingAnti-Allergen12.mp3`,
      allergySound,
      `${soundUrl}IdentifyingAnti-Allergen13.mp3`,
      allergySound,
      `${soundUrl}IdentifyingAnti-Allergen14.mp3`,
      `${soundUrl}GuidedRelaxation2-15.mp3`,
      Ready
    ],
    [
      `${soundUrl}ExpandTheAnti-AllergenExperience16.mp3`,
      antiAllergen,
      `${soundUrl}ExpandTheAnti-AllergenExperience17.mp3`,
      antiAllergen,
      `${soundUrl}ExpandTheAnti-AllergenExperience18.mp3`,
      allergySound,
      `${soundUrl}ProtectiveImagery19.mp3`,
      Ready
    ],
    [
      `${soundUrl}MemoryOfAllergyResponse1-20.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection1-21.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection1-22.mp3`,
      `${soundUrl}FinishingMemory1-23.mp3`,
      `${soundUrl}MemoryOfAllergyResponse2-24.mp3`,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection2-25.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection2-26.mp3`,
      antiAllergen,
      `${soundUrl}FinishingMemory2-27.mp3`,
      allergySound,
      `${soundUrl}FinishingMemory2-28.mp3`,
      antiAllergen,
      `${soundUrl}MemoryOfAllergyResponse3-29.mp3`,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection3-30.mp3`,
      `${soundUrl}FinishingMemory3-31.mp3`,
      antiAllergen,
      `${soundUrl}FinishingMemory3-32.mp3`,
      allergySound,
      `${soundUrl}FinishingMemory3-33.mp3`,
      allergySound,
      `${soundUrl}FinishingMemory3-34.mp3`,
      allergySound,
      `${soundUrl}FinishingMemory3-35.mp3`,
      allergySound,
      `${soundUrl}FinishingMemory3-36.mp3`,
      antiAllergen,
      `${soundUrl}FinishingMemory3-37.mp3`,
      `${soundUrl}FutureSituation38.mp3`,
      allergySound,
      `${soundUrl}FutureSituation39.mp3`,
      allergySound,
      `${soundUrl}FutureSituation40.mp3`,
      `${soundUrl}ConnectionToAnti-Allergen41.mp3`,
      allergySound,
      `${soundUrl}ConnectionToAnti-Allergen42.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-Allergen43.mp3`,
      allergySound,
      `${soundUrl}ConnectionToAnti-Allergen44.mp3`,
      antiAllergen,
      `${soundUrl}FinishingMemory4-45.mp3`,
      allergySound,
      `${soundUrl}GuidingToPysicalEncounter46.mp3`,
      allergySound,
      `${soundUrl}GuidingToPysicalEncounter47.mp3`,
      allergySound,
      `${soundUrl}GuidingToPysicalEncounter48.mp3`,
      antiAllergen,
      `${soundUrl}GuidingToPysicalEncounter49.mp3`,
    ]
  ];

  const [index, setIndex] = useState(0);
  const [batch, setBatch] = useState(0);
  const [showRelaxedPrompt, setShowRelaxedPrompt] = useState(false);
  const [isRelaxSound, setIsRelaxSound] = useState(false);


  useEffect(() => {
    const currentAudio = audioRef.current;

    if (showRelaxedPrompt) {
      return;
    }

    if ((batch === 2) && (index === 4)) {
      setShowAntiAllergen(true);
    }

    if (batch == soundFiles.length - 1 && index == soundFiles[soundFiles.length - 1].length) {
      <Finish />;
    } else {
      currentAudio.src = soundFiles[batch][index];
      currentAudio.load();
      currentAudio.play();
    }
  }, [batch, index, showRelaxedPrompt]);

  const handleAudioEnd = () => {
    if (index + 1 < soundFiles[batch].length) {
      setIndex(index + 1);
    } else if (batch + 1 < soundFiles.length) {
      setShowRelaxedPrompt(true); 
    }
  };

  const [showAntiAllergen, setShowAntiAllergen] = useState(false);

  const handleAntiAllergenSelected = (selectedAudio) => {
    setShowAntiAllergen(false);
    audioRef.current.src = selectedAudio;
    audioRef.current.play();
  };

  const handleYesClick = () => {
    setShowRelaxedPrompt(false);
    setBatch(batch + 1); // Move to the next batch
    setIndex(0); // Reset the index
  };

  const handleNoClick = () => {
    // Implement desired behavior when "No" is clicked. For now, it does nothing.
};

  return (
    <div>
      <audio ref={audioRef} onEnded={handleAudioEnd} ></audio>
      {showAntiAllergen && <AntiAllergen onSelected={handleAntiAllergenSelected} setAntiAllergen={setAntiAllergen} />}
      {showRelaxedPrompt && <Relaxed onYesClick={handleYesClick} onNoClick={handleNoClick} />}
    </div>
  );
}
