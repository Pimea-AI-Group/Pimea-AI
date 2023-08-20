import React, { useState } from 'react';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Anti+Allergens/';
const soundUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Sound/Anti-Allergen/';

const antiAllergen = [
  { name: 'אלוורה', imageName: 'Aloe Vera', audioName: 'Aloe Vera' },
  { name: 'פריחת עץ האבוקדו', imageName: 'Avocado Tree Blossom', audioName: 'Avocado Tree Blossom' },
  { name: 'פלפל שחור', imageName: 'Black Pepper', audioName: 'Black Pepper' },
  { name: 'ארנב', imageName: 'Bunny', audioName: 'Bunny' },
  { name: 'שטיח', imageName: 'Carpet', audioName: 'Carpet' },
  { name: 'חתול', imageName: 'Cat', audioName: 'Cat' },
  { name: 'פריחת הדובדבן', imageName: 'Cherry Blossom', audioName: 'Cherry Blossom' },
  { name: 'קינמון', imageName: 'Cinnamon', audioName: 'Cinnamon' },
  { name: 'פרי הדר', imageName: 'Citrus Fruit', audioName: 'Citrus Fruit' },
  { name: 'כפפות בד', imageName: 'Cloth Gloves', audioName: 'Cloth Gloves' },
  { name: 'קולר', imageName: 'Collar', audioName: 'Collar' },
  { name: 'בד כותנה', imageName: 'Cotton Fabric', audioName: 'Cotton Fabric' },
  { name: 'פריחת עץ הברוש', imageName: 'Cypress Tree Blossom', audioName: 'Cypress Tree Blossom' },
  { name: 'כלב', imageName: 'Dog', audioName: 'Dog' },
  { name: 'מרכך כביסה', imageName: 'Fabric Softener', audioName: 'Fabric Softener' },
  { name: 'קמח', imageName: 'Flour', audioName: 'Flour' },
  { name: 'בובת פרווה', imageName: 'Furr Doll', audioName: 'Furr Doll' },
  { name: 'אדמה', imageName: 'Ground', audioName: 'Ground' },
  { name: 'אוגר', imageName: 'Hamster', audioName: 'Hamster' },
  { name: 'סוסים', imageName: 'Horse', audioName: 'Horse' },
  { name: 'שיער אדם', imageName: 'Human Hair', audioName: 'Human Hair' },
  { name: 'פרח יסמין', imageName: 'Jasmine Flower', audioName: 'Jasmine Flower' },
  { name: 'שמן אתרי לוונדר', imageName: 'Lavender Essential Oil', audioName: 'Lavender Essential Oil' },
  { name: 'חומר ניקוי בריח לימון', imageName: 'Lemon Detergents', audioName: 'Lemon Detergents' },
  { name: 'חסה', imageName: 'Lettuce', audioName: 'Lettuce' },
  { name: 'מסיכה', imageName: 'Mask', audioName: 'Mask' },
  { name: 'קרם לחות', imageName: 'Moisturizer', audioName: 'Moisturizer' },
  { name: 'ריחות עץ דקל', imageName: 'Palm Tree Blossom', audioName: 'Palm Tree Blossom' },
  { name: 'תוכי', imageName: 'Parrot', audioName: 'Parrot' },
  { name: 'פטרוזיליה', imageName: 'Parsley', audioName: 'Parsley' },
  { name: 'בושם', imageName: 'Perfume', audioName: 'Perfume' },
  { name: 'כרית', imageName: 'Pillow', audioName: 'Pillow' },
  { name: 'פלסטלינה', imageName: 'Plasticine', audioName: 'Plasticine' },
  { name: 'שיח שושנים', imageName: 'Rose Bush', audioName: 'Rose Bush' },
  { name: 'רוזמרין', imageName: 'Rosemary', audioName: 'Rosemary' },
  { name: 'צעיף', imageName: 'Scarf', audioName: 'Scarf' },
  { name: 'חול ים', imageName: 'Sea Sand', audioName: 'Sea Sand' },
  { name: 'אצה', imageName: 'Seaweed', audioName: 'Seaweed' },
  { name: 'מדרכה', imageName: 'Sidewalk', audioName: 'Sidewalk' },
  { name: 'סליים', imageName: 'Slime', audioName: 'Slime' },
  { name: 'אבקת מרק', imageName: 'Soup Powder', audioName: 'Soup Powder' },
  { name: 'דשא סינטטי', imageName: 'Synthetic Grass', audioName: 'Synthetic Grass' },
  { name: 'טלק', imageName: 'Talcum', audioName: 'Talcum' },
  { name: 'משחת טייגר באלם', imageName: 'Tiger Balm Ointment', audioName: 'Tiger Balm Ointment' },
  { name: 'מים', imageName: 'Water', audioName: 'Water' },
  { name: 'כפפות צמר', imageName: 'Wool Gloves', audioName: 'Wool Gloves' },
];

export default function AntiAllergen({ onSelected, setAntiAllergen }) {
  const [selectedAntiAllergen, setSelectedAntiAllergen] = useState("");
  
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      onSelected(new URL(`${soundUrl}${value.replace(' ', '%20')}.mp3`).href);
      setAntiAllergen(value);
    }
  };

  const renderAntiAllergen = antiAllergen.map((allergen) => (
    <label className={`antiAllergenCheckbox ${selectedAntiAllergen === allergen.audioName ? 'selectedAntiAllergen' : ''}`} key={allergen.name}>
      <img src={`${imageUrl}${allergen.imageName.replace(' ', '+')}.jpg`} alt={allergen.name} />
      <span className="checkbox-image">
        <input
          type="checkbox"
          value={allergen.audioName}
          checked={selectedAntiAllergen === allergen.audioName}
          onChange={handleCheckboxChange}
        />
      </span>
      {allergen.name}
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
