export const toggleAlarm = id => ({
  type: "TOGGLE_ALARM",
  id
});

export const toggleDay = (id, index) => ({
  type: "TOGGLE_DAY",
  id,
  index
});
