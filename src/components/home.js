import React, { Component } from 'react';

class home extends Component {
    render(props) {
        return (
            <div>
                <p>This is home from home and data is <h1>{this.props.name}</h1></p>
            </div>
        );
    }
}

export default home;