import React, { useState } from 'react';
import catImg from '../Images/Allergies/Cat.jpg';
import dogImg from '../Images/Allergies/Dog.jpg';
import grassImg from '../Images/Allergies/Grass.jpg';
import dust_bunnyImg from '../Images/Allergies/DustBunny.jpg';
import pineBloomImg from '../Images/Allergies/Pine Bloom.jpg';
import latexImg from '../Images/Allergies/Latex.jpg';
import hayFeverImg from '../Images/Allergies/Hay Fever.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

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

        fetch('/AddAllergies', {
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


    return (
        <div>
            <h1>באיזה אלרגיות תשמח שנטפל?</h1>
            <div className='allergyDiv'>
                <label className='allergyCheckbox'>
                    <img src={catImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="חתול"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    חתול
                </label>
                <label className='allergyCheckbox'>
                    <img src={dogImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="כלב"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    כלב
                </label>
                <label className='allergyCheckbox'>
                    <img src={grassImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="דשא"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    דשא
                </label>
                <label className='allergyCheckbox'>
                    <img src={dust_bunnyImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="קרדית האבק"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    קרדית האבק
                </label>
                <label className='allergyCheckbox'>
                    <img src={pineBloomImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="פריחת עץ האורן"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    פריחת עץ האורן
                </label>
                <label className='allergyCheckbox'>
                    <img src={latexImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="לטקס"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    לטקס
                </label>
                <label className='allergyCheckbox'>
                    <img src={hayFeverImg} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="קדחת השחת"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    שפעת השחת
                </label>
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
