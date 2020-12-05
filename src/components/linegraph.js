import React from 'react';

import {Line} from 'react-chartjs-2';

const checkinsData={
    labels:['4 P.M','5 P.M','6 P.M','7 P.M','8 P.M','9 P.M','10 P.M','11 P.M','12 A.M','1 A.M','2 A.M','3 A.M','4 A.M'],
    datasets:[
        {
        label:"Day",
        backgroundColor:"green",
        borderColor:'red',
        borderWidth:2,
        lineTension:0.1,
        fill:false,
        data:[4,5,11,7,8,9,10,11,12,1,2,3,4]

        }
    ]
}

class CheckinGraph extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            key: Date.now()
        }
        this.setDayData=this.setDayData.bind(this);
        this.setWeekData=this.setWeekData.bind(this);
        this.setMonthData=this.setMonthData.bind(this);
    }

    setDayData=function() {
        checkinsData.datasets.backgroundColor="blue";
        checkinsData.labels=['4 P.M','5 P.M','6 P.M','7 P.M','8 P.M','9 P.M','10 P.M','11 P.M','12 A.M','1 A.M','2 A.M','3 A.M','4 A.M'];
        checkinsData.datasets[0].data=[4,5,3,7,8,9,10,11,12,1,2,3,4];

        this.setState({ key: Date.now() });

    }
    setWeekData=function()
    {
        checkinsData.datasets.backgroundColor="green";
        checkinsData.labels=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        checkinsData.datasets[0].data=[40,50,16,18,80,29,10];

        this.setState({ key: Date.now() });
    }
    setMonthData=function()
    {
        checkinsData.datasets.backgroundColor="purple";
        checkinsData.labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        checkinsData.datasets[0].data=[100,120,200,256,560,178,280,190,370,100,300,200];

        this.setState({ key: Date.now() });
    }

    render()
    {
        return(
            <div className="col-md-12  default-shadow bg-white pd-30-0 border-radius-10 align-center">
                <ul className="list list-inline graph-label-list">
                    <li className="list-inline-item btn btn-primary" onClick={this.setDayData}>
                        Day
                    </li>
                    <li className="list-inline-item btn btn-primary " onClick={this.setWeekData}>
                        Week
                    </li>
                    <li className="list-inline-item btn btn-primary" onClick={this.setMonthData}>
                        Month
                    </li>

                </ul>

                <div className="row">
                    <div className="col-md-4">

                        <Line
                            redraw
                                data={checkinsData}
                                options={
                                    {
                                        title:{
                                            display:true
                                        },
                                        legend:{
                                            display:true
                                        }

                                    }
                                }
                        />

                    </div>
                </div>

                   
            </div>

        )
    }
}

export default CheckinGraph;