import React from 'react';
import '../App.css';
import { translateNumber } from '../translate';
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
        this.state = {articles:[{title:"",type:"",date:""}]}
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
                        <SectionBox subjet="hanzi" date="29-11-10" image={hanzi}/>
                        <SectionBox subjet="hanzi" date="29-11-11" image={hanzi}/>
                        <SubjetBar />
                    </div>
                    <div className="row">
                        <SectionBox subjet="number" date="29-11-12" image={number}/>
                        <SectionBox subjet="vocabulary" date="29-11-13" image={vocabulary}/>
                    </div>
                    <div className="row">
                        <SectionBox subjet="Auctions"/>
                    </div>
                </div>
             </div>
            );
    }
  }

  