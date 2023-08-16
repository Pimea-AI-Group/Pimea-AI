import React, { useState } from 'react';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Symptoms/'

const symptomsArray = [
    { name: `Breath`, screenName: `קושי בנשימה` },
    { name: `Coughing`, screenName: `שיעול` },
    { name: `Eyes`, screenName: `עיניים` },
    { name: `Fatigue`, screenName: `עייפות` },
    { name: `Headache`, screenName: `כאב ראש` },
    { name: `Itching`, screenName: `גירוד` },
    { name: `Nausea`, screenName: `בחילה` },
    { name: `Nose`, screenName: `נזלת` },
    { name: `Skin Rash`, screenName: `פריחה` },
    { name: `Swelling`, screenName: `נפיחות` },
    { name: `Vomiting`, screenName: `הקאות` }
]

export default function Symptoms(props) {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedItems((prevCheckedItems) => [...prevCheckedItems, value]);
        } else {
            setCheckedItems((prevCheckedItems) =>
                prevCheckedItems.filter((item) => item !== value)
            );
        }

        setCheckedItems((updatedCheckedItems) => {
            props.setSymptoms(updatedCheckedItems);
            return updatedCheckedItems;
        });
    };

    // Function to render symptoms from symptomsArray
    const renderSymptoms = symptomsArray.map((symptom) => (
        <label className={`symptomCheckbox ${checkedItems.includes(symptom.screenName) ? 'selectedSymptom' : ''}`} key={symptom.name}>
            <img src={`${imageUrl}${symptom.name}.jpg`} alt={symptom.name} />
            <span className="checkbox-image">
                <input
                    type="checkbox"
                    value={symptom.screenName}
                    onChange={handleCheckboxChange}
                />
            </span>
            {symptom.screenName}
        </label>
    ));
    
    return (
        <div>
            <h1>מה הם הסימפטומים לאלרגיה זו שלך?</h1>
            <div className='symptomsDiv'>
                {renderSymptoms}
            </div>
        </div>
    );
}
