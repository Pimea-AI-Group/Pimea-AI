import React, { useState } from 'react';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti+Allergens/';
const soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/';

const antiAllergen = [
  { name: 'אלוורה', imageName: 'Aloe Vera', audioName: 'Aloe Vera' },
  { name: 'פריחת עץ האבוקדו', imageName: 'Avocado Tree Blossom', audioName: 'Avocado Tree Blossom' },
  { name: 'פלפל שחור', imageName: 'Black Pepper', audioName: 'Black Pepper' },
  { name: 'ארנב', imageName: 'Bunny', audioName: 'Bunny' },
  { name: 'שטיח', imageName: 'Carpet', audioName: 'Carpet' },
];

export default function AntiAllergen(props) {
  const [selectedAntiAllergen, setSelectedAntiAllergen] = useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAntiAllergen(value);
      props.setAntiAllergen(new URL(`${soundUrl}${value.replace(' ', '%20')}.mp3`));
    } 
  };

  // Function to render antiAllergens from antiAllergen
  const renderAntiAllergen = antiAllergen.map((element) => (
    <label className='antiAllergenCheckbox' key={element.name}>
      <img style={{ backgroundImage: `url(${imageUrl}${element.imageName.replace(' ', '%20')}.jpg)` }} alt={element.name} />
      <span className="checkbox-image">
        <input
          type="radio"
          value={element.audioName}
          checked={selectedAntiAllergen === element.audioName}
          onChange={handleCheckboxChange}
        />
      </span>
      {element.name}
    </label>
  ));

  return (
    <div>
      <h1>בבקשה בחר באנטי-אלרגן</h1>
      <div className='Anti-Allergens-Div'>
        {renderAntiAllergen}
      </div>
    </div>
  );
}
