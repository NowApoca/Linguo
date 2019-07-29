import React from 'react';
import './App.css';
import {translate} from "./translate"
import {Index} from "./components/index"
import {Numbers} from "./components/number"

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