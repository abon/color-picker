import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">ColorPicker</a>
        </div>
        <div className="slider-container">
          <span className="slider-level">Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              step={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}
