import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Cat from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/Cat.jpg';
import Dog from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/Dog.jpg';
import Grass from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/Grass.jpg';
import DustMites from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/DustBunny.jpg';
import PineBloom from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/Pine Bloom.jpg'
import Latex from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/Latex.jpg'
import HayFever from 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/Hay Fever.jpg'

export default function SelectAllergy(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedAllergyArray = location.state.user.allergies;

    const allergies = [
        { name: 'חתול', image: Cat },
        { name: 'כלב', image: Dog },
        { name: 'דשא', image: Grass },
        { name: 'קרדית האבק', image: DustMites },
        { name: 'פריחת עץ האורן', image: PineBloom },
        { name: 'קדחת השחת', image: HayFever },
        { name: 'לטקס', image: Latex }
    ];

    const handleAllergyClick = (allergyName) => {
        props.setSelectedAllergy(`${allergyName}`);
        props.setFlag(false);
    };

    return (
        <div>
            {console.log(selectedAllergyArray)}
            <h1>באיזה מהאלרגיות שלך תרצה שנטפל היום?</h1>
            {selectedAllergyArray.map((allergy) => {
                const matchingAllergy = allergies.find((a) => `${a.name}` === `${allergy.name}`);
                if (matchingAllergy) {
                    return (
                        <button
                            className='allergyButton'
                            key={allergy.name}
                            style={{ backgroundImage: `url(${matchingAllergy.image})` }}
                            onClick={() => handleAllergyClick(allergy.name)}
                        >
                            {matchingAllergy.name}
                        </button>
                    );
                }
            })}
        </div>
    )
}
