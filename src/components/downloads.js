import React from 'react';
import '../App.css';
import {SectionBox} from "./sectionBox"
import {SubjectBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import {Link} from "react-router-dom"
import pdf from "../images/pdf.png"

export class Download extends React.Component {
    constructor(props){
        super(props)
        this.state = {articles:[{title:"",type:"",date:""}], theme: props.theme, language: props.language}
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        return (
            <div class="row">
                <div className="col-6 offset-md-3">
                    <div className="row">
                        <div className="col-3">
                        <Link to="/files/paper.pdf" target="_blank"  style={{"margin":"10px", width:"95%", height:"65%"}} download>
                            <img src={pdf} width="10%" height="65%" style={{"margin":"10px"}} />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/files/paper.pdf" target="_blank"  style={{"margin":"10px", width:"95%", height:"65%"}} download>
                            <img src={pdf} width="10%" height="65%" style={{"margin":"10px"}} />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/files/paper.pdf" target="_blank"  style={{"margin":"10px", width:"95%", height:"65%"}} download>
                            <img src={pdf} width="10%" height="65%" style={{"margin":"10px"}} />
                        </Link>
                    </div>
                    <div className="col-6 offset-md-3">
                        <Link to="/files/paper.pdf" target="_blank"  style={{"margin":"10px", width:"95%", height:"65%"}} download>
                            <img src={pdf} width="10%" height="65%" style={{"margin":"10px"}} />
                        </Link>
                    </div>
                    <div className="col-6 offset-md-3">
                        <Link to="/files/paper.pdf" target="_blank"  style={{"margin":"10px", width:"95%", height:"65%"}} download>
                            <img src={pdf} width="10%" height="65%" style={{"margin":"10px"}} />
                        </Link>
                </div>
                    </div>
                </div>
            </div>
            );
    }
  }
