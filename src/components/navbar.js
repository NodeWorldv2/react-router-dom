import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="#">Router Dom</a>
                        </div>
                        <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/profile'>profile</Link></li>
                        <li><Link to='/localstorage'>localstorage</Link></li>
                        <li><Link to='/token_based_axios'>token_based_axios</Link></li>
                        <li><Link to='/axios_auth'>axios_auth</Link></li>
                        
                        </ul>
                    </div>
                </nav>
              
            </div>
        );
    }
}

export default navbar;