import React from 'react';

function ColorDisplay({ color, rgbColor, bgColor, bgInverted, isInverted, textColor }) {

        // const colorStyles = `backgroundColor: #00ffff`;
        const rgbNum = rgbColor.join(',');
        let bg = bgColor;
        if (isInverted) bg=bgInverted;

        return (
            <div className="color" id="color" style={{backgroundColor: `#${bg}`}}>
                <h1 className="color-text" id="color-text" style={{color: `#${textColor}`}}>#{color}</h1>
                <h1 className="color-text" id="color-text-rgb" style={{color: `#${textColor}`}}>rgb({rgbNum})</h1>
            </div>
        );
    
}

export default ColorDisplay;