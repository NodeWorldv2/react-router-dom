import React, { Component } from 'react';
import {connect} from 'react-redux'


class about extends Component {
    render() {
        return (
            <div className="container">
                <hr></hr>
                    {this.props.auth_rr_props.isAuthenticated? 
                    (<button className="btn btn-primary">yooooo in</button>):(<button className="btn btn-danger">sorry deleted</button>)}
                <hr></hr>
                <h1 style={{color:'black', height:'400px', background:"blue"}}>this is about page</h1>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    auth_rr_props: state.auth_rr
})

export default connect(mapStateToProps)(about);