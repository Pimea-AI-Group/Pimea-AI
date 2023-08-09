import React from 'react'
import { useLocation } from 'react-router-dom';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/'

const allergiesArray = [
    { name: `Cat`, screenName: `חתול` },
    { name: `Dog`, screenName: `כלב` },
    { name: `Dust Bunny`, screenName: `קרדית האבק` },
    { name: `Grass`, screenName: `דשא` },
    { name: `Hay Fever`, screenName: `שפעת השחת` },
    { name: `Latex`, screenName: `לאטקס` },
    { name: `Pine Bloom`, screenName: `פריחת עץ האורן` }
]

export default function SelectAllergy(props) {
    const location = useLocation();
    const selectedAllergyArray = location.state.user.allergies;

    const handleAllergyClick = (allergyName) => {
        console.log(allergyName);
        props.setSelectedAllergy(`${allergyName.name}`);
        props.setFlag(false);
    };

    return (
        <div>
            <h1>באיזה מהאלרגיות שלך תרצה שנטפל היום?</h1>
            {selectedAllergyArray.map((allergy) => {
                const matchingAllergy = allergiesArray.find((a) => `${a.screenName}` === `${allergy.name}`);
                if (matchingAllergy) {
                    return (
                        <button
                            className='allergyButton'
                            key={allergy.name}
                            style={{ backgroundImage: `${imageUrl}${allergy.name}.jpg` }}
                            onClick={() => handleAllergyClick(allergy)}
                        >
                            {matchingAllergy.screenName}
                        </button>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    )
}
