import React, { Component } from "react";
import screens from "../screenLinks";
import Hammer from "react-hammerjs";
import { withRouter } from "react-router-dom";

class Settings extends Component {
  state = {
    currentScreen: "Setting0"
  };

  handleScroll = direction => {
    if (direction === 4) {
      this.props.scrollBack();
      this.props.history.push("feed");
    }
  };

  render() {
    const currentScreenObj = screens.byId[this.state.currentScreen];
    console.log(this.state.currentScreen);
    console.log(screens);
    console.log(screens.byId[this.state.currentScreen]);
    return (
      <Hammer onSwipe={({ direction }) => this.handleScroll(direction)}>
        {/* eslint-disable */}
        <div
          style={{
            transform: `scale(${screen.width / 667})`,
            transformOrigin: "left top",
            position: "relative",
            top: 0,
            left: 0
          }}>
          {/* eslint-enable */}
          <img
            draggable="false"
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
      </Hammer>
    );
  }
}

export default (Settings = withRouter(Settings));
