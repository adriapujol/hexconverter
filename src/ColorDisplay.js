import React from 'react';

function ColorDisplay({ color, rgbColor, invertedColor, isInverted }) {

        let bg, txtColor, txt;
        if (isInverted) {
            bg = invertedColor;
            txtColor = color;
            txt = invertedColor;
        } else {
            bg = color;
            txtColor = invertedColor;
            txt = color;
        }
        // const colorStyles = `backgroundColor: #00ffff`;
        const rgbNum = rgbColor.join(',');
        // let bg = bgColor;
        // if (isInverted) bg=bgInverted;

        return (
            <div className="color" id="color" style={{backgroundColor: `#${bg}`}}>
                <h1 className="color-text uppercase-txt" id="color-text" style={{color: `#${txtColor}`}}>#{txt}</h1>
                <h1 className="color-text" id="color-text-rgb" style={{color: `#${txtColor}`}}>rgb({rgbNum})</h1>
            </div>
        );
    
}

export default ColorDisplay;