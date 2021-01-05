const loadReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ESTATES":
      return action.payload;
    default:
      return state;
  }
};

export default loadReducer;
