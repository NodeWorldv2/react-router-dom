import React, { Component } from "react"
import {login} from '../store/actions/authActions'
import {connect} from 'react-redux'

class Login extends Component{

    state = {
        username:'',
        password:'',
        user :{}
    }

    

    changeHandler = event => {
        //console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault();
        let {username, password} = this.state
        this.props.login({username, password},this.props.history)
       
    }

    render(){
        let { username, password} = this.state
        return(
            <div className="container">
                <div className="col-md-3">
                    <h1>Login  </h1>
                    <form onSubmit={this.submitHandler}>
                        
                            <div className="form-group">
                                <label htmlFor="username">user name</label>
                                <input name="username" type="text" 
                                    className="form-control-xs" 
                                    id="username"
                                    value = {username}
                                    onChange = {this.changeHandler}
                                 />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" 
                                    className="form-control-xs" 
                                    id="password"
                                    value = {password}
                                    onChange = {this.changeHandler}
                                    />
                            </div>
                          
                            <button type="submit" className="btn btn-primary">login Now</button>
                    </form>
                    <hr>
                    </hr>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default connect(null,{login})(Login)