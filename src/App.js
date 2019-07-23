import React from 'react';
import './App.css';
import {words} from "./vocabulary/words"
import {translate} from "./translate"

function App(language = "CH") {
  return (
    <div className="App">
      <h1> {translate("welcome","CH")} </h1>
    </div>
  );
}

export default App;
