import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// URL for the base image
const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/';

// Array containing all allergies and their screen names
const allergiesArray = [
    { name: `Cat`, screenName: `חתול` },
    { name: `Dog`, screenName: `כלב` },
    { name: `Dust Bunny`, screenName: `קרדית האבק` },
    { name: `Grass`, screenName: `דשא` },
    { name: `Hay Fever`, screenName: `קדחת השחת` },
    { name: `Latex`, screenName: `לאטקס` },
    { name: `Pine Bloom`, screenName: `פריחת עץ האורן` }
]

export default function Allergies() {
    const nav = useNavigate();
    const location = useLocation();
    const email = location.state.user.email;
    const [selectedAllergies, setSelectedAllergies] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedAllergies((prevSelectedAllergies) => [
                ...prevSelectedAllergies,
                {
                    name: value,
                    allergyDiagnosed: '',
                    allergyDiagnosisExplanation: '',
                    yearsWithAllergy: 0,
                    selectedSymptoms: [],
                    customSymptoms: '',
                    medicine: '',
                    formerTreatment: false,
                    sufferScale: 0
                }
            ]);
        } else {
            setSelectedAllergies((prevSelectedAllergies) =>
                prevSelectedAllergies.filter((allergy) => allergy.name !== value))
        }
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();

        fetch('http://3.126.91.66:3000/AddAllergies', {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify({
                email,
                selectedAllergies
            })
        })
            .then((res) => {
                return res.json()
            })
            .catch((err) => {
                console.log(err);
            })
        nav('/calandly', { state: { user: location.state.user } });
    };

    // Function to render allergies from allergiesArray
    const renderAllergies = allergiesArray.map((allergy) => (
        <label className='allergyCheckbox' key={allergy.name}>
            <img src={`${imageUrl}${allergy.name}.jpg`} alt={allergy.name} />
            <span className="checkbox-image">
                <input
                    type="checkbox"
                    value={allergy.name}
                    onChange={handleCheckboxChange}
                />
            </span>
            {allergy.screenName}
        </label>
    ));

    return (
        <div>
            <h1>באיזה אלרגיות תשמח שנטפל?</h1>
            <div className='allergyDiv'>
                {renderAllergies}
                <button onClick={handleButtonClick}>המשך לקביעת פגישה</button>
            </div>
            <label>
                האם אחת מהאלרגיה מסכנת חיים?
            </label>
            <input
                type="checkbox"
                name="allergyLifeThreatening"
                onClick={() => { alert("לצערינו אינך מתאים להליך טיפול זה"); nav('/') }}
            />
        </div>
    );
}
