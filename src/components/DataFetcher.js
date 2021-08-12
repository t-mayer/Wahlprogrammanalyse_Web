import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import HorizontalBarChart from "./HorizontalBarChart ";
import AdvancedBarChart from "./AdvancedBarChart";

export function DataFetcher() {

  // Set url, initialize state variables.
  const url =
    "https://gist.githubusercontent.com/t-mayer/0bb8098c6995a6316534cb3631a82d26/raw/result.json";
  const [data, setData] = useState([]);
  const [wordCountData, setWordCountData] = useState({});
  const [commonWords, setcommonWords] = useState({});
  const [commonBigrams, setcommonBigrams] = useState({});
  const [commonPOS, setcommonPOS] = useState({});

  // Verbs, Adjectives, Nouns.
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
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
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

        // AfD.
        {
          data: mostCommonWords[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonWordsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },

        // CDU.
        {
          data: mostCommonWords[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonWordsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },

        // Parteiübergreifend.
        {
          data: [
            mostCommonWords[0][0],
            "",
            mostCommonWords[1][0],
            "",
            mostCommonWords[2][0],
            "",
            mostCommonWords[3][0],
            "",
            mostCommonWords[4][0],
            "",
            mostCommonWords[5][0],
          ],
          hidden: true,
          label: "Parteiübergreifend: Häufigstes Wort",
          labels: [
            mostCommonWordsLabels[0][0],
            "",
            mostCommonWordsLabels[1][0],
            "",
            mostCommonWordsLabels[2][0],
            "",
            mostCommonWordsLabels[3][0],
            "",
            mostCommonWordsLabels[4][0],
            "",
            mostCommonWordsLabels[5][0],
          ],
          backgroundColor: [
            "rgba(255, 221, 0, 0.5)",
            "",
            "rgba(43, 217, 0, 0.5)",
            "",
            "rgba(204, 27, 0, 0.5)",
            "",
            "rgba(181, 34, 105, 0.5)",
            "",
            "rgba(0, 209, 255, 0.5)",
            "",
            "rgba(26, 26, 26, 0.5)",

          ],
          borderColor: [
            "rgba(255, 221, 0, 0.8)",
            "",
            "rgba(43, 217, 0, 0.8)",
            "",
            "rgba(204, 27, 0, 0.8)",
            "",
            "rgba(181, 34, 105, 0.8)",
            "",
            "rgba(0, 209, 255, 0.8)",
            "",
            "rgba(26, 26, 26, 0.8)",
          ],
          borderWidth: 1,
          barThickness: 30
        },
      ],
    };
    setcommonWords(commonWords);

    // Construct a barchart for most common bigrams: FDP.
    const commonBigrams = {
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
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

        // AfD.
        {
          data: mostCommonBigrams[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonBigramsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },

        // CDU.
        {
          data: mostCommonBigrams[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonBigramsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },

        // Parteiübergreifend.
        {
          data: [
            mostCommonBigrams[0][0],
            "",
            mostCommonBigrams[1][0],
            "",
            mostCommonBigrams[2][0],
            "",
            mostCommonBigrams[3][0],
            "",
            mostCommonBigrams[4][0],
            "",
            mostCommonBigrams[5][0],
          ],
          hidden: true,
          label: "Parteiübergreifend: Häufigstes Bigram",
          labels: [
            mostCommonBigramsLabels[0][0],
            "",
            mostCommonBigramsLabels[1][0],
            "",
            mostCommonBigramsLabels[2][0],
            "",
            mostCommonBigramsLabels[3][0],
            "",
            mostCommonBigramsLabels[4][0],
            "",
            mostCommonBigramsLabels[5][0],
          ],
          backgroundColor: [
            "rgba(255, 221, 0, 0.5)",
            "",
            "rgba(43, 217, 0, 0.5)",
            "",
            "rgba(204, 27, 0, 0.5)",
            "",
            "rgba(181, 34, 105, 0.5)",
            "",
            "rgba(0, 209, 255, 0.5)",
            "",
            "rgba(26, 26, 26, 0.5)",

          ],
          borderColor: [
            "rgba(255, 221, 0, 0.8)",
            "",
            "rgba(43, 217, 0, 0.8)",
            "",
            "rgba(204, 27, 0, 0.8)",
            "",
            "rgba(181, 34, 105, 0.8)",
            "",
            "rgba(0, 209, 255, 0.8)",
            "",
            "rgba(26, 26, 26, 0.8)",
          ],
          borderWidth: 1,
          barThickness: 30
        },
      ],
    };
    setcommonBigrams(commonBigrams);

    // Construct a barchart for most common POS: FDP.
    const commonPOS = {
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
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

        // AfD.
        {
          data: mostCommonPOS[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonPOSLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },

        // CDU.
        {
          data: mostCommonPOS[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonPOSLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
          
        },

        // Parteiübergreifend.
        {
          data: [
            mostCommonPOS[0][0],
            "",
            mostCommonPOS[1][0],
            "",
            mostCommonPOS[2][0],
            "",
            mostCommonPOS[3][0],
            "",
            mostCommonPOS[4][0],
            "",
            mostCommonPOS[5][0],
          ],
          hidden: true,
          label: "Parteiübergreifend: Häufigstes Part-of-Speech-Tag",
          labels: [
            mostCommonPOSLabels[0][0],
            "",
            mostCommonPOSLabels[1][0],
            "",
            mostCommonPOSLabels[2][0],
            "",
            mostCommonPOSLabels[3][0],
            "",
            mostCommonPOSLabels[4][0],
            "",
            mostCommonPOSLabels[5][0],
          ],
          backgroundColor: [
            "rgba(255, 221, 0, 0.5)",
            "",
            "rgba(43, 217, 0, 0.5)",
            "",
            "rgba(204, 27, 0, 0.5)",
            "",
            "rgba(181, 34, 105, 0.5)",
            "",
            "rgba(0, 209, 255, 0.5)",
            "",
            "rgba(26, 26, 26, 0.5)",

          ],
          borderColor: [
            "rgba(255, 221, 0, 0.8)",
            "",
            "rgba(43, 217, 0, 0.8)",
            "",
            "rgba(204, 27, 0, 0.8)",
            "",
            "rgba(181, 34, 105, 0.8)",
            "",
            "rgba(0, 209, 255, 0.8)",
            "",
            "rgba(26, 26, 26, 0.8)",
          ],
          borderWidth: 1,
          barThickness: 60
        },
      ],
    };
    setcommonPOS(commonPOS);

    // Construct a barchart for most common Nouns: FDP.
    const commonNouns = {
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
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

        // AfD.
        {
          data: mostCommonNouns[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonNounsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },

        // CDU.
        {
          data: mostCommonNouns[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonNounsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
          // Parteiübergreifend.
          {
            data: [
              mostCommonNouns[0][0],
              "",
              mostCommonNouns[1][0],
              "",
              mostCommonNouns[2][0],
              "",
              mostCommonNouns[3][0],
              "",
              mostCommonNouns[4][0],
              "",
              mostCommonNouns[5][0],
            ],
            hidden: true,
            label: "Parteiübergreifend: Häufigstes Nomen",
            labels: [
              mostCommonNounsLabels[0][0],
              "",
              mostCommonNounsLabels[1][0],
              "",
              mostCommonNounsLabels[2][0],
              "",
              mostCommonNounsLabels[3][0],
              "",
              mostCommonNounsLabels[4][0],
              "",
              mostCommonNounsLabels[5][0],
            ],
            backgroundColor: [
              "rgba(255, 221, 0, 0.5)",
              "",
              "rgba(43, 217, 0, 0.5)",
              "",
              "rgba(204, 27, 0, 0.5)",
              "",
              "rgba(181, 34, 105, 0.5)",
              "",
              "rgba(0, 209, 255, 0.5)",
              "",
              "rgba(26, 26, 26, 0.5)",
  
            ],
            borderColor: [
              "rgba(255, 221, 0, 0.8)",
              "",
              "rgba(43, 217, 0, 0.8)",
              "",
              "rgba(204, 27, 0, 0.8)",
              "",
              "rgba(181, 34, 105, 0.8)",
              "",
              "rgba(0, 209, 255, 0.8)",
              "",
              "rgba(26, 26, 26, 0.8)",
            ],
            borderWidth: 1,
            barThickness: 30
          },
      ],
    };
    setcommonNouns(commonNouns);

    // Construct a barchart for most common Nouns: FDP.
    const commonVerbs = {
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
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

        // AfD.
        {
          data: mostCommonVerbs[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonVerbsLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },

        // CDU.
        {
          data: mostCommonVerbs[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonVerbsLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },

         // Parteiübergreifend.
         {
          data: [
            mostCommonVerbs[0][0],
            "",
            mostCommonVerbs[1][0],
            "",
            mostCommonVerbs[2][0],
            "",
            mostCommonVerbs[3][0],
            "",
            mostCommonVerbs[4][0],
            "",
            mostCommonVerbs[5][0],
          ],
          hidden: true,
          label: "Parteiübergreifend: Häufigstes Verb",
          labels: [
            mostCommonVerbsLabels[0][0],
            "",
            mostCommonVerbsLabels[1][0],
            "",
            mostCommonVerbsLabels[2][0],
            "",
            mostCommonVerbsLabels[3][0],
            "",
            mostCommonVerbsLabels[4][0],
            "",
            mostCommonVerbsLabels[5][0],
          ],
          backgroundColor: [
            "rgba(255, 221, 0, 0.5)",
            "",
            "rgba(43, 217, 0, 0.5)",
            "",
            "rgba(204, 27, 0, 0.5)",
            "",
            "rgba(181, 34, 105, 0.5)",
            "",
            "rgba(0, 209, 255, 0.5)",
            "",
            "rgba(26, 26, 26, 0.5)",

          ],
          borderColor: [
            "rgba(255, 221, 0, 0.8)",
            "",
            "rgba(43, 217, 0, 0.8)",
            "",
            "rgba(204, 27, 0, 0.8)",
            "",
            "rgba(181, 34, 105, 0.8)",
            "",
            "rgba(0, 209, 255, 0.8)",
            "",
            "rgba(26, 26, 26, 0.8)",
          ],
          borderWidth: 1,
          barThickness: 30
        },
      ],
    };
    setcommonVerbs(commonVerbs);

    // Construct a barchart for most common Adjectives: FDP.
    const commonAdjectives = {
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
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

        // AfD.
        {
          data: mostCommonAdjectives[4],
          hidden: true,
          label: "AfD",
          labels: mostCommonAdjectivesLabels[4],
          backgroundColor: ["rgba(0, 209, 255, 0.5)"],
          borderColor: ["rgba(0, 209, 255, 0.8)"],
          borderWidth: 1,
        },

        // CDU.
        {
          data: mostCommonAdjectives[5],
          hidden: true,
          label: "CDU",
          labels: mostCommonAdjectivesLabels[5],
          backgroundColor: ["rgba(26, 26, 26, 0.5)"],
          borderColor: ["rgba(26, 26, 26, 0.8)"],
          borderWidth: 1,
        },
         // Parteiübergreifend.
         {
          data: [
            mostCommonAdjectives[0][0],
            "",
            mostCommonAdjectives[1][0],
            "",
            mostCommonAdjectives[2][0],
            "",
            mostCommonAdjectives[3][0],
            "",
            mostCommonAdjectives[4][0],
            "",
            mostCommonAdjectives[5][0],
        
          ],
          hidden: true,
          label: "Parteiübergreifend: Häufigstes Adjektiv",
          labels: [
            mostCommonAdjectivesLabels[0][0],
            "",
            mostCommonAdjectivesLabels[1][0],
            "",
            mostCommonAdjectivesLabels[2][0],
            "",
            mostCommonAdjectivesLabels[3][0],
            "",
            mostCommonAdjectivesLabels[4][0],
            "",
            mostCommonAdjectivesLabels[5][0],
       
          ],
          backgroundColor: [
            "rgba(255, 221, 0, 0.5)",
            "",
            "rgba(43, 217, 0, 0.5)",
            "",
            "rgba(204, 27, 0, 0.5)",
            "",
            "rgba(181, 34, 105, 0.5)",
            "",
            "rgba(0, 209, 255, 0.5)",
            "",
            "rgba(26, 26, 26, 0.5)",

          ],
          borderColor: [
            "rgba(255, 221, 0, 0.8)",
            "",
            "rgba(43, 217, 0, 0.8)",
            "",
            "rgba(204, 27, 0, 0.8)",
            "",
            "rgba(181, 34, 105, 0.8)",
            "",
            "rgba(0, 209, 255, 0.8)",
            "",
            "rgba(26, 26, 26, 0.8)",
            
          ],
          borderWidth: 1,
          barThickness: 30
        },
      ],
    };
    setcommonAdjectives(commonAdjectives);
  }, []);

  return (
    <div>
      <h4>Länge des Wahlprogramms in Wörtern</h4>
      <BarChart
        displayDataLabels={false}
        showXAxisLabel={true}
        displayLegend={false}
        chartData={wordCountData}
      />
      <h4>Die 10 häufigsten Wörter im Wahlprogramm <br/> (Auf die Legende klicken, um diese pro Partei zu sehen)</h4>
      <HorizontalBarChart
        chartData={commonWords}
        paddingRight={50}
        paddinLeft={-30}
        paddingTop={20}
        paddingBottom={20}
      />
      <h4>Die 10 häufigsten Bigrams im Wahlprogramm <br/> (Auf die Legende klicken, um diese pro Partei zu sehen)</h4>
      <HorizontalBarChart
        chartData={commonBigrams}
        paddingRight={80}
        paddingLeft={-40}
        paddingTop={20}
        paddingBottom={20}
      />
      <h4>Die 10 häufigsten Wortarten im Wahlprogramm <br/>(Auf die Legende klicken, um diese pro Partei zu sehen)</h4>
      <AdvancedBarChart
        chartData={commonPOS}
      />
      <h4>Die 10 häufigsten Nomen im Wahlprogramm <br/>(Auf die Legende klicken, um diese pro Partei zu sehen)</h4>
      <HorizontalBarChart
        chartData={commonNouns}
        paddingRight={60}
        paddingLeft={-40}
        paddingBottom={20}
      />
     <h4>Die 10 häufigsten Verben im Wahlprogramm <br/>(Auf die Legende klicken, um diese pro Partei zu sehen)</h4>

      <HorizontalBarChart
        chartData={commonVerbs}
        paddingRight={50}
        paddingLeft={-30}
        paddingBottom={20}
      />
            <h4>Die 10 häufigsten Adjektive im Wahlprogramm <br/>(Auf die Legende klicken, um diese pro Partei zu sehen)</h4>

      <HorizontalBarChart
        chartData={commonAdjectives}
        paddingRight={50}
        paddingLeft={-30}
        paddingBottom={20}
      />

    </div>
  );
}
