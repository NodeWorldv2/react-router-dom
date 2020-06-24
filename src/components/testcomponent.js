import React, {Component} from 'react'
import Axios from 'axios'

class testcomponent extends Component{


    submitHandeler=(event)=>{
        let data1 = "adil"
        let data2 = "adil2 style"
        Axios.post('http://127.0.0.1:8000/api/getallproduction_data/1', {"buyer":data1, "style":data2})
        .then(resp=>{
            console.log(resp)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    render(){
        return(
            <div>
                <p>This is from test Component</p>

                <button onClick = {this.submitHandeler}>click post</button>

                <hr/>
            </div>
        ) 
    }
}

export default testcomponent