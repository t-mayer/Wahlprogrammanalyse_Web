import { Legend } from "chart.js";
import React, { Component } from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
 
import { faBold } from "@fortawesome/free-solid-svg-icons";
Chart.register(ChartDataLabels);

class BarChart extends Component {
  // Use constructor function to be run when component is initialized.
  constructor(props) {
    // Pass properties to component.
    super(props);
    this.state = { chartData: props.chartData };
  }

  // Set default values.
  static defaultProps = {
    displayLegend: true,
    width: 700,
    height: 300,
    showXAxisLabel: false,
    displayDataLabels: true,
  };

  render() {
    return (
      <div className="Barchart">
        <Bar
          data={this.props.chartData}
          width={this.props.width}
          height={this.props.height}
          options={{
            animation: {
              duration: 5000,
              easing: "easeInCubic"
          },
            plugins: {
              legend: {
                display: this.props.displayLegend,
              },
        
      
              datalabels: {
                display: this.props.displayDataLabels,
                color: "black",
                anchor: "end",
                align: "end",
                formatter: function (value, context) {
                  return context.dataset.labels[context.dataIndex];
                },
              },
            },
            maintainAspectRatio: false,
            responsive: true,
            layout: {
              padding: 10,
            },
            scales: {
              x: {
                display: this.props.showXAxisLabel,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default BarChart;
