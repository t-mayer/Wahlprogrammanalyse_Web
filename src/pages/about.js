import React from "react";
import { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h4>Über dieses Projekt</h4>
        <p>
          Dies ist ein Hobbyprojekt um React JS zu lernen in Kombination mit
          einer Datenanalyse. <br/>Im Moment enthält es nur eine explorative
          Datenanalyse der Wahlprogramme. <br/>Weitere Analysen werden folgen: <br/>
          <ul>
            <li>Sentimentanalyse</li>
            <li>Dokumentähnlichkeit</li>
            <li>Topic Modeling</li>
            <li>Clustering</li>
            <li>Keyword Extraction</li>
          </ul>
        </p>

        <h4>Was wurde verwendet?</h4>
        <ul>
          <li>Analyse: Python</li>
          <li>Website: React JS</li>
          <li>Diagramme: Chart.js</li>
        </ul>
      </div>
    );
  }
}
