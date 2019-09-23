import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { translateNumber } from '../translate';
import {SectionHomeBox} from "./sectionHomeBox"
import {ButtonToApp} from "./buttonToApp"
import {SubjetBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";

export class Aplications extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <div>
            <div className="container">
                <div class="row" style={{"border-bottom-style":"dotted"}}>
                    <div class ="col-6">
                        <ButtonToApp subjet="hanzi" text="Insert Text here" date="29-11-11" image={hanzi}/>
                    </div>
                    <div class ="col-6">
                        <ButtonToApp subjet="hanzi" text="Insert Text here" date="29-11-11" image={hanzi}/>
                    </div>
                </div>
            </div>
        </div>);
  }
}

export default Aplications;


