import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

export class ButtonToApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {language:props.language, subject:props.subject, image:props.image, date: props.date, text: props.text, linkTo:props.linkTo}
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        return (
            <div className=".col-md-6" style={{margin:"30px"}}>
                <div className="row">
                    <Link to={this.state.linkTo} style={{"margin":"10px", width:"95%", height:"65%"}} >
                        <img src={this.state.image} width="95%" height="65%" style={{"margin":"10px"}} />
                    </Link>
                    <div className="col-2"> <Link to="/about">  <button className="navBarButton" >{translate(this.state.subject, this.state.language)}</button></Link></div>
                </div>
                <div className="row">
                    <h5>{this.state.text}</h5>
                </div>
            </div>
            );
    }
  }

  export default ButtonToApp;