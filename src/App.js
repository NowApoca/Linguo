import React from 'react';
import './App.css';
import {translate} from "./translate"
import {Index} from "./components/index"
import {Numbers} from "./components/number"
import {Teoric} from "./components/teorics"
import {Dropdown,Navbar,Nav, NavDropdown,Form,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo.png";
import {NavBar} from "./components/navbar"

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {mount:props.mount,language:"eng"}
    }

    mountChild(nextComponent){
      this.setState({mount:nextComponent})
    }

    nextComponent(){
      console.group(this.state.mount)
      switch(this.state.mount){
        case "index":
          return <Index unMount={this.mountChild.bind(this)} language={this.state.language}/>
        case "number":
            return <Numbers unMount={this.mountChild.bind(this)} language={this.state.language}/>
        case "phrase":
            return <Index unMount={this.mountChild.bind(this)} language={this.state.language}/>
        case "teoric":
            return <Teoric unMount={this.mountChild.bind(this)} language={this.state.language}/>
        default:
      }
    }
  render() {
    return (
    <div >

      <NavBar mountChild={this.mountChild.bind(this)} />
      {this.nextComponent()}
    </div>);
  }
}

export default App;