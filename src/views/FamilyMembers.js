import React, { Component } from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { selectAllPersons } from "../reducers/appReducer";

class FamilyMembers extends Component {
  render() {
    const { persons } = this.props;
    return (
      <div className="family-members-container">
        {/* Fake, not filtered by time, uses always the first */}
        {persons.map(person => (
          <Card name={person.name} nextAlarm={person.alarms[0]} />
        ))}
      </div>
    );
  }
}

FamilyMembers = connect(state => ({ persons: selectAllPersons(state) }))(
  FamilyMembers
);
export default FamilyMembers;
