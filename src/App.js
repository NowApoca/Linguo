import React from 'react';
import './App.css';
import {translate} from "./translate"
import {Index} from "./components/index"
import {Numbers} from "./components/number"
import {Dropdown,Navbar,Nav, NavDropdown,Form,Button} from "react-bootstrap"
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
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand onClick={() => this.unMountChild("index")}>Linguo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.unMountChild("number")}>Number</Nav.Link>
            <Nav.Link onClick={() => this.unMountChild("phrase")}>Phrase</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {this.nextComponent()}
    </div>);
  }
}

export default App;