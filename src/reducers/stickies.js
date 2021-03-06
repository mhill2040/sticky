const stickies = ( state = [], action ) => {
  switch(action.type) {
    case 'STICKIES':
      return action.stickies
    case 'ADD_STICKY':
      return [action.sticky, ...state];
    default:
      return state
  }
}

export default stickies;
