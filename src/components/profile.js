import React, { Component } from 'react';


class profile extends Component {

    

    constructor(props){
        super(props);
        
        this.state = {
            my_token: "d",
            sataic_data: "this is the static data"
        }



        let data_token = localStorage.getItem('my_adil_token');
        console.log(data_token)
        this.setState({
            my_token: data_token
        })

        
    

    }
    
    componentDidMount(){
        let data_token = localStorage.getItem('my_adil_token');
        console.log(data_token)
        this.setState({
            my_token: data_token
        })

    }
    
    render() {
        return (
            <div className="container">
                <h1>hello</h1>
                <h3>{this.state.my_token}</h3>
                <h3>{this.state.sataic_data}</h3>
                <h1 style={{color:'red', background:'gray', height:'400px'}}>this is profile page</h1>
            </div>
        );
    }
}

export default profile;