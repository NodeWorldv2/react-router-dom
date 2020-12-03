import React, { Component } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2'

class chartPie extends Component {
    constructor(props){
        super(props)
        this.state = {
            labels: ['software eng', 'cloud eng','devops eng'],
            datasets:[{
                data:[2000, 4000, 2800],
                backgroundColor:['red','green','lightblue']
            }]
        }
    }
    render() {
        return (
            <div>
                <h1>Front End React Chat library </h1>
                <div className="rowr">
                    <div className="col-md-4rr">
                        <Pie
                            data = {{
                                labels:this.state.labels,
                                datasets:this.state.datasets
                            }}
                            height="50%"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default chartPie;