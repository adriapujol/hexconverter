import React, { Component } from 'react';
import './ColorDisplay';
import ColorDisplay from './ColorDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      rgbColor: [],
      bgColor: '',
      bgInverted: '',
      textColor: '',
      isInverted: false
    };

    this.handleDisplayColor = this.handleDisplayColor.bind(this);
    this.handleInputColor = this.handleInputColor.bind(this);
    this.handleInvertColor = this.handleInvertColor.bind(this);
  
  }


  handleDisplayColor() {
    const hex = this.state.color;
    if(!isHexColor(hex)) return;
    const rgb = convert2RGB(hex);
    const txtColor = invertHEX(hex);
    this.setState({
      color: hex,
      rgbColor: rgb,
      bgColor: hex,
      textColor: txtColor,
      isInverted: false
    })
  }

  handleInvertColor(){
    const color = this.state.color;
    const invertedColor = invertHEX(color);
    if(!isHexColor(color)) return;
    this.setState({
      bgInverted: invertedColor,
      textColor: color,
      isInverted: true
    })
  }

  handleInputColor(e) {
    const inputColor = e.target.value;
    let rgbInput = [];
    if (inputColor.length === 6 && isHexColor(inputColor)) {
      rgbInput = convert2RGB(inputColor);
      this.setState({
        color: inputColor,
        rgbColor: rgbInput
      })
      
    } 
      
  }



  render() {
    return (
      <div className="container">
        <div className="title"><span>HEX to RGB</span></div>
        <div className="inputs">
          <div>
            #<input type="text" maxLength="6" className="hex" id="hex" onChange={this.handleInputColor}></input>
          </div>
          <div className="btn-block">
            <button className="btn-display" id="btn-display" onClick={this.handleDisplayColor}>display</button>
            <button className="btn-invert" id="btn-invert" onClick={this.handleInvertColor}>complementary</button>
            {/* <button className="btn-rgb" id="btn-rgb">rgb</button> */}
          </div>
        </div>
        <ColorDisplay color={this.state.color} rgbColor={this.state.rgbColor} bgColor={this.state.bgColor} bgInverted={this.state.bgInverted} isInverted={this.state.isInverted} textColor={this.state.textColor}/>
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