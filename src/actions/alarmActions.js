export const toggleAlarm = id => ({
  type: "TOGGLE_ALARM",
  id
});

export const toggleDay = (id, index) => ({
  type: "TOGGLE_DAY",
  id,
  index
});

export const changeAlarmName = (id, name) => ({
  type: "CHANGE_ALARM_NAME",
  id,
  name
});
