import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Relaxed from '../Components/Relaxed';
import AntiAllergen from '../Components/AntiAllergen';
const soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/'

// Initializing URLs for various sound files
// const introPart1 = `${soundUrl}IntroPart1(Male).mp3`;
// const introPart2 = `${soundUrl}IntroPart2(Male).mp3`;
// const introPart3 = `${soundUrl}IntroPart3(Male).mp3`;
// const introPart4 = `${soundUrl}IntroPart4(Male).mp3`;
// const introPart5 = `${soundUrl}IntroPart5(Male).mp3`;
// const IdentifyingTheDominantSense6 = `${soundUrl}IdentifyingTheDominantSense6.mp3`;
// const IdentifyingTheDominantSense7 = `${soundUrl}IdentifyingTheDominantSense7.mp3`;
// const IdentifyingTheDominantSense8 = `${soundUrl}IdentifyingTheDominantSense8.mp3`;
// const IdentifyingTheDominantSense9 = `${soundUrl}IdentifyingTheDominantSense9.mp3`;
// const GuidedRelaxation1_10 = `${soundUrl}GuidedRelaxation1-10.mp3`;
// const IdentifyingAntiAllergen11 = `${soundUrl}IdentifyingAnti-Allergen11.mp3`;
// const IdentifyingAntiAllergen12 = `${soundUrl}IdentifyingAnti-Allergen12.mp3`;
// const IdentifyingAntiAllergen13 = `${soundUrl}IdentifyingAnti-Allergen13.mp3`;
// const IdentifyingAntiAllergen14 = `${soundUrl}IdentifyingAnti-Allergen14.mp3`;
// const GuidedRelaxation2_15 = `${soundUrl}GuidedRelaxation2-15.mp3`;
// const ExpandTheAntiAllergenExperience16 = `${soundUrl}ExpandTheAnti-AllergenExperience16.mp3`;
// const ExpandTheAntiAllergenExperience17 = `${soundUrl}ExpandTheAnti-AllergenExperience17.mp3`;
// const ExpandTheAntiAllergenExperience18 = `${soundUrl}ExpandTheAnti-AllergenExperience18.mp3`;
// const ProtectiveImagery19 = `${soundUrl}ProtectiveImagery19.mp3`;
// const MemoryOfAllergyResponse1_20 = `${soundUrl}MemoryOfAllergyResponse1-20.mp3`;
// const ConnectionToAntiAllergenAndProtection1_21 = `${soundUrl}ConnectionToAnti-AllergenAndProtection1-21.mp3`;
// const ConnectionToAntiAllergenAndProtection1_22 = `${soundUrl}ConnectionToAnti-AllergenAndProtection1-22.mp3`;
// const FinishingMemory1_23 = `${soundUrl}FinishingMemory1-23.mp3`;
// const MemoryOfAllergyResponse2_24 = `${soundUrl}MemoryOfAllergyResponse2-24.mp3`;
// const ConnectionToAntiAllergenAndProtection2_25 = `${soundUrl}ConnectionToAnti-AllergenAndProtection2-25.mp3`;
// const ConnectionToAntiAllergenAndProtection2_26 = `${soundUrl}ConnectionToAnti-AllergenAndProtection2-26.mp3`;
// const FinishingMemory2_27 = `${soundUrl}FinishingMemory2-27.mp3`;
// const FinishingMemory2_28 = `${soundUrl}FinishingMemory2-28.mp3`;
// const MemoryOfAllergyResponse3_29 = `${soundUrl}MemoryOfAllergyResponse3-29.mp3`;
// const ConnectionToAntiAllergenAndProtection3_30 = `${soundUrl}ConnectionToAnti-AllergenAndProtection3-30.mp3`;
// const FinishingMemory3_31 = `${soundUrl}FinishingMemory3-31.mp3`;
// const FinishingMemory3_32 = `${soundUrl}FinishingMemory3-32.mp3`;
// const FinishingMemory3_33 = `${soundUrl}FinishingMemory3-33.mp3`;
// const FinishingMemory3_34 = `${soundUrl}FinishingMemory3-34.mp3`;
// const FinishingMemory3_35 = `${soundUrl}FinishingMemory3-35.mp3`;
// const FinishingMemory3_36 = `${soundUrl}FinishingMemory3-36.mp3`;
// const FinishingMemory3_37 = `${soundUrl}FinishingMemory3-37.mp3`;
// const FutureSituation38 = `${soundUrl}FutureSituation38.mp3`;
// const FutureSituation39 = `${soundUrl}FutureSituation39.mp3`;
// const FutureSituation40 = `${soundUrl}FutureSituation40.mp3`;
// const ConnectionToAntiAllergen41 = `${soundUrl}ConnectionToAnti-Allergen41.mp3`;
// const ConnectionToAntiAllergen42 = `${soundUrl}ConnectionToAnti-Allergen42.mp3`;
// const ConnectionToAntiAllergen43 = `${soundUrl}ConnectionToAnti-Allergen43.mp3`;
// const ConnectionToAntiAllergen44 = `${soundUrl}ConnectionToAnti-Allergen44.mp3`;
// const FinishingMemory4_45 = `${soundUrl}FinishingMemory4-45.mp3`;
// const GuidingToPysicalEncounter46 = `${soundUrl}GuidingToPysicalEncounter46.mp3`;
// const GuidingToPysicalEncounter47 = `${soundUrl}GuidingToPysicalEncounter47.mp3`;
// const GuidingToPysicalEncounter48 = `${soundUrl}GuidingToPysicalEncounter48.mp3`;
// const GuidingToPysicalEncounter49 = `${soundUrl}GuidingToPysicalEncounter49.mp3`;
// const Cat = `${soundUrl}Allergy/Cat.mp3`;
// const Dog = `${soundUrl}Allergy/Dog.mp3`;
// const Grass = `${soundUrl}Allergy/Grass.mp3`;
// const DustMites = `${soundUrl}Allergy/Dust Bunny.mp3`;
// const PineBloom = `${soundUrl}Allergy/Pine Bloom.mp3`;
// const HayFever = `${soundUrl}Allergy/Hay Feber.mp3`;
// const Latex = `${soundUrl}Allergy/Latex.mp3`;
const Ready = `${soundUrl}Ready+To+Continue.mp3`;



export default function Treatment() {
  const location = useLocation();
  const allergy = location.state.allergy;
  const [antiAllergen, setAntiAllergen] = useState(null);

  const allergies = [
    { name: 'Cat', audio: `${soundUrl}Allergy/Cat.mp3`, screenName: 'חתולים' },
    { name: 'Dog', audio: `${soundUrl}Allergy/Dog.mp3`, screenName: 'כלבים' },
    { name: 'Grass', audio: `${soundUrl}Allergy/Grass.mp3`, screenName: 'דשא' },
    { name: 'Dust Bunny', audio: `${soundUrl}Allergy/Dust Bunny.mp3`, screenName: 'קרדית האבק' },
    { name: 'Pine Bloom', audio: `${soundUrl}Allergy/Hay Feber.mp3`, screenName: 'פריחת עץ האורן' },
    { name: 'Hay Fever', audio: `${soundUrl}Allergy/Hay Feber.mp3`, screenName: 'קדחת השחת' },
    { name: 'Latex', audio: `${soundUrl}Allergy/Latex.mp3`, screenName: 'לאטקס' }
  ];

  const setAudio = (allergyName) => {
    let matchingAllergy;
    matchingAllergy = allergies.find((a) => `${a.name}` === `${allergyName}`)
    return matchingAllergy.audio;
  };

  const allergySound = setAudio(allergy)
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [flag, setFlag] = useState(false);


  useEffect(() => {
    if (batch === 2 && (index === 4 || index === 6)) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (audioRef.current && !isBatchCompleted && !isRelaxSound) {
      audioRef.current.src = soundFiles[batch][index];
      audioRef.current.load();
      audioRef.current.play();
    } else if (audioRef.current && isRelaxSound) {
      audioRef.current.src = relaxSounds[Math.floor(Math.random() * relaxSounds.length)];
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [batch, index, isRelaxSound, soundFiles, relaxSounds]);

  const handleAudioEnd = () => {
    setIsPlaying(false);
    if (isRelaxSound) {
      setIsRelaxSound(false);
      setIsBatchCompleted(true);
    } else if (index < soundFiles[batch].length - 1) {
      setIndex(index + 1);
    } else {
      setIsBatchCompleted(true);
    }
  };

  const handleYesClick = () => {
    if (batch < soundFiles.length - 1) {
      setBatch(batch + 1);
      setIndex(0);
      setIsBatchCompleted(false);
    }
    setIsPlaying(true);
  };

  const handleNoClick = () => {
    setIsRelaxSound(true);
    setIsPlaying(true);
  };

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   const playPromise = audio.play();
  //   if (playPromise !== undefined) {
  //     playPromise.then(() => {
  //       // Automatic playback started!
  //     }).catch((error) => {
  //       // Auto-play was prevented
  //       // Show a UI element to let the user manually start playback
  //     });
  //   }
  // }, [isPlaying]);


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
