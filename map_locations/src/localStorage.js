const loadState = (state, stateName) => {
  try {
    const serializedState = localStorage.getItem(stateName)
    if (serializedState === null) {
      return state
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return state
  }
}

const saveState = (state, stateName) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateName, serializedState)
  } catch (err) {}
}

export {loadState saveState}