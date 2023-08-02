import React, { useState, useEffect } from 'react';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/GetUserDataByEmail?email=${email}`, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div className="user-data">
          <h2>User Data</h2>
          <p>
            <strong>שם פרטי:</strong> {userData.firstName}
          </p>
          <p>
            <strong>שם משפחה:</strong> {userData.lastName}
          </p>
          <p>
            <strong>אימייל:</strong> {userData.email}
          </p>
          <p>
            <strong>מגדר:</strong> {userData.gender}
          </p>
          <p>
            <strong>תאריך לידה:</strong> {userData.dob}
          </p>
          <p>
            <strong>מספר טלפון:</strong> {userData.phoneNumber}
          </p>
          <p>
            <strong>מקום מגורים:</strong> {userData.city}
          </p>
          <p>
            <strong style={{backgroundColor: 'yellow'}}>סיסמא:</strong> {userData.password}
          </p>
              <p>
                <strong>Allergies:</strong>
              {userData.allergies.map((allergy, index) => (
                <div key={index}>
                  <p>
                  <strong>שם האלרגיה:</strong> {allergy.name}
                  </p>
                  <p>
                  <strong>האם אובחנה:</strong> {allergy.allergyDiagnosed}
                  </p>
                  <p>
                  <strong>איזה אבחון בוצע?:</strong>{' '}
                    {allergy.allergyDiagnosisExplanation}
                  </p>
                  <p>
                  <strong>שנים עם האלרגיה:</strong> {allergy.yearsWithAllergy}
                  </p>
                  <p>
                  <strong>סימפטומים:</strong>{' '}
                    {allergy.selectedSymptoms.join(', ')}
                  </p>
                  <p>
                  <strong>תרופה:</strong> {allergy.medicine}
                  </p>
                  <p>
                  <strong>היסטוריית טיפולים:</strong>{' '}
                    {allergy.formerTreatment ? 'Yes' : 'No'}
                  </p>
                  <p>
                  <strong>רף כאב:</strong> {allergy.sufferScale}
                  </p>
                </div>
              ))}
          </p>
        </div>
      )}
    </div>
  );
};