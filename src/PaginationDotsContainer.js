import React, { Component } from "react";
import PaginationDots from "./PaginationDots";
import { withRouter } from "react-router-dom";

class PaginationDotsContainer extends Component {
  state = {
    selectedStep: 2,
    numberOfSteps: 3
  };

  onDotClick = dotIndex => {
    const { history } = this.props;
    const { selectedStep } = this.state;
    switch (dotIndex) {
      case 1:
        history.push("alarms");
        break;
      case 2:
        history.push("feed");
        break;
      case 3:
        history.push("settings");
        break;
      default:
        console.error("Invalid navigation state");
    }
    this.setState({ selectedStep: dotIndex });
  };

  render() {
    const { selectedStep, numberOfSteps } = this.state;

    return (
      <div className="pagination-dots-container">
        <PaginationDots
          steps={numberOfSteps}
          currentStep={selectedStep}
          onClick={this.onDotClick.bind(this)}
        />
      </div>
    );
  }
}

export default (PaginationDotsContainer = withRouter(PaginationDotsContainer));
