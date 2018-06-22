import React, { Component } from "react";
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
    selectedTime: this.props.currentTime
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
        <div className="modal-content">
          <div className="modal-head-content">
            {(() => {
              switch (selectedSubMenu2) {
                case "Zeit":
                  return <h4>Weckzeit einstellen</h4>;
                case "Schlummern":
                  return <h4>Schlummerdauer einstellen</h4>;
                default:
                  return null;
              }
            })()}
            <p>
              {selectedSubMenu2 === "Zeit"
                ? `${currentTime} Uhr`
                : `${snoozeTime}m`}
            </p>
          </div>
          {selectedSubMenu2 === "Name" && (
            <input type="text" placeholder="Name" />
          )}
          {(selectedSubMenu2 === "Zeit" ||
            selectedSubMenu2 === "Schlummern") && (
            <div className="selection-wheel-container">
              <img alt="wheel-input" src={SelectWheel} />
            </div>
          )}
          <button className="save-button" type="button" onClick={closeModal}>
            Speichern
          </button>
        </div>
      </Modal>
    );
  }
}
