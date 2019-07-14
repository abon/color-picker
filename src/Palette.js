import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            step={100}
            max={900}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
