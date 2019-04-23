import axios from 'axios'
export const READ_EVENTS = 'READ_EVENT'
export const READ_EVENTS = 'CREATE_EVENT'

const ROOT_URL = 'http://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch =>{
  const response = await axios.get('{ROOT_URL}/events${QUERYSTRING}')
  dispatch({type: READ_EVENTS, response})
}

export const postEvents = values => async dispatch =>{
  const response = await axios.get('{ROOT_URL}/events${QUERYSTRING}', values)
  dispatch({type: CREATE_EVENT, response})
}
