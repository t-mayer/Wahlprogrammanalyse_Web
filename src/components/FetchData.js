import React, { Component } from "react";
import Papa from 'papaparse';

class FetchData extends Component {
  // Set states for variables.
  state = {
    loading: true,
    wahlData: [],
  };

  /* Lifecycle method is executed after the first render only on the client side.
    Async promise-based method to wait for data.
    */
  async componentDidMount() {

    // Fetch data: make http request with fetch.
    const url = "https://gist.githubusercontent.com/t-mayer/ed2b07f114430e9abe1e46d38b2a2d8c/raw/Wahlprogramme.csv";
    const response = await fetch(url);

    // Get text data and parse.
    const data = await response.text();
    const parsedData = Papa.parse(data,
        { header: true , delimiter:"/"});
    //console.log(parsedData.data);

    // Set state depending on data.
    this.setState({ wahlData: parsedData.data , loading: false });
  }

  render() {

    // To get all data, move into map:
    // <div>{Object.entries(dataPoint).join('//')}</div>

    // Iterarte over data to get all arrays.
    const mappedData = this.state.wahlData.map(dataPoint => (
      <div key={Object.keys(dataPoint)[0]}>
        <div className='party'>{Object.values(dataPoint)[0]}</div>
        <div className='word-count'>{Object.values(dataPoint)[1]}</div>
        <div className='common-words'>{Object.values(dataPoint)[3]}</div>
        <div className='common-pos'>{Object.values(dataPoint)[4]}</div>
        <div className='common-nouns'>{Object.values(dataPoint)[5]}</div>
        <div className='common-verbs'>{Object.values(dataPoint)[6]}</div>
        <div className='common-adjectives'>{Object.values(dataPoint)[7]}</div>
        <div className='common-bigrams'>{Object.values(dataPoint)[8]}</div>
      </div>
    ));
    

    return <div>{mappedData}</div>;
  }
}

export default FetchData;
