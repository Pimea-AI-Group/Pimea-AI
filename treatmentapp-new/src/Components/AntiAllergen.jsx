import React, { useState } from 'react'

import AloeVeraIMG from '../Images/Anti Allergens/Aloe Vera.jpg';
import AloeVeraSound from '../Sound/Anti-Allergen/Aloe Vera.mp3';

import AvocadoTreeBlossomIMG from '../Images/Anti Allergens/Avocado Tree Blossom.jpg';
import AvocadoTreeBlossomSound from '../Sound/Anti-Allergen/Avocado Tree Blossom.mp3';

import BlackPepperIMG from '../Images/Anti Allergens/Black Pepper.jpg';
import BlackPepperSound from '../Sound/Anti-Allergen/Black Pepper.mp3';

import BunnyIMG from '../Images/Anti Allergens/Bunny.jpg';
import BunnySound from '../Sound/Anti-Allergen/Bunny.mp3';

import CarpetIMG from '../Images/Anti Allergens/Carpet.jpg';
import CarpetSound from '../Sound/Anti-Allergen/Carpet.mp3';

const antiAllergen = [
  { name: 'אלוורה', image: AloeVeraIMG, audio: AloeVeraSound },
  { name: 'פריחת עץ האבוקדו', image: AvocadoTreeBlossomIMG, audio: AvocadoTreeBlossomSound },
  { name: 'פלפל שחור', image: BlackPepperIMG, audio: BlackPepperSound },
  { name: 'ארנב', image: BunnyIMG, audio: BunnySound },
  { name: 'שטיח', image: CarpetIMG, audio: CarpetSound }
];


export default function AntiAllergen(props) {
  const [showAntiAllergen, setShowAntiAllergen] = useState(false);

  const handleAntiAllergenSelect = (audio) => {
    props.setAntiAllergen(audio);
    setShowAntiAllergen(false);
  };


  return (
    <div>
      {showAntiAllergen && (
        <div>
          <h1>בבקשה בחר באנטי-אלרגן</h1>
          <div className='Anti-Allergens-Div'>
            {antiAllergen.map((element, index) => (
              <label className='symptomsCheckbox'>
                <img src={element.image} alt="Checkbox Image" />
                <span className="checkbox-image">
                  <input
                    type="checkbox"
                    name='Anti-Allergen'
                    onClick={() => handleAntiAllergenSelect(element.audio)}
                  />
                </span>
                {element.name}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
