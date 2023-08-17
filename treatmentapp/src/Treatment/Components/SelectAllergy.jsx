import React from 'react'
import { useLocation } from 'react-router-dom';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/'

const allergiesArray = [
    { name: `Cat`, screenName: `חתולים` },
    { name: `Dog`, screenName: `כלבים` },
    { name: `Dust Bunny`, screenName: `קרדית האבק` },
    { name: `Grass`, screenName: `דשא` },
    { name: `Hay Fever`, screenName: `קדחת השחת` },
    { name: `Latex`, screenName: `לאטקס` },
    { name: `Pine Bloom`, screenName: `פריחת עץ האורן` }
]

export default function SelectAllergy(props) {
    const location = useLocation();
    const selectedAllergyArray = location.state.user.allergies;

    const handleAllergyClick = (allergyName) => {
        props.setSelectedAllergy(`${allergyName.name}`);
        props.setFlag(false);
    };

    return (
        <div>
                  <label>
        האם אתה מוכן להשקיע (זמן/כסף) כדי להיפתר מהאלרגיות מהן אתה סובל, או להפחית אותן משמעותית, ללא צורך בנטילת תרופות? בסולם של 1-10 (כאשר 1 מסמל כלל לא, ו 10 מסמל המון)
        <input
          type="number"
          name="comitment"
          required
        />
      </label>
      <br />
      <label>
        כמה היית מוכן לשלם על טיפול מהסוג הזה מתוך הנחה/אמונה/תקווה שהוא יהיה יעיל לתקופה ארוכה?
        <select
          name="payment"
          required
        >
          <option value="">בחר</option>
          <option value="0">0ש"ח</option>
          <option value="25">25ש"ח</option>
          <option value="50">50ש"ח</option>
          <option value="100">100ש"ח</option>
          <option value="150">150ש"ח</option>
        </select>
      </label>
      <br />
      <label>
        האם אתה מחוייב לעצמך להשתתף באופן פעיל בתהליך ההנחיה שבמערכת שלנו כדי להגביר את הסיכוי להפחתת הרגישות האלרגית שלך?
        <select
          name="obligated"
          required
        >
          <option value="">בחר</option>
          <option value="yes">כן</option>
          <option value="no">לא</option>
        </select>
      </label>
      <br />
            <h1>באיזו אלרגיה נטפל היום?</h1>
            {selectedAllergyArray.map((allergy) => {
                const matchingAllergy = allergiesArray.find((a) => `${a.name}` === `${allergy.name}`);
                <img src={`${imageUrl}${allergy.name}.jpg`} alt={allergy.name} />
                if (matchingAllergy) {
                    return (
                        <button
                            className='allergyButton'
                            key={allergy.name}
                            onClick={() => handleAllergyClick(allergy)}
                        >
                            {matchingAllergy.screenName}
                        </button>
                    );
                } else {
                    return null;
                }
                <br />
            })}
        </div>
    )
}
