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

    fetch('/addUser', {
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
      <p>אפליקציה זו מבוססת על מנגנון מודרך של זיכרון כדי לטפל באלרגיות.
        האפליקציה מנתחת את הזיכרון שלך כדי לזהות את נקודות ההפרע הפוטנציאליות במערכת החיסון שלך ולהשתמש בכן להקל על התגובות האלרגיות שלך.
        דרך הגישה הזו, האפליקציה מאפשרת לך לעבוד במודעות מלאה עם זיכרונות ותגובות גוף שונות, מה שמסייע בהבנה ובשליטה יותר טובה באלרגיות שלך.
        בנוסף, האפליקציה מעניקה לך כלים כדי לשלוט בראקציות אלרגיות ולשפר את איכות החיים שלך.</p>
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

