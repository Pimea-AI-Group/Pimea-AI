import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Symptoms from '../Components/Symptoms';
import SelectAllergy from '../Components/SelectAllergy';
import Disclaimer from './Disclaimer';

export default function AllergyInfo() {
  const nav = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const [symptoms, setSymptoms] = useState([]);
  const [selectedAllergy, setSelectedAllergy] = useState('');
  const [flag, setFlag] = useState(true);
  const [isDisclaimerChecked, setIsDisclaimerChecked] = useState(false);
  const [flagDis, setFlagDis] = useState(false); 


  const [formData, setFormData] = useState({
    name: selectedAllergy,
    allergyDiagnosed: '',
    allergyDiagnosisExplanation: '',
    yearsWithAllergy: '',
    selectedSymptoms: [],
    medicine: '',
    formerTreatment: '',
    sufferScale: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.selectedSymptoms = symptoms;

    if (!isDisclaimerChecked) {
      alert("בבקשה אשר את תנאי השירות");
      return;
    }

    fetch('http://3.126.91.66:3000/AddAllergyInfo', {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        email: user.email,
        allergy: selectedAllergy,
        formData
      })
    })
      .then((res) => {
        return res.json()
      })
      .catch((err) => {
        console.log(err);
      })
    nav('/treatment', { state: { allergy: selectedAllergy } });
  };

  const show = () => {
    return <Symptoms setSymptoms={setSymptoms} />
  }

  const showDisclaimer = () => {
    if (flagDis) {
      return <Disclaimer />;
    }
  }


  return (
    <div>
      {flag ? (
        <SelectAllergy setSelectedAllergy={setSelectedAllergy} setFlag={setFlag} />
      ) : (
        <>
          <h1>{`נשמח לדעת מספר דברים בקשר לאלרגיה שלך ל${selectedAllergy}`}</h1>
          <form onSubmit={handleSubmit}>
            <label>
              האם האלרגיה אובחנה בעבר?
              <select
                name="allergyDiagnosed"
                value={formData.allergyDiagnosed}
                onChange={handleInputChange}
                required
              >
                <option value="">בחר</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </label>
            <br />
            {formData.allergyDiagnosed === 'yes' && (
              <label>
                הסבר:
                <input
                  type="text"
                  name="allergyDiagnosisExplanation"
                  value={formData.allergyDiagnosisExplanation}
                  onChange={handleInputChange}
                  required
                />
              </label>
            )}
            <br />
            <label>
              כמה שנים קיימת האלרגיה אצליך?
              <input
                type="number"
                name="yearsWithAllergy"
                value={formData.yearsWithAllergy}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            {show()}
            <label>
              האם את/ה נוטל/ת תרופות לטיפול באלרגיה?
              <select
                name="medicine"
                value={formData.medicine}
                onChange={handleInputChange}
                required
              >
                <option value="">בחר</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </label>
            <br />
            {formData.medicine === 'yes' && (
              <label>
                איזה:
                <input
                  type="text"
                  name="medicineExplanation"
                  value={formData.medicineExplanation}
                  onChange={handleInputChange}
                  required
                />
              </label>
            )}
            <br />
            <label>
              האם יש לך ניסיון בתהליך שמשלב דימיון מודרך?
              <select
                name="formerTreatment"
                value={formData.formerTreatment}
                onChange={handleInputChange}
                required
              >
                <option value="">בחר</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </label>
            <br />
            {formData.formerTreatment === 'yes' && (
              <label>
                איזה?:
                <input
                  type="text"
                  name="formerTreatmentExplanation"
                  value={formData.formerTreatmentExplanation}
                  onChange={handleInputChange}
                  required
                />
              </label>
            )}
            <br />
            <label>
              כמה אתה סובל מאלרגיה זו (1-10): להוסיף (כאשר 1 מסמל כלל לא, ו 10 מסמל מאוד)
              <input
                type="number"
                name="sufferScale"
                value={formData.sufferScale}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <br />
            <button id='submitBTN' type="submit">המשך</button>
            <label>
              <input
                type="checkbox"
                checked={isDisclaimerChecked}
                onChange={() => setIsDisclaimerChecked(!isDisclaimerChecked)}
              />
              <label style={{background: 'none', color: 'black'}} onClick={() => setFlagDis(!flagDis)}>בבקשה אשר את תנאי השירות</label>
              {flagDis && <Disclaimer />}
            </label>
          </form>
        </>
      )
      }
    </div >
  );
}
