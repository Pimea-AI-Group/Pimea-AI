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
        nav('/allergyinfo', { state: { user: data.user } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>ברוכים הבאים</h1>
      <p style={{marginBottom: `0px`}}>מיד נתחיל בתהליך הנחיה של דמיון מודרך שייעודו הוא הפחתת התגובה האלרגית שאת/ה חווה.</p>
      <p style={{marginBottom: `0px`}}>לתשומת ליבך- כדי לנקוט משנה זהירות נוכל להיכנס לתהליך עבור אלרגיות שקיבלו את אישורך המפורש שהן אינן מוגדרות כמסכנות חיים עבורך.</p>
      <p style={{marginBottom: `0px`}}>במהלך התהליך נשתמש בדמיון מודרך כדי לשנות יחד את ההתניות הפנימיות של התת מודע שלך ושל מערכת החיסון שלך במטרה להקל, או להעלים את התגובה האלרגית תוך זמן קצר. ע"י כך נשפר משמעותית את איכות חייך.</p>
      <p style={{marginBottom: `0px`}}>במהלך התהליך תהיה הנחיה קולית וויזואלית שתפעל ברצף, כל שעליך לעשות הוא להיכנס לתהליך במקום ובזמן שנוחים לך. החיווי יכול להתבצע קולית ע"י אמירת YES/ NO או ע"י לחיצה על כפתורי YES/ NO שיופיעו על המסך. במהלך התהליך תתבקש/י להתחבר לתחושות גוף וזיכרונות שונים, ככל שהחיבור יהיה חזק ואוטנטי יותר, כך גם יגברו סיכויי ההצלחה.</p>
      <p style={{marginBottom: `0px`}}>בנקודות מסוימות בתהליך יהיה צורך לתת חיווי למערכת על מנת להמשיך בתהליך בצורה מיטבית המתאימה רק לך.</p>
      <p style={{marginBottom: `0px`}}>התהליך אורך 30-40 דקות ויש לעבור אותו בסביבה המאפשרת נוחות ושקט ללא הפרעות והסחות דעת מתחילתו ועד סופו. הרצף הינו תנאי הכרחי להצלחה.
        מומלץ מאוד להאזין לתהליך להנחיה עם אוזניות, אך אין זה הכרחי.</p>
      <input id="password" type="text" placeholder="הכנס סיסמא זמנית" /><br />
      <button onClick={() => logIn()}>היכנס</button>
    </div >
  );
}
