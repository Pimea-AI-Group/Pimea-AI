import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/'


const catImg = () => {
    const catImageUrl = { imagesUrl } + 'Allergies/Cat.jpg';
    return (
        <div>
          <img src={ catImageUrl } alt="Image from S3" />
        </div>
      );
}

const dogImg = () => {
    const dogImageUrl = { imagesUrl } + 'Allergies/Dog.jpg';
    return (
        <div>
          <img src={ dogImageUrl } alt="Image from S3" />
        </div>
      );
}

const grassImg = () => {
    const grassImageUrl = { imagesUrl } + 'Allergies/Grass.jpg';
    return (
        <div>
          <img src={ grassImageUrl } alt="Image from S3" />
        </div>
      );
}

const dust_bunnyImg = () => {
    const dust_bunnyImageUrl = { imagesUrl } + 'Allergies/DustBunny.jpg';
    return (
        <div>
          <img src={ dust_bunnyImageUrl } alt="Image from S3" />
        </div>
      );
}

const hayFeverImg = () => {
    const hayFeverImageUrl = { imagesUrl } + 'Allergies/Hay Fever.jpg';
    return (
        <div>
          <img src={ hayFeverImageUrl } alt="Image from S3" />
        </div>
      );
}

const pineBloomImg = () => {
    const pineBloomImageUrl = { imagesUrl } + 'Allergies/Pine Bloom.jpg';
    return (
        <div>
          <img src={ pineBloomImageUrl } alt="Image from S3" />
        </div>
      );
}

const latexImg = () => {
    const latexImageUrl = { imagesUrl } + 'Allergies/Latex.jpg';
    return (
        <div>
          <img src={ latexImageUrl } alt="Image from S3" />
        </div>
      );
}


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
