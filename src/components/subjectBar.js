import React from 'react';
import '../App.css';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';
import { Button } from 'react-bootstrap';
import { translate } from '../translate';

export class SubjectBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {language:props.language, initNumber:props.initNumber, writedLanguage: props.writedLanguage}
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        return (
            <div className="col-sm-4" style={ {"border-left":"1px solid red"}}>
                <div className="container blogSubjects" >
                    <h2 style={{margin:"5px", "border-bottom":"3px solid black"}}> Links </h2>
                    <div>
                        <row>
                            <Link to="/teorics/vocabulary" style={{"margin":"10px", width:"95%", height:"65%"}} >
                                <button class="themeButton" style={{margin:"10px"}}>{translate("vocabulary", this.state.language)}</button>
                            </Link>
                        </row>
                    </div>
                    <div>
                        <row>
                            <Link to="/teorics/grammar" style={{"margin":"10px", width:"95%", height:"65%"}} >
                                <button class="themeButton" style={{margin:"10px"}}>{translate("grammar", this.state.language)}</button>
                            </Link>
                            
                        </row>
                    <div>
                        <row>
                            <Link to="/teorics/expresions" style={{"margin":"10px", width:"95%", height:"65%"}} >
                                <button class="themeButton" style={{margin:"10px"}}>{translate("expresions", this.state.language)}</button>
                            </Link>
                            
                        </row>
                    </div>
                    <div>
                        <row>
                            <Link to="/teorics/mocks" style={{"margin":"10px", width:"95%", height:"65%"}} >
                                <button class="themeButton" style={{margin:"10px"}}>{translate("mock", this.state.language)}</button>
                            </Link>
                        </row>
                    </div>
                    <div>
                        <row>
                            <Link to="/teorics/aboutchina" style={{"margin":"10px", width:"95%", height:"65%"}} >
                                <button class="themeButton" style={{margin:"10px"}}>{translate("aboutChina", this.state.language)}</button>
                            </Link>
                        </row>
                    </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            );
  }
  }
