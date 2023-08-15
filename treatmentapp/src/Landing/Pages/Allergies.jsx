import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// URL for the base image
const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/';

// Array containing all allergies and their screen names
const allergiesArray = [
    { name: `Cat`, screenName: `חתולים` },
    { name: `Dog`, screenName: `כלבים` },
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

        if (selectedAllergies.length = 0) {
            console.log("חובה לבחור אלרגיה");
            return;
        }

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
        <label className={`allergyCheckbox ${selectedAllergies.some(sel => sel.name === allergy.name) ? 'selectedAllergy' : ''}`} key={allergy.name}>
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
            <h1>באילו אלרגיות נוכל לטפל?</h1>
            <h3>בבקשה לסמן רק אלרגיות שאינן מסכנות חיים</h3>
            <div className='allergyDiv'>
                {renderAllergies}
                <button style={{ fontSize: `xxx-large` }} onClick={handleButtonClick}>המשך לקביעת פגישה</button>
            </div>
        </div>
    );
}
