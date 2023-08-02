import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Relaxed from '../Components/Relaxed';
import AntiAllergen from '../Components/AntiAllergen';
const soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/'

// Initializing URLs for various sound files
const introPart1 = new URL(`${soundUrl}IntroPart1(Male).mp3`);
const introPart2 = new URL(`${soundUrl}IntroPart2(Male).mp3`);
const introPart3 = new URL(`${soundUrl}IntroPart3(Male).mp3`);
const introPart4 = new URL(`${soundUrl}IntroPart4(Male).mp3`);
const introPart5 = new URL(`${soundUrl}IntroPart5(Male).mp3`);
const IdentifyingTheDominantSense6 = new URL(`${soundUrl}IdentifyingTheDominantSense6.mp3`);
const IdentifyingTheDominantSense7 = new URL(`${soundUrl}IdentifyingTheDominantSense7.mp3`);
const IdentifyingTheDominantSense8 = new URL(`${soundUrl}IdentifyingTheDominantSense8.mp3`);
const IdentifyingTheDominantSense9 = new URL(`${soundUrl}IdentifyingTheDominantSense9.mp3`);
const GuidedRelaxation1_10 = new URL(`${soundUrl}GuidedRelaxation1-10.mp3`);
const IdentifyingAntiAllergen11 = new URL(`${soundUrl}IdentifyingAnti-Allergen11.mp3`);
const IdentifyingAntiAllergen12 = new URL(`${soundUrl}IdentifyingAnti-Allergen12.mp3`);
const IdentifyingAntiAllergen13 = new URL(`${soundUrl}IdentifyingAnti-Allergen13.mp3`);
const IdentifyingAntiAllergen14 = new URL(`${soundUrl}IdentifyingAnti-Allergen14.mp3`);
const GuidedRelaxation2_15 = new URL(`${soundUrl}GuidedRelaxation2-15.mp3`);
const ExpandTheAntiAllergenExperience16 = new URL(`${soundUrl}ExpandTheAnti-AllergenExperience16.mp3`);
const ExpandTheAntiAllergenExperience17 = new URL(`${soundUrl}ExpandTheAnti-AllergenExperience17.mp3`);
const ExpandTheAntiAllergenExperience18 = new URL(`${soundUrl}ExpandTheAnti-AllergenExperience18.mp3`);
const ProtectiveImagery19 = new URL(`${soundUrl}ProtectiveImagery19.mp3`);
const MemoryOfAllergyResponse1_20 = new URL(`${soundUrl}MemoryOfAllergyResponse1-20.mp3`);
const ConnectionToAntiAllergenAndProtection1_21 = new URL(`${soundUrl}ConnectionToAnti-AllergenAndProtection1-21.mp3`);
const ConnectionToAntiAllergenAndProtection1_22 = new URL(`${soundUrl}ConnectionToAnti-AllergenAndProtection1-22.mp3`);
const FinishingMemory1_23 = new URL(`${soundUrl}FinishingMemory1-23.mp3`);
const MemoryOfAllergyResponse2_24 = new URL(`${soundUrl}MemoryOfAllergyResponse2-24.mp3`);
const ConnectionToAntiAllergenAndProtection2_25 = new URL(`${soundUrl}ConnectionToAnti-AllergenAndProtection2-25.mp3`);
const ConnectionToAntiAllergenAndProtection2_26 = new URL(`${soundUrl}ConnectionToAnti-AllergenAndProtection2-26.mp3`);
const FinishingMemory2_27 = new URL(`${soundUrl}FinishingMemory2-27.mp3`);
const FinishingMemory2_28 = new URL(`${soundUrl}FinishingMemory2-28.mp3`);
const MemoryOfAllergyResponse3_29 = new URL(`${soundUrl}MemoryOfAllergyResponse3-29.mp3`);
const ConnectionToAntiAllergenAndProtection3_30 = new URL(`${soundUrl}ConnectionToAnti-AllergenAndProtection3-30.mp3`);
const FinishingMemory3_31 = new URL(`${soundUrl}FinishingMemory3-31.mp3`);
const FinishingMemory3_32 = new URL(`${soundUrl}FinishingMemory3-32.mp3`);
const FinishingMemory3_33 = new URL(`${soundUrl}FinishingMemory3-33.mp3`);
const FinishingMemory3_34 = new URL(`${soundUrl}FinishingMemory3-34.mp3`);
const FinishingMemory3_35 = new URL(`${soundUrl}FinishingMemory3-35.mp3`);
const FinishingMemory3_36 = new URL(`${soundUrl}FinishingMemory3-36.mp3`);
const FinishingMemory3_37 = new URL(`${soundUrl}FinishingMemory3-37.mp3`);
const FutureSituation38 = new URL(`${soundUrl}FutureSituation38.mp3`);
const FutureSituation39 = new URL(`${soundUrl}FutureSituation39.mp3`);
const FutureSituation40 = new URL(`${soundUrl}FutureSituation40.mp3`);
const ConnectionToAntiAllergen41 = new URL(`${soundUrl}ConnectionToAnti-Allergen41.mp3`);
const ConnectionToAntiAllergen42 = new URL(`${soundUrl}ConnectionToAnti-Allergen42.mp3`);
const ConnectionToAntiAllergen43 = new URL(`${soundUrl}ConnectionToAnti-Allergen43.mp3`);
const ConnectionToAntiAllergen44 = new URL(`${soundUrl}ConnectionToAnti-Allergen44.mp3`);
const FinishingMemory4_45 = new URL(`${soundUrl}FinishingMemory4-45.mp3`);
const GuidingToPysicalEncounter46 = new URL(`${soundUrl}GuidingToPysicalEncounter46.mp3`);
const GuidingToPysicalEncounter47 = new URL(`${soundUrl}GuidingToPysicalEncounter47.mp3`);
const GuidingToPysicalEncounter48 = new URL(`${soundUrl}GuidingToPysicalEncounter48.mp3`);
const GuidingToPysicalEncounter49 = new URL(`${soundUrl}GuidingToPysicalEncounter49.mp3`);
const Cat = new URL(`${soundUrl}Allergy/Cat.mp3`);
const Dog = new URL(`${soundUrl}Allergy/Dog.mp3`);
const Grass = new URL(`${soundUrl}Allergy/Grass.mp3`);
const DustMites = new URL(`${soundUrl}Allergy/Dust Bunny.mp3`);
const PineBloom = new URL(`${soundUrl}Allergy/Pine Bloom.mp3`);
const HayFever = new URL(`${soundUrl}Allergy/Hay Feber.mp3`);
const Latex = new URL(`${soundUrl}Allergy/Latex.mp3`);


export default function Treatment() {
  const location = useLocation();
  const allergy = location.state.allergy;
  const [antiAllergen, setAntiAllergen] = useState(null);

  const allergies = [
    { name: 'Cat', audio: Cat },
    { name: 'Dog', audio: Dog },
    { name: 'Grass', audio: Grass },
    { name: 'Dust Bunny', audio: DustMites },
    { name: 'Pine Bloom', audio: PineBloom },
    { name: 'Hay Fever', audio: HayFever },
    { name: 'Latex', audio: Latex }
  ];

  const setAudio = (allergyName) => {
    let matchingAllergy;

    matchingAllergy = allergies.find((a) => `${a.name}` === `${allergyName}`)

    return matchingAllergy.audio;
  };

  const allergySound = setAudio(allergy)
  const relaxSounds = [GuidedRelaxation1_10, GuidedRelaxation2_15];
  const soundFiles = [
    [introPart1, allergySound, introPart2],
    [introPart3, allergySound, introPart4, allergySound, introPart5, IdentifyingTheDominantSense6, allergySound, IdentifyingTheDominantSense7, allergySound, IdentifyingTheDominantSense8, allergySound, IdentifyingTheDominantSense9, allergySound],
    [IdentifyingAntiAllergen11, allergySound, IdentifyingAntiAllergen12, allergySound, IdentifyingAntiAllergen13, allergySound, IdentifyingAntiAllergen14],
    [ExpandTheAntiAllergenExperience16, antiAllergen, ExpandTheAntiAllergenExperience17, antiAllergen, ExpandTheAntiAllergenExperience18],
    [ProtectiveImagery19],
    [MemoryOfAllergyResponse1_20, antiAllergen],
    [ConnectionToAntiAllergenAndProtection1_21, antiAllergen, ConnectionToAntiAllergenAndProtection1_22],
    [FinishingMemory1_23],
    [MemoryOfAllergyResponse2_24],
    [ConnectionToAntiAllergenAndProtection2_25, antiAllergen, ConnectionToAntiAllergenAndProtection2_26, antiAllergen],
    [FinishingMemory2_27, FinishingMemory2_28],
    [MemoryOfAllergyResponse3_29],
    [ConnectionToAntiAllergenAndProtection3_30],
    [FinishingMemory3_31, FinishingMemory3_32, FinishingMemory3_33, FinishingMemory3_34, FinishingMemory3_35, FinishingMemory3_36, FinishingMemory3_37],
    [FutureSituation38, FutureSituation39, FutureSituation40],
    [ConnectionToAntiAllergen41, ConnectionToAntiAllergen42, ConnectionToAntiAllergen43, ConnectionToAntiAllergen44],
    [FinishingMemory4_45],
    [GuidingToPysicalEncounter46, GuidingToPysicalEncounter47, GuidingToPysicalEncounter48, GuidingToPysicalEncounter49]
  ];

  const [index, setIndex] = useState(0);
  const [batch, setBatch] = useState(0);
  const [isBatchCompleted, setIsBatchCompleted] = useState(false);
  const [isRelaxSound, setIsRelaxSound] = useState(false);
  const [listening, setListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const recognition = useRef(null);
  const audioRef = useRef();
  const [flag, setFlag] = useState(false);

  const handleVoiceRecognitionStart = () => {
    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = true;
    recognition.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      if (event.results[0].isFinal) {
        if (transcript.toLowerCase() === 'yes') {
          handleYesClick();
        } else if (transcript.toLowerCase() === 'no') {
          handleNoClick();
        }
      }
    };
    recognition.current.start();
    setListening(true);
  };

  const handleVoiceRecognitionStop = () => {
    if (recognition.current) {
      recognition.current.stop();
      setListening(false);
    }
  };

  useEffect(() => {
    if (isBatchCompleted && !listening) {
      handleVoiceRecognitionStart();
    } else if (!isBatchCompleted && listening) {
      handleVoiceRecognitionStop();
    }
    return () => handleVoiceRecognitionStop();
  }, [isBatchCompleted]);

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
      handleVoiceRecognitionStart();
    } else if (index < soundFiles[batch].length - 1) {
      setIndex(index + 1);
    } else {
      setIsBatchCompleted(true);
      handleVoiceRecognitionStart();
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

  useEffect(() => {
    let timer;
    if (isBatchCompleted) {
      timer = setTimeout(handleYesClick, 10000);
    }
    return () => clearTimeout(timer);
  }, [isBatchCompleted]);

  useEffect(() => {
    const audio = audioRef.current;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatic playback started!
      }).catch((error) => {
        // Auto-play was prevented
        // Show a UI element to let the user manually start playback
      });
    }
  }, [isPlaying]);

  const handleButtonClick = (audio, buttonIndex) => {
    setAntiAllergen(audio);
  };

  return (
    <div>
      <h1>Treatment Process</h1>

      <audio ref={audioRef} onEnded={handleAudioEnd} controls>
        <source src={isRelaxSound ? relaxSounds[Math.floor(Math.random() * relaxSounds.length)] : soundFiles[batch][index]} type="audio/mpeg" />
      </audio>

      {isBatchCompleted && <Relaxed onYesClick={handleYesClick} onNoClick={handleNoClick} />}

      {flag && <AntiAllergen setAntiAllergen={setAntiAllergen} />}

      {batch >= 2 && batch <= 3 && !isBatchCompleted && (
        <AntiAllergen setAntiAllergen={setAntiAllergen} />
      )}

    </div>
  );
}
