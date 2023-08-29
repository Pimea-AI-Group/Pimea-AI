import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CalandlyLink() {
  const location = useLocation();
  const firstName = location.state.user.firstName;
  const lastName = location.state.user.lastName;
  const email = location.state.user.email;
  const calandlyLink = `https://calendly.com/pimea-ai/10min?name=${encodeURIComponent(firstName + ' ' + lastName)}&email=${encodeURIComponent(email)}`;

  return (
    <div>
      <h1>נא לבחור מועד לפגישת התאמה וירטואלית (בגוגל-מיט)</h1>
      <iframe src={calandlyLink} width="100%" height="1000" />
      <h3>במידה ולא הגיעה אליך הודעת אימייל בנוגע למועד הפגישה כדאי לבדוק בתיבת הספאם. תודה</h3>
    </div>
  );
}

