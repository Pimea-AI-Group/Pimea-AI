import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function LogIn() {
  const nav = useNavigate();

  const logIn = () => {
    const password = document.getElementById('password').value;

    fetch(`http://3.126.91.66:3000/GetUserData?password=${password}`, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user);
        nav('/allergyinfo', { state: { user: data.user } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>ברוכים הבאים</h1>
      <p>מיד נתחיל בתהליך של דמיון מודרך שייעודו להשפיע על התגובה האלרגית שאת/ה חווה. בתהליך זה נשנה יחד את ההתניות של הפנימיות של התודעה ושל מערכת החיסון שלך במטרה להקל או להעלים את התגובה האלרגית תוך זמן קצר, ולשפר את איכות חייך.
        במהלך התהליך תונחה באמצעות קבצי קול שיפעלו ברצף. בנקודות מסוימות בתהליך תתבקש לתת חיווי למערכת על מנת להמשיך בתהליך. החיווי יכול להתבצע קולית ע"י אמירת YES/ NO או ע"י לחיצה על כפתורי YES/ NO שיופיעו על המסך.
        במהלך התהליך תתבקש להתחבר לתחושת גוף וזיכרונות שונים.
        התהליך אורך כ- -30-40 דקות ורצוי לעבור אותו בסביבה המאפשרת נוחות ושקט. מומלץ להאזין לתהליך עם אוזניות, אך אין זה הכרחי.</p>
      <input id="password" type="text" placeholder="הכנס סיסמא זמנית" /><br />
      <button onClick={() => logIn()}>היכנס</button>
    </div>
  );
}
