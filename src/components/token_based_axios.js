import React, { Component } from 'react';
import axios from 'axios'

class token_based_axios extends Component {
    state = {
        my_data: [],
        token:"4c46147317d86c32f3154c0f9fd3dae5d7a126d4"
    }

    componentDidMount(){
        const config = {
            headers: { Authorization: `Token ${this.state.token}`}
        };
        axios.get("http://127.0.0.1:8000/restapi/adil/test/?format=json", config)
            .then(response=>{
                this.setState({
                    my_data: response.data
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        let {my_data} = this.state
        return (
            <div>
                <h6>token based axios</h6>
                <hr></hr>

                    {my_data.map((single_data,it)=><li key={it}>{single_data.name}</li>)}

            </div>
        );
    }
}

export default token_based_axios;