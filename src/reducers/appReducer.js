const initialState = {
  alarms: {
    byId: {
      universitaet0: {
        id: "universitaet0",
        isOn: true,
        name: "Universität",
        time: "08:15",
        days: [false, false, true, true, false, false, false],
        scene: "Ocean Breeze",
        snoozeTime: "07:00"
      },
      universitaet1: {
        id: "universitaet1",
        isOn: true,
        name: "Universität",
        time: "09:45",
        days: [true, false, false, false, true, false, false],
        scene: "Calm Start",
        snoozeTime: "09:00"
      },
      arbeit0: {
        id: "arbeit0",
        isOn: true,
        name: "Arbeit",
        time: "06:30",
        days: [false, true, false, false, false, false, false],
        scene: "Energy Boost",
        snoozeTime: "05:30"
      },
      ferien0: {
        id: "ferien0",
        isOn: false,
        name: "Ferien",
        time: "10:00",
        days: [true, true, true, true, true, true, true],
        scene: "Calm Start",
        snoozeTime: "10:00"
      },
      traning0: {
        id: "traning0",
        isOn: false,
        name: "Traning",
        time: "18:00",
        days: [true, true, true, true, true, false, false],
        scene: "Energy Boost",
        snoozeTime: "02:00"
      }
    },
    allIds: ["universitaet0", "universitaet1", "arbeit0", "ferien0", "traning0"]
  }
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_ALARM": {
      const newState = Object.assign({}, state);
      const currentIsOn = newState.alarms.byId[action.id].isOn;
      newState.alarms.byId[action.id].isOn = !currentIsOn;
      return newState;
    }
    case "TOGGLE_DAY": {
      const newState = Object.assign({}, state);
      const currentDays = state.alarms.byId[action.id].days;
      currentDays[action.index] = !currentDays[action.index];
      newState.alarms.byId[action.id].days = currentDays;
      return newState;
    }
    case "CHANGE_ALARM_NAME":
      const newState = Object.assign({}, state);
      newState.alarms.byId[action.id].name = action.name;
      return newState;
    default:
      return state;
  }
};

export default appReducer;

export const selectAllAlarms = state =>
  state.alarms.allIds.map(id => state.alarms.byId[id]);
export const selectAlarmById = (state, id) => state.alarms.byId[id];
