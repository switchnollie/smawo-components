const initialState = {
  alarms: {
    byId: {
      universitaet0: {
        id: "universitaet0",
        isOn: true,
        name: "Universität",
        time: "08:15",
        days: [false, false, true, true, false, false, false]
      },
      universitaet1: {
        id: "universitaet1",
        isOn: true,
        name: "Universität",
        time: "09:45",
        days: [true, false, false, false, true, false, false]
      },
      arbeit0: {
        id: "arbeit0",
        isOn: true,
        name: "Arbeit",
        time: "06:30",
        days: [false, true, false, false, false, false, false]
      },
      ferien0: {
        id: "ferien0",
        isOn: true,
        name: "Ferien",
        time: "10:00",
        days: [true, true, true, true, true, true, true]
      }
    },
    allIds: ["universitaet0", "universitaet1", "arbeit0", "ferien0"]
  }
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "FOO":
    default:
      return state;
  }
};

export default appReducer;

export const selectAllAlarms = state =>
  state.alarms.allIds.map(id => state.alarms.byId[id]);
export const selectAlarmById = (state, id) => state.alarms.byId[id];
