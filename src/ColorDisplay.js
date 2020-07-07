import React from 'react';

function ColorDisplay({ color, rgbColor, invertedColor, rgbInverted, isInverted }) {

        let bg, txtColor, txt, rgbNum;
        if (isInverted) {
            bg = invertedColor;
            txtColor = color;
            txt = invertedColor;
            rgbNum = rgbInverted.join(',');
        } else {
            bg = color;
            txtColor = invertedColor;
            txt = color;
            rgbNum = rgbColor.join(',');
        }

        return (
            <div className="color" id="color" style={{backgroundColor: `#${bg}`}}>
                <h1 className="color-text uppercase-txt" id="color-text" style={{color: `#${txtColor}`}}>#{txt}</h1>
                <h1 className="color-text" id="color-text-rgb" style={{color: `#${txtColor}`}}>rgb({rgbNum})</h1>
            </div>
        );
    
}

export default ColorDisplay;