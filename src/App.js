import React, { Component } from 'react';
import './ColorDisplay';
import ColorDisplay from './ColorDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      rgbColor: [],
      invertedColor: '',
      rgbInverted: '',
      isInverted: false
    };

    this.handleInputColor = this.handleInputColor.bind(this);
    this.handleInvertColor = this.handleInvertColor.bind(this);
  
  }


  handleInvertColor() {
    if (!this.state.color) return;
    this.setState(prevState => ({
      isInverted: !prevState.isInverted
    }));
  }

  handleInputColor(e) {
    const inputColor = e.target.value;
    if (inputColor.length === 6 && isHexColor(inputColor)) {
      let rgbInput = convert2RGB(inputColor);
      let inverted = invertHEX(inputColor);
      let rgbInvert = convert2RGB(inverted);

      this.setState({
        color: inputColor,
        rgbColor: rgbInput,
        invertedColor: inverted,
        rgbInverted: rgbInvert
      })
      
    }
      
  }


  render() {
    return (
      <div className="container">
        <div className="title"><span>HEX to RGB</span></div>
        <div className="inputs">
          <div>
            #<input type="text" maxLength="6" className="hex" id="hex" placeholder="HEX number" onChange={this.handleInputColor}></input>
          </div>
          <div className="btn-block">
            <button className="btn-invert" id="btn-invert" onClick={this.handleInvertColor}>complementary</button>
          </div>
        </div>
        <ColorDisplay color={this.state.color} rgbColor={this.state.rgbColor} invertedColor={this.state.invertedColor} rgbInverted={this.state.rgbInverted} isInverted={this.state.isInverted} />
        <footer>
          <p>
            by adrienhill
          </p>
        </footer>
  
      </div>
    );
  }
}

export default App;

//========FUNCTIONS ==============//


// HEX to RGB converter

const convert2RGB = (hex) => {
  const rgb = [];
  for (let i = 0; i < 6; i+=2) {
      rgb.push(parseInt(hex[i].concat(hex[i+1]), 16));     
  }
  return rgb;
};


//invert HEX color

const invertHEX = (hex) => {
  let rgb = convert2RGB(hex);
  let r = (255 - rgb[0]).toString(16);
  let g = (255 - rgb[1]).toString(16);
  let b = (255 - rgb[2]).toString(16);
  
  return padZero(r) + padZero(g) + padZero(b);
}


//WRONG NUMBER

// const wrongHEX = () => {
//   colorText.style.color = "#FFFFFF";
//   colorText.innerHTML = "Not a valid number";
//   color.style.backgroundColor = "#000000";
//   // alert("Not a valid number. Make sure it has 6 characters");
// };

  //IS HEX VALID

  const isHexColor = hex => typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex));

  //PAD with Zero

  const padZero = (str) => {
    if(str.length < 2) {
        str = '0' + str;
    }
    return str;
  }