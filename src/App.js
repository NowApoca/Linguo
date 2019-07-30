import React from 'react';
import './App.css';
import {translate} from "./translate"
import {Index} from "./components/index"
import {Numbers} from "./components/number"
import {Dropdown} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {mount:props.mount,language:"eng"}
    }
    unMountChild(nextComponent){
      this.setState({mount:nextComponent})
    }
    nextComponent(){
      switch(this.state.mount){
        case "index":
          return <Index unMount={this.unMountChild.bind(this)} language={this.state.language}/>
        case "number":
            return <Numbers unMount={this.unMountChild.bind(this)} language={this.state.language}/>
        case "phrase":
            return <Index unMount={this.unMountChild.bind(this)} language={this.state.language}/>
        default:
      }
    }
  render() {
    return (
    <div >
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      {this.nextComponent()}
    </div>);
  }
}

export default App;