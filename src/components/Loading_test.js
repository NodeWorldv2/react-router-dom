import React, { Component } from 'react';

class Loading_test extends Component {
    
    state = {
        loading: false,
        showmsg: false
    }

    fetchData  = () =>
    {
        console.log("Hello click")
        this.setState({
            loading:true
        })

        setTimeout(()=>{
            this.setState({
                loading: false,
                showmsg:true
            })
        }, 3000)

        setTimeout(()=>{
            this.setState({
                showmsg:false
            })
        }, 6000)
    }


    render() {

        const {loading} = this.state
        return (
            <div>
                <button onClick={this.fetchData} className="btn btn-danger" disabled={loading}>
                    { loading && <i className="fa fa-refresh fa-spin"></i> }
                    { loading && <span>I am Submitting </span>}
                    { !loading && <span>submit Now </span> }
                </button>
                
                { this.state.showmsg &&<span>Submitted Successfully</span>}
            </div>
        );
    }
}

export default Loading_test;