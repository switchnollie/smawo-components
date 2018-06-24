import React, { Component } from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { selectAllPersons } from "../reducers/appReducer";
import AlarmsEditor from "./AlarmsEditor";

class FamilyMembers extends Component {
  state = {
    inOverview: true,
    selectedSubMenu2: null
  };

  changeToPerson = name => {
    this.props.changeSelectedPerson(name);
    this.setState({ inOverview: false });
  };

  render() {
    const { inOverview } = this.state;
    const {
      persons,
      selectedPerson,
      selectedSubMenu2,
      selectedAlarm
    } = this.props;

    const selectedPersonObj = persons.find(
      person => person.name === selectedPerson
    );
    const alarms = selectedPersonObj && selectedPersonObj.alarms;

    return inOverview ? (
      <div className="family-members-container">
        {/* Fake, not filtered by time, uses always the first */}
        {persons.map(person => (
          <Card
            key={person.id}
            name={person.name}
            nextAlarm={person.alarms[0]}
            onClick={() => this.changeToPerson(person.name)}
          />
        ))}
      </div>
    ) : (
      <AlarmsEditor
        alarms={alarms}
        selectedAlarm={selectedAlarm}
        toggleAlarm={this.props.toggleAlarm}
        toggleDay={this.props.toggleDay}
        onAlarmListItemClick={this.props.onAlarmListItemClick}
        selectedSubMenu2={selectedSubMenu2}
        onSubMenu2Click={this.props.onSubMenu2Click}
      />
    );
  }
}

FamilyMembers = connect(state => ({ persons: selectAllPersons(state) }))(
  FamilyMembers
);
export default FamilyMembers;
