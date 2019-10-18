export const EXAMPLE_ERROR = 'EXAMPLE_ERROR'
export const EXAMPLE_START = 'EXAMPLE_START'
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS'

export const exampleError = () => {
  return {
    type: EXAMPLE_ERROR,
    payload: {}
  }
}

export const exampleStart = () => {
  return {
    type: EXAMPLE_START,
    payload: {}
  }
}

export const exampleSucces = data => {
  return {
    type: EXAMPLE_SUCCESS,
    payload: data
  }
}

export const example = data => dispatch => {
  return new Promise((resolve, reject) => {
    try {
      dispatch(exampleStart())
      dispatch(exampleSucces(data))
      resolve()
    } catch (error) {
      dispatch(exampleError())
      reject()
    }
  })
}
