import React, { Component, Fragment } from "react";
import Alarms from "./views/Alarms";
import Settings from "./views/Settings";
import Feed from "./views/Feed";
import { ParallaxLayer } from "react-spring";

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activePage !== this.props.activePage) {
      this.scroll(nextProps.activePage);
    }
  }

  scroll = to => this.props.parallaxRef.scrollTo(to);

  render() {
    if (this.props.parallaxRef) {
      this.scroll(this.props.activePage);
    }
    return (
      <Fragment>
        <ParallaxLayer offset={0} speed={0.2}>
          <Alarms />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <Feed />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <Settings />
        </ParallaxLayer>
      </Fragment>
    );
  }
}
