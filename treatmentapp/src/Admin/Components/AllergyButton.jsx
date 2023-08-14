import React, { useState } from 'react';

// This is the individual allergy button component that also displays allergy details when clicked.
export default function AllergyButton({ allergy }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>{allergy.name}</button>
      
      {showDetails && (
        <div>
          <p><strong>האם אובחנה:</strong> {allergy.allergyDiagnosed}</p>
          <p><strong>איזה אבחון בוצע?:</strong> {allergy.allergyDiagnosisExplanation}</p>
          <p><strong>שנים עם האלרגיה:</strong> {allergy.yearsWithAllergy}</p>
          <p><strong>סימפטומים:</strong> {allergy.selectedSymptoms.join(', ')}</p>
          <p><strong>תרופה:</strong> {allergy.medicine}</p>
          <p><strong>היסטוריית טיפולים:</strong> {allergy.formerTreatment ? 'Yes' : 'No'}</p>
          <p><strong>רף כאב:</strong> {allergy.sufferScale}</p>
        </div>
      )}
    </div>
  );
}
