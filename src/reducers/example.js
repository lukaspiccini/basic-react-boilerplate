import { EXAMPLE_ERROR, EXAMPLE_START, EXAMPLE_SUCCESS } from '../actions/example'

const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ERROR:
    case EXAMPLE_START:
    case EXAMPLE_SUCCESS:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
