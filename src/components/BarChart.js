import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



class BarChart extends Component {

    // Use constructor function to be run when component is initialized. 
    constructor(props){

        // Pass properties to component.
        super(props);
        this.state = {chartData:props.chartData}}


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        width: 600,
        height: 400
    }

    render(){
        return(
            <div className="chart">
                <Bar
                data={this.state.chartData}
                options={
                    {responsive: true},
                {maintainAspectRatio: false},
                {width: this.props.width},
                {height: this.props.height},
                    { title: {
                    display: this.props.displayTitle,
                    text:'Dataset yeah'}},
                {legend: {
                    display: this.props.displayLegend,
                    position: this.props.legendPosition}}
                }
                />              
            </div>
        )

    }

}

export default BarChart;