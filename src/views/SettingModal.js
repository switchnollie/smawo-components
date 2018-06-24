import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import SelectWheel from "../assets/wheel.svg";

Modal.setAppElement("#root");

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    width: "45%",
    height: "73.5%",
    right: "auto",
    bottom: "auto",
    padding: 0,
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2E2E57",
    borderRadius: "3px",
    border: "2px solid #454573",
    boxShadow: "0px 5px 5px 0px rgba(21, 23, 46, 0.4)"
  }
};

export default class SettingModal extends Component {
  state = {
    selectedTime: this.props.currentTime,
    textFieldValue: null
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Name für den Wecker: ", this.state.textFieldValue);
    this.props.changeAlarmName(this.props.alarm.id, this.state.textFieldValue);
    this.props.closeModal();
  };

  handleInputChange = e => {
    this.setState({ textFieldValue: e.target.value });
  };

  render() {
    const {
      currentTime,
      isOpen,
      closeModal,
      selectedSubMenu2,
      snoozeTime
    } = this.props;
    const { selectedTime } = this.state;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStylesModal}
        contentLabel="Settings Modal">
        <form onSubmit={this.handleSubmit} className="modal-content">
          <div className="modal-head-content">
            {(() => {
              switch (selectedSubMenu2) {
                case "Zeit":
                  return (
                    <Fragment>
                      <h4>Weckzeit einstellen</h4>
                      <p>{`${currentTime} Uhr`}</p>
                    </Fragment>
                  );
                case "Schlummern":
                  return (
                    <Fragment>
                      <h4>Schlummerdauer einstellen</h4>
                      <p>{`${snoozeTime}m`}</p>
                    </Fragment>
                  );
                case "Name":
                  return (
                    <Fragment>
                      <label>Name</label>
                      <input type="text" onChange={this.handleInputChange} />
                    </Fragment>
                  );
                default:
                  return null;
              }
            })()}
          </div>
          {(selectedSubMenu2 === "Zeit" ||
            selectedSubMenu2 === "Schlummern") && (
            <div className="selection-wheel-container">
              <img alt="wheel-input" src={SelectWheel} />
            </div>
          )}
          <button
            value={this.state.textFieldValue}
            className="save-button"
            type="submit">
            Speichern
          </button>
        </form>
      </Modal>
    );
  }
}
