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
      <h1>בחר מועד בו יהיה לך נוח שניצור איתך קשר</h1>
      <iframe src={calandlyLink} width="100%" height="1000" />
      <h3>אם לא קיבלת מייל בבקשה תבדוק בתיבת הספאם</h3>
    </div>
  );
}

