import Axios from 'axios'
import * as Types from './types'

export const register = user_info => dispatch =>{
    Axios.post('http://127.0.0.1:8000/api/rest-auth/registration', user_info)
    .then(resp=>{
        console.log(resp.data)
    })
    .catch(error=>{
        console.log(error.response.data)
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
        //console.log(error)
    })
}