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
    // place here yes/no button
    // yes button will continue the audio filles
    // no buttons will play the relaxSounds
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
    // place here the AntiAllergen component
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
    // place here only yes button
    // only once it's pressed the audio will continue
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
    if ((batch === 2) && (index === 4 || index === 6)) {
      setShowAntiAllergen(true);
      return;
    }
    // setFlag(batch === 2 && (index === 4 || index === 6));

    if (isRelaxSound) {
      currentAudio.src = relaxSounds[relaxIndex];
    } else {
      if (batch == soundFiles.length - 1 && index == soundFiles[soundFiles.length - 1].length) {
        <Finish />
      } else {
        currentAudio.src = soundFiles[batch][index];
      }
    }
    currentAudio.load();
    currentAudio.play();
  }, [batch, index, isRelaxSound, relaxIndex]);

  const handleAudioEnd = () => {
    // Move to the next sound within the batch
    if (index + 1 < soundFiles[batch].length) {
      setIndex(index + 1);
    }
    // Move to the next batch if the current batch is done
    else if (batch + 1 < soundFiles.length) {
      setBatch(batch + 1);
      setIndex(0);
    }
    // If relax sounds are being played, determine the next action
    else if (isRelaxSound) {
      if (relaxIndex + 1 < relaxSounds.length) {
        setRelaxIndex(relaxIndex + 1);
      } else {
        setShowRelaxedPrompt(false);
        setIsRelaxSound(false);
        // Logic for what should happen after the relax sounds have finished
      }
    }
  };

  const handleYesClick = () => {
    setBatch(batch + 1);
    setIndex(0);
    setShowRelaxedPrompt(false);
  };

  const handleNoClick = () => {
    setIsRelaxSound(true);
    setRelaxIndex(0);
  };

  const playRandomRelaxSound = () => {
    const randomIndex = Math.floor(Math.random() * relaxSounds.length);
    return relaxSounds[randomIndex];
  };

  const setNext = () => {
    if (batch + 1 < soundFiles.length) {
      setBatch(batch + 1);
      setIndex(0);
    }
  };

  const [showAntiAllergen, setShowAntiAllergen] = useState(false);

  const handleAntiAllergenSelected = (selectedAudio) => {
    setShowAntiAllergen(false);
    // Set the selected anti-allergen's audio to the audioRef's source
    audioRef.current.src = selectedAudio;
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} onEnded={handleAudioEnd} controls></audio>
      {showAntiAllergen &&
        <AntiAllergen onSelected={handleAntiAllergenSelected} />}
    </div>
  );
}
