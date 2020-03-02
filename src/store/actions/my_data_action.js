import Axios from 'axios'
import * as Types from './types'

export const register2 = user_info => dispactch =>{
    Axios.post('', user_info)
    .then(resp=>{
        console.log(resp.data)
    })
    .catch(error=>{
        console.log(error)
    })
}