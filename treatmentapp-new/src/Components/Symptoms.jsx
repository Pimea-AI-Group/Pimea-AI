import React, { useState } from 'react';

import Coughing from '../Images/Symptoms/Coughing.jpg'
import Fatigue from '../Images/Symptoms/Fatigue.jpg'
import Headache from '../Images/Symptoms/Headache.jpg'
import Itching from '../Images/Symptoms/Itching.jpg'
import Eyes from '../Images/Symptoms/Eyes.jpg'
import Nausea from '../Images/Symptoms/Nausea.jpg'
import Nose from '../Images/Symptoms/Nose.jpg'
import SkinRash from '../Images/Symptoms/Skin Rash.jpg'
import Swelling from '../Images/Symptoms/Swelling.jpg'
import Vomiting from '../Images/Symptoms/Vomiting.jpg'
import Breath from '../Images/Symptoms/Breath.jpg'

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
      

    return (
        <div>
            <h1>מהם הסימפטומים לאלרגיה שלך?</h1>
            <div className='symptomsDiv'>
                <label className='symptomsCheckbox'>
                    <img src={Coughing} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="שיעול"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    שיעול
                </label>
                <label className='allergyCheckbox'>
                    <img src={Fatigue} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="עייפות"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    עייפות
                </label>
                <label className='allergyCheckbox'>
                    <img src={Headache} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="כאב ראש"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    כאב ראש
                </label>
                <label className='allergyCheckbox'>
                    <img src={Itching} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="גירוד"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    גירוד
                </label>
                <label className='allergyCheckbox'>
                    <img src={Eyes} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="עיניים"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    עיניים
                </label>
                <label className='allergyCheckbox'>
                    <img src={Nausea} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="בחילות"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    בחילות
                </label>
                <label className='allergyCheckbox'>
                    <img src={Swelling} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="נפיחות"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    נפיחות
                </label>
                <label className='symptomsCheckbox'>
                    <img src={Vomiting} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="הקאות"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    הקאות
                </label>
                <label className='allergyCheckbox'>
                    <img src={Breath} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="קשיי נשימה"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    קשיי נשימה
                </label>
                <label className='allergyCheckbox'>
                    <img src={Nose} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="נזלת"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    נזלת
                </label>
                <label className='allergyCheckbox'>
                    <img src={SkinRash} alt="Checkbox Image" />
                    <span className="checkbox-image">
                        <input
                            type="checkbox"
                            value="פריחה"
                            onChange={handleCheckboxChange}
                        />
                    </span>
                    פריחה
                </label>
            </div>
        </div>
    );
}
