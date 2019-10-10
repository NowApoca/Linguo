import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { translateNumber } from '../translate';
import {SectionHomeBox} from "./sectionHomeBox"
import {SubjectBar} from "./subjectBar"
import {Title, SubTitle, Paragraph, Image} from "./writeComponents"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";

export class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {subject:props.subject, image:props.image, date: props.date, text: props.text}
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        return (
            <div >
                <Image image= {number} />
                <Title text="Titul adsdas adsasd o"/>
                <SubTitle text="SubTitle"/>
                <Paragraph text={this.state.text}/>
            </div>
            );
  }
  }

export default Article;
