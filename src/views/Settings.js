import React, { Component } from "react";
import screens from "../screenLinks";

export default class Settings extends Component {
  state = {
    currentScreen: "Setting0"
  };
  render() {
    const currentScreenObj = screens.byId[this.state.currentScreen];
    console.log(this.state.currentScreen);
    console.log(screens);
    console.log(screens.byId[this.state.currentScreen]);
    return (
      <div>
        <img
          style={{ position: "relative", width: "667px", height: "375px" }}
          src={currentScreenObj.img}
          className="mockupScreen"
        />
        {currentScreenObj.hotspots.map((hotspot, index) => (
          <div
            key={index}
            style={{
              background: "transparent",
              position: "absolute",
              left: hotspot.x,
              top: hotspot.y,
              width: hotspot.width,
              height: hotspot.height
            }}
            onClick={() => this.setState({ currentScreen: hotspot.to })}
          />
        ))}
      </div>
    );
  }
}
