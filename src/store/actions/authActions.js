import Axios from 'axios'
import * as Types from './types'

export const register = (user_info, history) => dispatch =>{
    Axios.post('http://52.221.186.244/api/rest-auth/registration', user_info)
    .then(resp=>{
       
        console.log(resp)
        history.push('/login')
    })
    .catch(error=>{
        //console.log(error.response.data)
        
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
        //console.log(error)
    })
}

export const login = (userinfo, history)=>dispatch =>{
    Axios.post('http://52.221.186.244/api/rest-auth/login/', userinfo)
    .then(resp=>{
       
        let token = resp.data.key;
        //console.log(token)
        localStorage.setItem('dyanamci_token', token)

        console.log("adil:"+resp.data)
        console.log("adil.........")
        dispatch({
            type: Types.SET_USER,
            payload:{
                user: resp.data
            }

        })
        history.push("/about")
    })
    .catch(error=>{
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })

}
