import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { translateNumber } from '../translate';
import {SectionHomeBox} from "./sectionHomeBox"
import {ButtonToApp} from "./buttonToApp"
import {SubjeCtBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";

export class Applications extends React.Component {
    constructor(props){
        super(props);
        this.state = {language: props.language }
    }

    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
  render() {
    return (
        <div>
            <div className="container">
                <div class="row" >
                    <div class ="col-6">
                        <ButtonToApp language={this.state.language} subject="hanzi" linkTo="/applications/number" text="Insert Text here" date="29-11-11" image={hanzi}/>
                    </div>
                    <div class ="col-6">
                        <ButtonToApp language={this.state.language} subject="hanzi" text="" linkTo="/applications/phrase" date="29-11-11" image={hanzi}/>
                    </div>
                </div>
            </div>
        </div>);
  }
}

export default Applications;
