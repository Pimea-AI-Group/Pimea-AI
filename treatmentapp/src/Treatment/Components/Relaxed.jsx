import React from 'react';

function Relaxed({ onYesClick, onNoClick }) { 
    return (
        <div>
            <button onClick={onYesClick}>Yes</button>
            <button onClick={onNoClick}>No</button> 
        </div>
    );
}

export default Relaxed;
