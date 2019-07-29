import React from 'react';
import './App.css';
import {translate} from "./translate"

class Index extends React.Component {
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
class Numbers extends React.Component {
  constructor(props){
    super(props)
    this.unMount = props.unMount
  }
render() {
  return (
  <div className="App">
    <h1> Numbers </h1>
    <button onClick={() => { this.unMount("index")}}>Index</button>
  </div>);
}
}

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {mount:props.mount}
    }
    unMountChild(nextComponent){
      this.setState({mount:nextComponent})
    }
    nextComponent(){
      switch(this.state.mount){
        case "index":
          return <Index unMount={this.unMountChild.bind(this)}/>
        case "number":
            return <Numbers unMount={this.unMountChild.bind(this)}/>
        case "phrase":
            return <Index unMount={this.unMountChild.bind(this)}/>
        default:
      }
    }
  render() {
    return (
    <div >
      {this.nextComponent()}
    </div>);
  }
}

export default App;