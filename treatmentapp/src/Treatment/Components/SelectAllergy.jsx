import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const imageUrl = 'https://pimea-ai-bucket.s3.eu-west-1.amazonaws.com/mediabin/Images/Allergies/'

const allergiesArray = [
    { name: `Cat`, screenName: `חתולים` },
    { name: `Dog`, screenName: `כלבים` },
    { name: `Dust Bunny`, screenName: `קרדית האבק` },
    { name: `Grass`, screenName: `דשא` },
    { name: `Hay Fever`, screenName: `קדחת השחת` },
    { name: `Latex`, screenName: `לאטקס` },
    { name: `Pine Bloom`, screenName: `פריחת עץ האורן` }
]

export default function SelectAllergy(props) {
    const location = useLocation();
    const selectedAllergyArray = location.state.user.allergies;
    const email = location.state.user.email;
    const [commitment, setCommitment] = useState('');
    const [money, setMoney] = useState(0);
    const [obligated, setObligated] = useState(false);
    const [selectedAllergy, setSelectedAllergy] = useState(null);

    const handleButtonClick = async (e) => {
        e.preventDefault();

        // fetch('http://3.126.91.66:3000/AddAnswers', {
        //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        //     method: 'post',
        //     body: JSON.stringify({
        //         email,
        //         commitment, money, obligated
        //     })
        // })
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        props.setFlag(false);
    };

    const handleAllergyClick = (allergyName) => {
        setSelectedAllergy(allergyName.name); // Set selected allergy
        props.setSelectedAllergy(`${allergyName.name}`);
    };

    return (
        <div>
            <h1>באיזו אלרגיה נטפל היום?</h1><br />
            {selectedAllergyArray.map((allergy) => {
                const matchingAllergy = allergiesArray.find((a) => `${a.name}` === `${allergy.name}`);
                return (
                    <div
                        className={`image-wrapper ${selectedAllergy === allergy.name ? 'selected' : ''}`}
                        key={allergy.name}
                    >
                        {/* <img src={`${imageUrl}${allergy.name}.jpg`} alt={allergy.name} /> */}
                        {matchingAllergy ? (
                            <button
                                className={`allergyButton ${selectedAllergy === allergy.name ? 'selected' : ''}`}
                                onClick={() => handleAllergyClick(allergy)}
                                style={{ backgroundImage: `url(${imageUrl}${allergy.name.replace(/ /g, '%20')}.jpg)` }}
                            >
                                {matchingAllergy.screenName}
                            </button>
                        ) : null}
                    </div>
                );
            })}
            <label>
                האם אתה מוכן להשקיע (זמן/כסף) כדי להיפטר מהאלרגיות מהן אתה סובל, או להפחית אותן משמעותית, ללא צורך בנטילת תרופות? בסולם של 1-10 (כאשר 1 מסמל כלל לא, ו 10 מסמל המון)
                <input
                    type="number"
                    name="commitment"
                    onChange={(e) => setCommitment(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                כמה היית מוכן לשלם על טיפול מהסוג הזה מתוך הנחה/אמונה/תקווה שהוא יהיה יעיל לתקופה ארוכה?
                <select
                    name="money"
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                    required
                >
                    <option value="">בחר</option>
                    <option value="0">0 ש"ח</option>
                    <option value="25">25 ש"ח</option>
                    <option value="50">50 ש"ח</option>
                    <option value="100">100 ש"ח</option>
                    <option value="150">150 ש"ח</option>
                </select>
            </label>
            <br />
            <label>
                האם אתה מסכים להשתתף באופן פעיל בתהליך ההנחיה שבמערכת שלנו כדי להגביר את הסיכוי להפחתת הרגישות האלרגית שלך?
                <select
                    name="obligated"
                    value={obligated}
                    onChange={(e) => setObligated(e.target.value)}
                    required
                >
                    <option value="">בחר</option>
                    <option value="yes">כן</option>
                    <option value="no">לא</option>
                </select>
            </label>
            <br />
            <button onClick={handleButtonClick}>המשך</button>
        </div>
    )
}
