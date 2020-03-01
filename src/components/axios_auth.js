import React, { Component } from 'react';
import axios from 'axios'

class axios_auth extends Component {

    state = {
        posts: [],
        data_from_local: [],
        should_show: false
    }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(resp=>{
    //             this.setState({
    //                 posts: resp.data
    //             })
    //         })
    //         .catch(error =>{console.log(error)})
    // }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/restapi/apiinfo/')
            .then(resp=>{
                this.setState({
                    data_from_local: resp.data
                })
            })
            .catch(error =>{console.log(error)})
    }



    local_data_fetcher=()=>{
      
        this.setState({
            should_show: true
        })
        
    }


    render() {
        let { posts,should_show, data_from_local }= this.state
        return (
            <div>
                <h6>This is axios test</h6>
                <button onClick={this.local_data_fetcher} className="btn btn-sm btn-primary">Fetch from local </button>
                <hr></hr>
                {/* here will be all axios request */}
                
                {/* { should_show && posts.map(single_post=> <li> {single_post.title} </li> )}  */}
                { should_show && data_from_local.map((single_post,it)=> <li key={it} > {single_post.data1} </li> )} 



            </div>
        );
    }
}

export default axios_auth;