import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENTS = 'DELETE_EVENTS'

const ROOT_URL = 'http://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch =>{
  const response = await axios.get('{ROOT_URL}/events/${QUERYSTRING}')
  dispatch({type: READ_EVENTS, response})
}

export const postEvents = values => async dispatch =>{
  const response = await axios.get('{ROOT_URL}/events/${QUERYSTRING}', values)
  dispatch({type: CREATE_EVENT, response})
}

export const putEvents = values => async dispatch =>{
  const response = await axios.put('{ROOT_URL}/events/${values.id}${QUERYSTRING}', values)
  dispatch({type: UPDATE_EVENT, response})
}

export const get Events = id => async dispatch =>{
  const response = await axios.get('{ROOT_URL}/events/${id}${QUERYSTRING}')
  dispatch({type: READ_EVENT, response})
}

export const deleteEvents = id => async dispatch =>{
  const response = await axios.delete('{ROOT_URL}/events/${id}${QUERYSTRING}')
  dispatch({type: DELETE_EVENT, id})
}
