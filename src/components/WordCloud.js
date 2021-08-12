import { Chart } from "react-chartjs-2";
import React, { Component } from "react";
import { WordCloudChart } from 'chartjs-chart-wordcloud';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';

Chart.register(WordCloudController, WordElement);



class WordCloud extends Component {
    
    // Use constructor function to be run when component is initialized.
    constructor(props) {

      // Pass properties to component.
      super(props);
      this.state = { chartData: props.chartData };
    }
  
    // Set default values.
    static defaultProps = {
      displayTitle: true,
      width: 700,
      height: 300,
      textTitle: "Länge des Wahlprogramms in Wörtern",
    };
  
    render() {
      return (
        <div className="WordCloud">
          <WordCloudChart
            data={this.props.chartData}
          
          />
        </div>
      );
    }
  }
  
  export default WordCloud;
  