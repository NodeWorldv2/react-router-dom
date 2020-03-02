import React, { Component } from "react"
import { connect } from 'react-redux'
import {register} from '../store/actions/authActions'

class Register extends Component{

    state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
        error :{},
     
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(JSON.stringify(nextProps.auth_rr.error)!==JSON.stringify(prevState.error)){
            return {
                error: nextProps.auth_rr.error
            }

        }

        return null;
    }

    

    changeHandler = event => {
        //console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault()
        let { username, email, password1, password2} = this.state
        this.props.register({username, email,password1, password2})
    }

    render(){
        let { email, username,password1, password2, error} = this.state
        //console.log(this.props)
        return(
            <div className="container">
                <div className="col-md-3">
                    <h1>Register </h1>
      
                    <form method="post" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="username">username</label>
                                <input name="username" type="text" 
                                     className={
                                        error.username ? "form-control is-invalid" : "form-control"
                                      }
                                    id="username"
                                    value = {username}
                                    onChange = {this.changeHandler}
                                    />
                                {error.username && (
                                    <div className="invalid-feedback">{error.username}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input name="email" type="email"
                                    className={
                                        error.email ? "form-control is-invalid" : "form-control"
                                      }
                                    id="email"
                                    value = {email}
                                    onChange = {this.changeHandler}
                                    />
                                 {error.email && (
                                    <div className="invalid-feedback">{error.email}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password1">password1</label>
                                <input name="password1" type="password" 
                                    className={
                                        error.password1 ? "form-control is-invalid" : "form-control"
                                      }
                                    id="password1"
                                    value = {password1}
                                    onChange = {this.changeHandler}
                                 />

                                 {error.password1 && (
                                    <div className="invalid-feedback">{error.password1}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password2">Password2</label>
                                <input name="password2" type="password" 
                                   className={
                                    error.password2 ? "form-control is-invalid" : "form-control"
                                  }
                                    id="password"
                                    value = {password2}
                                    onChange = {this.changeHandler}
                                    />
                                {error.password2 && (
                                    <div className="invalid-feedback">{error.password2}</div>
                                )}
                            </div>

                            {error.non_field_errors? error.non_field_errors: ""}
                          
                            <button type="submit" className="btn btn-primary">Register Now</button>
                    </form>
                    <hr>
                    </hr>
                    <br></br>
                </div>
            </div>
        )
    }
}

//map state props, here state is from store that is driven to this register
//as a props

const mapStateToProps = state =>({
    auth_rr: state.auth_rr
})

export default connect(mapStateToProps, {register})(Register)