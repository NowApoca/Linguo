import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber } from '../translate';
import { Button } from 'react-bootstrap';
import { NumberHelp } from './numberHelp';
import {SectionBox} from "./sectionBox"
import {SubjetBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";

export class Teoric extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        this.state = {}
    }
    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        return (
            <div >
                <div className="container teoricContainer" >
                    <div className="row">
                        <SectionBox subjet="hanzi" image={hanzi}/>
                        <SectionBox subjet="hanzi" image={hanzi}/>
                        <SubjetBar />
                    </div>
                    <div className="row">
                        <SectionBox subjet="number" image={number}/>
                        <SectionBox subjet="vocabulary" image={vocabulary}/>
                    </div>
                    <div className="row">
                        <SectionBox subjet="Auctions"/>
                    </div>
                </div>
             </div>
            );
  }
  }

  