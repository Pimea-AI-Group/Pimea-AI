import React, { useState } from 'react'

import AloeVeraIMG from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti Allergens/Aloe Vera.jpg';
import AloeVeraSound from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/Aloe Vera.mp3';

import AvocadoTreeBlossomIMG from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti Allergens/Avocado Tree Blossom.jpg';
import AvocadoTreeBlossomSound from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/Avocado Tree Blossom.mp3';

import BlackPepperIMG from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti Allergens/Black Pepper.jpg';
import BlackPepperSound from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/Black Pepper.mp3';

import BunnyIMG from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti Allergens/Bunny.jpg';
import BunnySound from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/Bunny.mp3';

import CarpetIMG from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti Allergens/Carpet.jpg';
import CarpetSound from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/Carpet.mp3';

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
