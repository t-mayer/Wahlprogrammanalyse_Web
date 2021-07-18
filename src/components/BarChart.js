import { Legend } from 'chart.js';
import React, { Component } from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);



class BarChart extends Component {


    // Use constructor function to be run when component is initialized. 
    constructor(props){

        // Pass properties to component.
        super(props);
        this.state = {chartData:props.chartData}}

        

    // Set default values.
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        width: 700,
        height: 300,
        showXAxisLabel: false,
        displayDataLabels: true,
        textTitle: 'Länge des Wahlprogramms in Wörtern'

    }


    // Define function to hide labels onclick.
    hideLegend = (e, legendItem, legend) => {

        // Define variables for the index and the legend.
        let index = legendItem.datasetIndex;
        let ci = legend.chart;

        // Define variable fpr hidden dataset.
        let alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;
        
        // Iterate through each dataset.
        ci.data.datasets.forEach(function(e, datasetIndex) {

            // Looks for the dataset that matches the current index and returns that metadata.
            let meta = ci.getDatasetMeta(datasetIndex);
            
            // Check if clicked index equals dataset index.
            if (datasetIndex !== index) {
                console.log('datasetindex', datasetIndex);
                console.log('index', index);
        
                // If it was not clicked, check if the index is already hidden.
              if (!alreadyHidden) {
                
                // If it is not hidden, set to not null.
                meta.hidden = meta.hidden === null ? !meta.hidden : null;
            
                // If hidden, set to true.
              } else if (meta.hidden === null) {
                meta.hidden = true;
              }
              // If it was clicked, then do not hide.
            } else if (datasetIndex === index) {
              meta.hidden = null;
            }
          });
        
          ci.update();
    };




    render() {

        return(
            <div className="Barchart">
                <Bar
                data={this.props.chartData}
                width={this.props.width}
                height={this.props.height}
                options={{
                    plugins: {
                        legend: {
                            display: this.props.displayLegend,
                            onClick: this.hideLegend
                        },
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.textTitle,
                            fontsize: 30
                        },
                        datalabels: {
                            display: this.props.displayDataLabels,
                            color: 'black',
                            anchor: 'end',
                            align: 'end',
                            formatter: function(value, context) {
                                return context.dataset.labels[context.dataIndex]; 
                              }
                         }
                    },
                    maintainAspectRatio: true,
                    responsive: true,
                    layout: {
                        padding: 50
                    },
                    scales: {
                        x: {
                            display: this.props.showXAxisLabel
                        }
                    },
                }}
                />
            </div>
        )

    }

}

export default BarChart;