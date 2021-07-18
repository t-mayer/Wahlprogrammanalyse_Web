import { InternMap } from "d3";
import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";

export function DataFetcher() {
  // Set url, initialize state variables.
  const url =
    "https://gist.githubusercontent.com/t-mayer/0bb8098c6995a6316534cb3631a82d26/raw/result.json";
  const [data, setData] = useState([]);
  const [wordCountData, setWordCountData] = useState({});
  const [commonWords, setcommonWords] = useState({});


  // Make request and fetch data.
  useEffect(async () => {
    const response = await fetch(url);

    // Parse json.
    const json = await response.json();

    // Convert object to array.
    const data = Object.keys(json).map((key) => json[key]);
    setData(data);

    //console.log(data);

    // Wordcount: barchart component.
    let wordCount = [];
    data.map((item) => {
      wordCount.push(item.Count);
    });

    // Get labels: party names.
    let partyNames = [];
    data.map((item) => {
      partyNames.push(item.Party);
    });

    // Extract most common words values and keys from dict object.
    let mostCommonWords = [];
    let mostCommonWordsLabels = [];
    data.map((item) => {
      mostCommonWords.push(Object.keys(item.Words).map((key) => item.Words[key]));
      mostCommonWordsLabels.push(Object.keys(item.Words));
    });


    // Construct a barchart for word count data.
    const wordCountData = {
      labels: partyNames,
      datasets: [{
        data: wordCount,
        backgroundColor: [
          'rgba(255, 221, 0, 0.5)',
          'rgba(43, 217, 0, 0.5)',
          'rgba(204, 27, 0, 0.5)',
          'rgba(181, 34, 105, 0.5)',
          'rgba(0, 209, 255, 0.5)',
          'rgba(26, 26, 26, 0.5)'
        ],
        borderColor: [
          'rgba(255, 221, 0, 0.8)',
          'rgba(43, 217, 0, 0.8)',
          'rgba(204, 27, 0, 0.8)',
          'rgba(181, 34, 105, 0.8)',
          'rgba(0, 209, 255, 0.8)',
          'rgba(26, 26, 26, 0.8)'
        ],
          borderWidth: 1
      }],
    };
    setWordCountData(wordCountData);
    

    // Construct a barchart for word count data: FDP
    const commonWords = {
      labels: ['','','','','','','','','',''],
      datasets: [{

        // FDP.
        data: mostCommonWords[0],
        labels: mostCommonWordsLabels[0],
        label: 'FDP',
        backgroundColor: [
          'rgba(255, 221, 0, 0.5)',
        ],
        borderColor: [
          'rgba(255, 221, 0, 0.8)',
        ],
          borderWidth: 1
      },

      // Grüne.
      {
        data: mostCommonWords[1],
        hidden: true,
        label: 'Die Grünen',
        labels: mostCommonWordsLabels[1],
        backgroundColor: [
          'rgba(43, 217, 0, 0.5)',
        ],
        borderColor: [
          'rgba(43, 217, 0, 0.8)',
        ],
          borderWidth: 1
      },
    
      // SPD.
      {
        data: mostCommonWords[2],
        hidden: true,
        label: 'SPD',
        labels: mostCommonWordsLabels[2],
        backgroundColor: [
          'rgba(204, 27, 0, 0.8)',
        ],
        borderColor: [
          'rgba(204, 27, 0, 0.8)',
        ],
          borderWidth: 1
      },
     // Linke.
     {
      data: mostCommonWords[3],
      hidden: true,
      label: 'Linke',
      labels: mostCommonWordsLabels[3],
      backgroundColor: [
        'rgba(181, 34, 105, 0.8)',
      ],
      borderColor: [
        'rgba(181, 34, 105, 0.8)',
      ],
        borderWidth: 1
    }],
    };
    setcommonWords(commonWords);
  }, []);

  return (
    <div>
      <BarChart displayDataLabels={false} showXAxisLabel={true} displayLegend={false} chartData={wordCountData} />
      <BarChart textTitle={'Die 10 häufigsten Wörter im Wahlprogramm'} chartData={commonWords} />
    </div>
  );
}
