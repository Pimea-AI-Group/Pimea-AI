import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const imagesUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/'
const catImg = { imagesUrl } + 'Allergies//Cat.jpg';
const dogImg = { imagesUrl } + 'Allergies/Dog.jpg';
const grassImg = { imagesUrl } + 'Allergies/Grass.jpg';
const dust_bunnyImg = { imagesUrl } + 'Allergies/DustBunny.jpg';
const pineBloomImg = { imagesUrl } + 'Allergies/Pine Bloom.jpg';
const latexImg = { imagesUrl } + 'Allergies/Latex.jpg';
const hayFeverImg = { imagesUrl } + 'Allergies/Hay Fever.jpg';

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
