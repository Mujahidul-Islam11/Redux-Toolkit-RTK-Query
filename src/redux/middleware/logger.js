const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("prev " , currentState);
  next(action);
  console.log(action);
  const nextState = store.getState();
  console.log("next " , nextState);
};

export default logger;
