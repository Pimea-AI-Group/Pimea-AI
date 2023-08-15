import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Relaxed from '../Components/Relaxed';
import AntiAllergen from '../Components/AntiAllergen';
let soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/';
const allergyUrl = `${soundUrl}Allergy/`;
const Ready = `${soundUrl}Ready+To+Continue.mp3`;
const location = useLocation();

export default function Treatment() {
  const allergy = location.state.allergy;
  const [antiAllergen, setAntiAllergen] = useState(null);

  if (location.state.user.gender === 'female') {
    soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Female/';
  }
  else {
    soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Male/'
  }

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

  const relaxSounds = [`${soundUrl}GuidedRelaxation1-10.mp3`, `${soundUrl}GuidedRelaxation2-15.mp3`];
  const soundFiles = [
    [
      `${soundUrl}IntroPart1(Male).mp3`,
      allergySound,
      `${soundUrl}IntroPart2(Male).mp3`
    ],
    [
      `${soundUrl}IntroPart3(Male).mp3`,
      allergySound,
      `${soundUrl}IntroPart4(Male).mp3`,
      allergySound,
      `${soundUrl}IntroPart5(Male).mp3`,
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
      `${soundUrl}GuidedRelaxation1-10.mp3`,
      allergySound,
      `${soundUrl}IdentifyingAnti-Allergen12.mp3`,
      allergySound,
      `${soundUrl}IdentifyingAnti-Allergen13.mp3`,
      allergySound,
      `${soundUrl}IdentifyingAnti-Allergen14.mp3`,
      Ready
    ],
    [
      `${soundUrl}ExpandTheAnti-AllergenExperience16.mp3`,
      antiAllergen,
      `${soundUrl}ExpandTheAnti-AllergenExperience17.mp3`,
      antiAllergen,
      `${soundUrl}ExpandTheAnti-AllergenExperience18.mp3`,
      Ready
    ],
    [
      `${soundUrl}ProtectiveImagery19.mp3`,
      Ready
    ],
    [
      `${soundUrl}MemoryOfAllergyResponse1-20.mp3`,
      antiAllergen,
      Ready
    ],
    [
      `${soundUrl}ConnectionToAnti-AllergenAndProtection1-21.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection1-22.mp3`,
      Ready
    ],
    [
      `${soundUrl}FinishingMemory1-23.mp3`,
      Ready
    ],
    [
      `${soundUrl}MemoryOfAllergyResponse2-24.mp3`,
      Ready
    ],
    [
      `${soundUrl}ConnectionToAnti-AllergenAndProtection2-25.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-AllergenAndProtection2-26.mp3`,
      antiAllergen,
      Ready
    ],
    [
      `${soundUrl}FinishingMemory2-27.mp3`,
      allergySound,
      `${soundUrl}FinishingMemory2-28.mp3`,
      antiAllergen,
      Ready
    ],
    [
      `${soundUrl}MemoryOfAllergyResponse3-29.mp3`,
      Ready
    ],
    [
      `${soundUrl}ConnectionToAnti-AllergenAndProtection3-30.mp3`,
      Ready
    ],
    [
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
      Ready
    ],
    [
      `${soundUrl}FutureSituation38.mp3`,
      allergySound,
      `${soundUrl}FutureSituation39.mp3`,
      allergySound,
      `${soundUrl}FutureSituation40.mp3`,
      Ready
    ],
    [
      `${soundUrl}ConnectionToAnti-Allergen41.mp3`,
      allergySound,
      `${soundUrl}ConnectionToAnti-Allergen42.mp3`,
      antiAllergen,
      `${soundUrl}ConnectionToAnti-Allergen43.mp3`,
      allergySound,
      `${soundUrl}ConnectionToAnti-Allergen44.mp3`,
      antiAllergen,
      Ready
    ],
    [
      `${soundUrl}FinishingMemory4-45.mp3`,
      allergySound,
      Ready
    ],
    [
      `${soundUrl}GuidingToPysicalEncounter46.mp3`,
      allergySound,
      `${soundUrl}GuidingToPysicalEncounter47.mp3`,
      allergySound,
      `${soundUrl}GuidingToPysicalEncounter48.mp3`,
      antiAllergen,
      `${soundUrl}GuidingToPysicalEncounter49.mp3`,
      Ready
    ]
  ];

  const [index, setIndex] = useState(0);
  const [batch, setBatch] = useState(0);
  const [isBatchCompleted, setIsBatchCompleted] = useState(false);
  const [isRelaxSound, setIsRelaxSound] = useState(false);
  const audioRef = useRef();
  const [flag, setFlag] = useState(false);

  // Handle audio play based on state changes
  useEffect(() => {
    const currentAudio = audioRef.current;
    setFlag(batch === 2 && (index === 4 || index === 6));

    if (!currentAudio) return;

    if (isRelaxSound) {
      currentAudio.src = relaxSounds[Math.floor(Math.random() * relaxSounds.length)];
    } else if (!isBatchCompleted) {
      currentAudio.src = soundFiles[batch][index];
    }

    currentAudio.load();
    currentAudio.play();

  }, [batch, index, isRelaxSound, soundFiles, relaxSounds]);

  // Handle the end of an audio
  const handleAudioEnd = () => {
    setIsRelaxSound ? setIsBatchCompleted(true) : setIndex(index + 1);
    setIsRelaxSound(false);
  };

  // Click handlers
  const handleYesClick = () => {
    setBatch(batch + 1);
    setIndex(0);
    setIsBatchCompleted(false);
  };

  const handleNoClick = () => setIsRelaxSound(true);


  return (
    <div>
      <h1>דימיון מודרך</h1>
      <audio ref={audioRef} onEnded={handleAudioEnd} controls>
        <source src={isRelaxSound ? relaxSounds[Math.floor(Math.random() * relaxSounds.length)] : soundFiles[batch][index]} type="audio/mpeg" />
      </audio>
      {isBatchCompleted && <Relaxed onYesClick={handleYesClick} onNoClick={handleNoClick} />}
      {flag && <AntiAllergen setAntiAllergen={setAntiAllergen} />}
    </div>
  );
}
