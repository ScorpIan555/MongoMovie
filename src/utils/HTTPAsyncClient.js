import superagent from 'superagent'
import constants from '../constants'


const getRequest = (endpoint, params, actionType) => {
  return dispatch => superagent
                          .get(endpoint)
                          .query(params)
                          .set('Accept', 'application/json')
                          .then(data => {
                            if(actionType != null) {
                              dispatch({
                                type: actionType,
                                params: params,
                                data: data
                              })
                            }
                          })
                          .catch(err => {
                            console.log('ERR: ', err)
                            return
                          })
}


const postRequest = (endpoint, body, actionType) => {
  return dispatch => superagent
                      .post(endpoint)
                      .send(body)
                      .set('Accept', 'application/json')
                      .then(data => {
                        console.log('Async Post:', data)
                        if(actionType != null) {
                          dispatch({
                            type: actionType,
                            data: data.body
                          })
                        }
                      })
                      .catch(err => {
                        console.log('ERR: ', err)
                        return err
                      })
}


export default {
  getRequest: getRequest,
  postRequest: postRequest
}
