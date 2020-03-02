import React, { Component } from "react"

class Login extends Component{

    state = {
        username: '',
        password: '',
        error :{},
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
                          
                            <button type="submit" className="btn btn-primary">=login Now</button>
                    </form>
                    <hr>
                    </hr>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Login