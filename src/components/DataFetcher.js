import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import HorizontalBarChart from "./HorizontalBarChart ";

export function DataFetcher() {
  // Set url, initialize state variables.
  const url =
    "https://gist.githubusercontent.com/t-mayer/0bb8098c6995a6316534cb3631a82d26/raw/result.json";
  const [data, setData] = useState([]);
  const [wordCountData, setWordCountData] = useState({});
  const [commonWords, setcommonWords] = useState({});
  const [commonBigrams, setcommonBigrams] = useState({});

  // Pos tags.
  const [commonPOS, setcommonPOS] = useState({});

  // Verbs, Adjctives, Nouns.
  const [commonAdjectives, setcommonAdjectives] = useState({});
  const [commonNouns, setcommonNouns] = useState({});
  const [commonVerbs, setcommonVerbs] = useState({});

  // Make request and fetch data.
  useEffect(async () => {
    const response = await fetch(url);

    // Parse json.
    const json = await response.json();

    // Convert object to array.
    const data = Object.keys(json).map((key) => json[key]);
    setData(data);

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
      mostCommonWords.push(
        Object.keys(item.Words).map((key) => item.Words[key])
      );
      mostCommonWordsLabels.push(Object.keys(item.Words));
    });

    // Extract most common bigrams values and keys from dict object.
    let mostCommonBigrams = [];
    let mostCommonBigramsLabels = [];
    data.map((item) => {
      mostCommonBigrams.push(
        Object.keys(item.Bigrams).map((key) => item.Bigrams[key])
      );
      mostCommonBigramsLabels.push(Object.keys(item.Bigrams));
    });

    // Extract most common POS values and keys from dict object.
    let mostCommonPOS = [];
    let mostCommonPOSLabels = [];
    data.map((item) => {
      mostCommonPOS.push(Object.keys(item.POS).map((key) => item.POS[key]));
      mostCommonPOSLabels.push(Object.keys(item.POS));
    });

    // Extract most common Verbs values and keys from dict object.
    let mostCommonVerbs = [];
    let mostCommonVerbsLabels = [];
    data.map((item) => {
      mostCommonVerbs.push(
        Object.keys(item.Verbs).map((key) => item.Verbs[key])
      );
      mostCommonVerbsLabels.push(Object.keys(item.Verbs));
    });

    // Extract most common Adjectives values and keys from dict object.
    let mostCommonAdjectives = [];
    let mostCommonAdjectivesLabels = [];
    data.map((item) => {
      mostCommonAdjectives.push(
        Object.keys(item.Adjectives).map((key) => item.Adjectives[key])
      );
      mostCommonAdjectivesLabels.push(Object.keys(item.Adjectives));
    });

    // Extract most common Nouns values and keys from dict object.
    let mostCommonNouns = [];
    let mostCommonNounsLabels = [];
    data.map((item) => {
      mostCommonNouns.push(
        Object.keys(item.Nouns).map((key) => item.Nouns[key])
      );
      mostCommonNounsLabels.push(Object.keys(item.Nouns));
    });

    // Construct a barchart for word count data.
    const wordCountData = {
      labels: partyNames,
      datasets: [
        {
          data: wordCount,
          backgroundColor: [
            "rgba(255, 221, 0, 0.5)",
            "rgba(43, 217, 0, 0.5)",
            "rgba(204, 27, 0, 0.5)",
            "rgba(181, 34, 105, 0.5)",
            "rgba(0, 209, 255, 0.5)",
            "rgba(26, 26, 26, 0.5)",
          ],
          borderColor: [
            "rgba(255, 221, 0, 0.8)",
            "rgba(43, 217, 0, 0.8)",
            "rgba(204, 27, 0, 0.8)",
            "rgba(181, 34, 105, 0.8)",
            "rgba(0, 209, 255, 0.8)",
            "rgba(26, 26, 26, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setWordCountData(wordCountData);

    // Construct a barchart for most common words: FDP.
    const commonWords = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          // FDP.
          data: mostCommonWords[0],
          labels: mostCommonWordsLabels[0],
          label: "FDP",
          backgroundColor: ["rgba(255, 221, 0, 0.5)"],
          borderColor: ["rgba(255, 221, 0, 0.8)"],
          borderWidth: 1,
        },

        // Grüne.
        {
          data: mostCommonWords[1],
          hidden: true,
          label: "Die Grünen",
          labels: mostCommonWordsLabels[1],
          backgroundColor: ["rgba(43, 217, 0, 0.5)"],
          borderColor: ["rgba(43, 217, 0, 0.8)"],
          borderWidth: 1,
        },

        // SPD.
        {
          data: mostCommonWords[2],
          hidden: true,
          label: "SPD",
          labels: mostCommonWordsLabels[2],
          backgroundColor: ["rgba(204, 27, 0, 0.5)"],
          borderColor: ["rgba(204, 27, 0, 0.8)"],
          borderWidth: 1,
        },
        // Linke.
        {
          data: mostCommonWords[3],
          hidden: true,
          label: "Linke",
          labels: mostCommonWordsLabels[3],
          backgroundColor: ["rgba(181, 34, 105, 0.5)"],
          borderColor: ["rgba(181, 34, 105, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonWords[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonWordsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonWords[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonWordsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    setcommonWords(commonWords);

    // Construct a barchart for most common bigrams: FDP.
    const commonBigrams = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          // FDP.
          data: mostCommonBigrams[0],
          labels: mostCommonBigramsLabels[0],
          label: "FDP",
          backgroundColor: ["rgba(255, 221, 0, 0.5)"],
          borderColor: ["rgba(255, 221, 0, 0.8)"],
          borderWidth: 1,
        },

        // Grüne.
        {
          data: mostCommonBigrams[1],
          hidden: true,
          label: "Die Grünen",
          labels: mostCommonBigramsLabels[1],
          backgroundColor: ["rgba(43, 217, 0, 0.5)"],
          borderColor: ["rgba(43, 217, 0, 0.8)"],
          borderWidth: 1,
        },

        // SPD.
        {
          data: mostCommonBigrams[2],
          hidden: true,
          label: "SPD",
          labels: mostCommonBigramsLabels[2],
          backgroundColor: ["rgba(204, 27, 0, 0.5)"],
          borderColor: ["rgba(204, 27, 0, 0.8)"],
          borderWidth: 1,
        },
        // Linke.
        {
          data: mostCommonBigrams[3],
          hidden: true,
          label: "Linke",
          labels: mostCommonBigramsLabels[3],
          backgroundColor: ["rgba(181, 34, 105, 0.5)"],
          borderColor: ["rgba(181, 34, 105, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonBigrams[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonBigramsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonBigrams[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonBigramsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    setcommonBigrams(commonBigrams);

    // Construct a barchart for most common POS: FDP.
    const commonPOS = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          // FDP.
          data: mostCommonPOS[0],
          labels: mostCommonPOSLabels[0],
          label: "FDP",
          backgroundColor: ["rgba(255, 221, 0, 0.5)"],
          borderColor: ["rgba(255, 221, 0, 0.8)"],
          borderWidth: 1,
        },

        // Grüne.
        {
          data: mostCommonPOS[1],
          hidden: true,
          label: "Die Grünen",
          labels: mostCommonPOSLabels[1],
          backgroundColor: ["rgba(43, 217, 0, 0.5)"],
          borderColor: ["rgba(43, 217, 0, 0.8)"],
          borderWidth: 1,
        },

        // SPD.
        {
          data: mostCommonPOS[2],
          hidden: true,
          label: "SPD",
          labels: mostCommonPOSLabels[2],
          backgroundColor: ["rgba(204, 27, 0, 0.5)"],
          borderColor: ["rgba(204, 27, 0, 0.8)"],
          borderWidth: 1,
        },
        // Linke.
        {
          data: mostCommonPOS[3],
          hidden: true,
          label: "Linke",
          labels: mostCommonPOSLabels[3],
          backgroundColor: ["rgba(181, 34, 105, 0.5)"],
          borderColor: ["rgba(181, 34, 105, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonPOS[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonPOSLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonPOS[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonPOSLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    setcommonPOS(commonPOS);

    // Construct a barchart for most common Nouns: FDP.
    const commonNouns = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          // FDP.
          data: mostCommonNouns[0],
          labels: mostCommonNounsLabels[0],
          label: "FDP",
          backgroundColor: ["rgba(255, 221, 0, 0.5)"],
          borderColor: ["rgba(255, 221, 0, 0.8)"],
          borderWidth: 1,
        },

        // Grüne.
        {
          data: mostCommonNouns[1],
          hidden: true,
          label: "Die Grünen",
          labels: mostCommonNounsLabels[1],
          backgroundColor: ["rgba(43, 217, 0, 0.5)"],
          borderColor: ["rgba(43, 217, 0, 0.8)"],
          borderWidth: 1,
        },

        // SPD.
        {
          data: mostCommonNouns[2],
          hidden: true,
          label: "SPD",
          labels: mostCommonNounsLabels[2],
          backgroundColor: ["rgba(204, 27, 0, 0.5)"],
          borderColor: ["rgba(204, 27, 0, 0.8)"],
          borderWidth: 1,
        },
        // Linke.
        {
          data: mostCommonNouns[3],
          hidden: true,
          label: "Linke",
          labels: mostCommonNounsLabels[3],
          backgroundColor: ["rgba(181, 34, 105, 0.5)"],
          borderColor: ["rgba(181, 34, 105, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonNouns[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonNounsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonNouns[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonNounsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    setcommonNouns(commonNouns);

    // Construct a barchart for most common Nouns: FDP.
    const commonVerbs = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          // FDP.
          data: mostCommonVerbs[0],
          labels: mostCommonVerbsLabels[0],
          label: "FDP",
          backgroundColor: ["rgba(255, 221, 0, 0.5)"],
          borderColor: ["rgba(255, 221, 0, 0.8)"],
          borderWidth: 1,
        },

        // Grüne.
        {
          data: mostCommonVerbs[1],
          hidden: true,
          label: "Die Grünen",
          labels: mostCommonVerbsLabels[1],
          backgroundColor: ["rgba(43, 217, 0, 0.5)"],
          borderColor: ["rgba(43, 217, 0, 0.8)"],
          borderWidth: 1,
        },

        // SPD.
        {
          data: mostCommonVerbs[2],
          hidden: true,
          label: "SPD",
          labels: mostCommonVerbsLabels[2],
          backgroundColor: ["rgba(204, 27, 0, 0.5)"],
          borderColor: ["rgba(204, 27, 0, 0.8)"],
          borderWidth: 1,
        },
        // Linke.
        {
          data: mostCommonVerbs[3],
          hidden: true,
          label: "Linke",
          labels: mostCommonVerbsLabels[3],
          backgroundColor: ["rgba(181, 34, 105, 0.5)"],
          borderColor: ["rgba(181, 34, 105, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonVerbs[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonVerbsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonVerbs[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonVerbsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    setcommonVerbs(commonVerbs);

    // Construct a barchart for most common Adjectives: FDP.
    const commonAdjectives = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          // FDP.
          data: mostCommonAdjectives[0],
          labels: mostCommonAdjectivesLabels[0],
          label: "FDP",
          backgroundColor: ["rgba(255, 221, 0, 0.5)"],
          borderColor: ["rgba(255, 221, 0, 0.8)"],
          borderWidth: 1,
        },

        // Grüne.
        {
          data: mostCommonAdjectives[1],
          hidden: true,
          label: "Die Grünen",
          labels: mostCommonAdjectivesLabels[1],
          backgroundColor: ["rgba(43, 217, 0, 0.5)"],
          borderColor: ["rgba(43, 217, 0, 0.8)"],
          borderWidth: 1,
        },

        // SPD.
        {
          data: mostCommonAdjectives[2],
          hidden: true,
          label: "SPD",
          labels: mostCommonAdjectivesLabels[2],
          backgroundColor: ["rgba(204, 27, 0, 0.5)"],
          borderColor: ["rgba(204, 27, 0, 0.8)"],
          borderWidth: 1,
        },
        // Linke.
        {
          data: mostCommonAdjectives[3],
          hidden: true,
          label: "Linke",
          labels: mostCommonAdjectivesLabels[3],
          backgroundColor: ["rgba(181, 34, 105, 0.5)"],
          borderColor: ["rgba(181, 34, 105, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonAdjectives[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonAdjectivesLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },
        {
          data: mostCommonAdjectives[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonAdjectivesLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    setcommonAdjectives(commonAdjectives);
  }, []);

  return (
    <div>
      <BarChart
        displayDataLabels={false}
        showXAxisLabel={true}
        displayLegend={false}
        chartData={wordCountData}
      />
      <HorizontalBarChart
        textTitle={"Die 10 häufigsten Wörter im Wahlprogramm"}
        chartData={commonWords}
      />
      <HorizontalBarChart
        textTitle={"Die 10 häufigsten Bigrams im Wahlprogramm"}
        chartData={commonBigrams}
      />
      <BarChart
        textTitle={"Die 10 häufigsten Part-of-Speech Tags im Wahlprogramm"}
        chartData={commonPOS}
      />
      <HorizontalBarChart
        textTitle={"Die 10 häufigsten Nomen im Wahlprogramm"}
        chartData={commonNouns}
      />
      <HorizontalBarChart
        textTitle={"Die 10 häufigsten Verben im Wahlprogramm"}
        chartData={commonVerbs}
      />
      <HorizontalBarChart
        textTitle={"Die 10 häufigsten Adjektive im Wahlprogramm"}
        chartData={commonAdjectives}
      />
    </div>
  );
}
