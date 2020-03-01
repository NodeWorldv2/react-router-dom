import React, { Component } from 'react';

import axios from 'axios'

class localstorage extends Component {
    state = {
        username:"testuser",
        password:"testuser043@"
    }

    componentDidMount(){
        axios.post("http://127.0.0.1:8000/api/rest-auth/login/", 
        {username:this.state.username,password: this.state.password})
        .then(resp=>{
            console.log(resp.data)
            localStorage.setItem('my_adil_token', resp.data.key);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    




    render() {
        return (
            <div>
                <h6>localstorage</h6>
                <hr></hr>
                
            </div>
        );
    }
}

export default localstorage;