import React, { Component } from "react";
import PaginationDots from "../components/PaginationDots/PaginationDots";
import { withRouter } from "react-router-dom";

const mapHistoryToStep = history => {
  let step;
  if (history.location.pathname.includes("alarms")) {
    step = 1;
  } else if (history.location.pathname.includes("feed")) {
    step = 2;
  } else if (history.location.pathname.includes("settings")) {
    step = 3;
  } else {
    step = 2;
  }
  return step;
};

class PaginationDotsContainer extends Component {
  state = {
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
    const { numberOfSteps } = this.state;
    const { history } = this.props;

    return (
      <div className="pagination-dots-container">
        <PaginationDots
          steps={numberOfSteps}
          currentStep={mapHistoryToStep(history)}
          onClick={this.onDotClick.bind(this)}
        />
      </div>
    );
  }
}

export default (PaginationDotsContainer = withRouter(PaginationDotsContainer));
