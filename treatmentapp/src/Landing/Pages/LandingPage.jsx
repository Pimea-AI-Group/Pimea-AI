import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    phoneNumber: '',
    city: '',
    password: generateRandomPassword(),
  });

  function generateRandomPassword() {
    var password = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < 8; i++) {
      var randomIndex = Math.floor(Math.random() * charactersLength);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch('http://3.126.91.66:3000/addUser', {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        User: formData
      })
    })
      .then((res) => {
        navigate('/allergies', { state: { user: formData } })
        return res.json()
      })
      .catch((err) => {
        console.log(err);
      })
  };




  return (
    <div>
      <h1>ברוכים הבאים</h1>
      <p style={{margin: '0px'}}>תודה על נכונותך להשתתף בתהליך מודרך המהווה חלק ממיזם טכנולוגי ששם למטרה לשפר משמעותית את חייהם של אנשים הסובלים מאלרגיות שונות ע"י הפחתת הרגישות האלרגית שלהם בצורה מיידית, משמעותית ולטווח ארוך.</p>;
      <p style={{margin: '0px'}}>בעמוד זה יש לענות על כמה שאלות הכוללות פרטים אישיים, כשלב מקדים להשתתפות בתהליך. לאחר מכן יפתח דף המשך לצורך תיאום שיחה טלפונית קצרה וממוקדת, שמטרתה לוודא את ההתאמה המלאה שלך לתהליך</p>
      <form onSubmit={handleSubmit}>
        <label>
          שם פרטי:
          <br />
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="הכנס שם פרטי כאן"
            required
          />
        </label>
        <br />
        <label>
          שם משפחה:
          <br />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="הכנס שם משפחה כאן"
            required
          />
        </label>
        <br />
        <label>
          מגדר:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">בחר מגדר</option>
            <option value="male">זכר</option>
            <option value="female">נקבה</option>
            <option value="else">אחר</option>
          </select>
        </label>
        <br />
        <label>
          תאריך לידה:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          אימייל:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="הכנס אימייל כאן"
            required
          />
        </label>
        <br />
        <label>
          מספר טלפון:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="הכנס נייד ליצירת קשר"
            required
          />
        </label>
        <br />
        <label>
          מקום מגורים:
          <br />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="הכנס עיר כאן"
            required
          />
        </label>
        <br />
        <button id='submitBTN' type="submit">המשך לבחירת אלרגיה</button>
      </form>
    </div>
  );
}

