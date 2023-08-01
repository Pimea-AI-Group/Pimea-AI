import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Relaxed from '../Components/Relaxed';
import AntiAllergen from '../Components/AntiAllergen';

import introPart1 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IntroPart1(Male).mp3';
import introPart2 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IntroPart2(Male).mp3';
import introPart3 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IntroPart3(Male).mp3';
import introPart4 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IntroPart4(Male).mp3';
import introPart5 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IntroPart5(Male).mp3';
import IdentifyingTheDominantSense6 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingTheDominantSense6.mp3';
import IdentifyingTheDominantSense7 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingTheDominantSense7.mp3';
import IdentifyingTheDominantSense8 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingTheDominantSense8.mp3';
import IdentifyingTheDominantSense9 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingTheDominantSense9.mp3';
import GuidedRelaxation1_10 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/GuidedRelaxation1-10.mp3';
import IdentifyingAntiAllergen11 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingAnti-Allergen11.mp3';
import IdentifyingAntiAllergen12 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingAnti-Allergen12.mp3';
import IdentifyingAntiAllergen13 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingAnti-Allergen13.mp3';
import IdentifyingAntiAllergen14 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/IdentifyingAnti-Allergen14.mp3';
import GuidedRelaxation2_15 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/GuidedRelaxation2-15.mp3';
import ExpandTheAntiAllergenExperience16 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ExpandTheAnti-AllergenExperience16.mp3';
import ExpandTheAntiAllergenExperience17 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ExpandTheAnti-AllergenExperience17.mp3';
import ExpandTheAntiAllergenExperience18 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ExpandTheAnti-AllergenExperience18.mp3';
import ProtectiveImagery19 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ProtectiveImagery19.mp3';
import MemoryOfAllergyResponse1_20 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/MemoryOfAllergyResponse1-20.mp3';
import ConnectionToAntiAllergenAndProtection1_21 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-AllergenAndProtection1-21.mp3';
import ConnectionToAntiAllergenAndProtection1_22 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-AllergenAndProtection1-22.mp3';
import FinishingMemory1_23 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory1-23.mp3';
import MemoryOfAllergyResponse2_24 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/MemoryOfAllergyResponse2-24.mp3';
import ConnectionToAntiAllergenAndProtection2_25 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-AllergenAndProtection2-25.mp3';
import ConnectionToAntiAllergenAndProtection2_26 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-AllergenAndProtection2-26.mp3';
import FinishingMemory2_27 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory2-27.mp3';
import FinishingMemory2_28 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory2-28.mp3';
import MemoryOfAllergyResponse3_29 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/MemoryOfAllergyResponse3-29.mp3';
import ConnectionToAntiAllergenAndProtection3_30 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-AllergenAndProtection3-30.mp3';
import FinishingMemory3_31 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-31.mp3';
import FinishingMemory3_32 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-32.mp3';
import FinishingMemory3_33 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-33.mp3';
import FinishingMemory3_34 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-34.mp3';
import FinishingMemory3_35 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-35.mp3';
import FinishingMemory3_36 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-36.mp3';
import FinishingMemory3_37 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory3-37.mp3';
import FutureSituation38 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FutureSituation38.mp3';
import FutureSituation39 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FutureSituation39.mp3';
import FutureSituation40 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FutureSituation40.mp3';
import ConnectionToAntiAllergen41 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-Allergen41.mp3';
import ConnectionToAntiAllergen42 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-Allergen42.mp3';
import ConnectionToAntiAllergen43 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-Allergen43.mp3';
import ConnectionToAntiAllergen44 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/ConnectionToAnti-Allergen44.mp3';
import FinishingMemory4_45 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/FinishingMemory4-45.mp3';
import GuidingToPysicalEncounter46 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/GuidingToPysicalEncounter46.mp3';
import GuidingToPysicalEncounter47 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/GuidingToPysicalEncounter47.mp3';
import GuidingToPysicalEncounter48 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/GuidingToPysicalEncounter48.mp3';
import GuidingToPysicalEncounter49 from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/GuidingToPysicalEncounter49.mp3';
import Cat from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Cat.mp3';
import Dog from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Dog.mp3';
import Grass from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Grass.mp3';
import DustMites from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Dust Bunny.mp3';
import PineBloom from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Pine Bloom.mp3';
import HayFever from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Hay Feber.mp3';
import Latex from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Allergy/Latex.mp3';

export default function Treatment() {
  const location = useLocation();
  const allergy = location.state.allergy;
  const [antiAllergen, setAntiAllergen] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

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
  const [displayRelaxed, setDisplayRelaxed] = useState(false);
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
    setSelectedButton(buttonIndex);
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
