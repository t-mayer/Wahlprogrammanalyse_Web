import React from "react";
import hero from "../hero.jpg";
import { Component } from "react";
import { DataFetcher } from "../components/DataFetcher";

// Define new class: home component.
export default class Home extends Component {
  render() {
    return (
      <div>
          <img src={hero}></img>
          <h1><a href="https://github.com/t-mayer/Wahlprogrammanalyse">Linguistische Wahlprogrammanalyse</a></h1>
          <div className="intro">
            <p>Am 26. September 2021 steht die Bundestagswahl in Deutschland an. 
              Die deutsche Bundeskanzlerin Angela Merkel wird nach 16 Jahren in den Ruhestand gehen 
              und Platz für einen neuen Kanzler machen. 
              Zusätzlich haben verschiedene wichtige Ereignisse wie Covid-19, der Klimawandel und politische Korruption 
              die Meinungen und Ansichten der deutschen Bevölkerung geprägt. 
              Aus diesen Gründen wird es spannend, 
              wie die politische Landschaft als auch der neue Bundestag aussehen werden.
              Die Wahlprogramme der Parteien werden hier in Form von interaktiven 
              Diagrammen aus linguistischer Sicht vorgestellt!
            </p>
          </div>
          <div className="diagrams">
          <DataFetcher/>
          </div>
      </div>
    );
  }
}
