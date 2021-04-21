const { useState, useEffect } = require("react");

const MyUseState = (key, initialState) => {
  const [state, SetState] = useState(() => {
    const StoragedValue = localStorage.getItem(key);

    if (StoragedValue) {
      return JSON.parse(StoragedValue);
    } else {
      return initialState;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, SetState];
};

export default MyUseState;
