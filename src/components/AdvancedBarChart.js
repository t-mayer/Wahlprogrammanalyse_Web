import { Legend } from "chart.js";
import React, { Component } from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

class AdvancedBarChart extends Component {

  // Use constructor function to be run when component is initialized.
  constructor(props) {

    // Pass properties to component.
    super(props);
    this.state = { chartData: props.chartData };
    this.previousValue = [];
    this.collectPrevious = this.collectPrevious.bind(this);
  }

  // Set default values.
  static defaultProps = {
    displayLegend: true,
    width: 700,
    height: 400,
    showXAxisLabel: false,
    displayDataLabels: true,
  };

  // Function to collect previous values in an array.
  collectPrevious = (num) => {
    this.previousValue.push(num);
    return this.previousValue;
  };

  // Define function to hide labels onclick.
  hideLegend = (e, legendItem, legend) => {

    // Define variables for the index and the legend.
    let index = legendItem.datasetIndex;
    let ci = legend.chart;
    let clickArray = this.collectPrevious(index);
    let last = clickArray[clickArray.length - 2];

    // Define variable for hidden dataset.
    let alreadyHidden =
      ci.getDatasetMeta(index).hidden === null
        ? false
        : ci.getDatasetMeta(index).hidden;

    // Iterate through each dataset.
    ci.data.datasets.forEach(function (e, datasetIndex) {

      // Looks for the dataset that matches the current index and returns that metadata.
      let meta = ci.getDatasetMeta(datasetIndex);

      // Check if clicked index equals dataset index.
      if (datasetIndex !== index) {

        // If it was not clicked, check if dataset visible.
        if (!alreadyHidden) {

          // If it is not hidden, unhide.
          meta.hidden = meta.hidden === null ? !meta.hidden : null;

          // If dataset not hidden, set to true.
        } else if (meta.hidden === null) {
          meta.hidden = true;
        }
        // If it was clicked, then do not hide.
      } else if (datasetIndex === index) {
        if (last === index) {
          ci.data.datasets[1].hidden = true;
          ci.data.datasets[2].hidden = true;
          ci.data.datasets[3].hidden = true;
          ci.data.datasets[4].hidden = true;
          ci.data.datasets[5].hidden = true;
          ci.data.datasets[0].hidden = true;
          ci.data.datasets[6].hidden = true;
          
        } else {
          meta.hidden = null;

          // Initial update of the hidden values from the beginning.
          ci.data.datasets[1].hidden = null;
          ci.data.datasets[2].hidden = null;
          ci.data.datasets[3].hidden = null;
          ci.data.datasets[4].hidden = null;
          ci.data.datasets[5].hidden = null;
          ci.data.datasets[6].hidden = null;
          ci.data.datasets[0].hidden = null;
        }
      }
    });

    ci.update();
  };

  render() {
    return (
      <div className="AdvancedBarChart">
        <Bar
          data={this.props.chartData}
          width={this.props.width}
          height={this.props.height}
          options={{
            animation: {
              duration: 5000,
              easing: "easeInOutCubic"
          },
            plugins: {
              legend: {
                display: this.props.displayLegend,
                onClick: this.hideLegend,
              },
        
              datalabels: {
                display: this.props.displayDataLabels,
                color: "black",
                anchor: "end",
                align: "end",
                clamp: true,
                formatter: function (value, context) {
                  return context.dataset.labels[context.dataIndex];
                },
              },
            },
            maintainAspectRatio: false,
            responsive: true,
            layout: {
              padding: 30,
 
            },
            scales: {
              x: {
                display: this.props.showXAxisLabel,
              },
              y:  {
                  max: 15000
              }
            },
          }}
        />
      </div>
    );
  }
}

export default AdvancedBarChart;
