import React from 'react';
import '../App.css';
import {translate} from "../translate"

export class Index extends React.Component {
    constructor(props){
      super(props)
      this.unMount = props.unMount
    }
  render() {
    return (
    <div className="App">
      <h1> {translate("welcome","CH")} </h1>
      <button onClick={() => { this.unMount("number")}}>Number</button>
    </div>);
  }
  }
  