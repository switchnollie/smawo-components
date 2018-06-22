import React, { Component } from "react";
import PaginationDots from "../components/PaginationDots/PaginationDots";
import { withRouter } from "react-router-dom";

const mapHistoryToStep = history => {
  let step;
  switch (history.location.pathname) {
    case "/alarms":
      step = 1;
      break;
    case "/feed":
      step = 2;
      break;
    case "/settings":
      step = 3;
      break;
    default:
      step = 2;
  }
  return step;
};

class PaginationDotsContainer extends Component {
  state = {
    selectedStep: mapHistoryToStep(this.props.history),
    numberOfSteps: 3
  };

  onDotClick = dotIndex => {
    const { history } = this.props;
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
