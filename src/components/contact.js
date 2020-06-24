import React, { Component } from 'react';
import Axios from 'axios'

class contact extends Component {

    state = {
        mydata:[],
        mydtats:false
    }
    
    getHandler=(e)=>
    {
        let actionurl = "http://127.0.0.1:8000/app/api/complextable/3/"
        const config = {
            headers: { Authorization: "Token "+localStorage.getItem('mapp_login_token')}
        };
        Axios.get(actionurl,config)
        .then(resp=>{
            console.log(resp.data)
            let myObject = JSON.parse(resp.data['jsondata']);
            console.log(myObject)
            this.setState({
                mydata:myObject,
                mydtats:true
            })
        })
        .then(error=>{
            console.log(error)
        })
    }

    render() {
        let {mydata, mydtats}=this.state
        return (
            <div className="container" style={{background:'gray', height:'400px'}}>
                <h1 style={{color:'black'}}>this is contact page</h1>
                <button onClick={this.getHandler}>GetData</button>
                {mydtats&&
                    
                    mydata.map(item=>
                        <p key={item.key}>{item.adil}, {item.adil2}</p>
                    )
                }
            </div>
        );
    }
}

export default contact;