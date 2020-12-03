import React, { Component } from 'react';
import {Doughnut, Bar} from 'react-chartjs-2'

class chart extends Component {
    state={
        Data: {
            labels: ["Production"],
            datasets:[
               {
                  label:["Test for data"],
                  data: [33],
                  backgroundColor:[
                   'rgba(255,105,145,1)',
                ]
               },
               {
                label:["Test for data2"],
                data: [66],
                backgroundColor:[
                 'rgba(25,15,145,1)',
              ]
             },
             {
                label:["Test for data3"],
                data: [44],
                backgroundColor:[
                 'rgba(55,65,15,1)',
              ]
             }
            ]
         }
    }
    render() {
        return (
            <div>
                <h1>Hello I am from the front end chart library </h1>
                <div className="row">
                    <div className="col-md-4">
                        <Bar
                            data={this.state.Data}
                            width={50}
                            height={30}
                            options={{ maintainAspectRatio: true }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default chart;