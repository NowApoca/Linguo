import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { translateNumber } from '../translate';
import {SectionHomeBox} from "./sectionHomeBox"
import {SubjectBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={mountChild: props.mountChild};
    }
    onClick(nextComponent){
        this.state.mountChild(nextComponent)
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
  render() {
    return (
        <div>
            <div className="container">
                        <SectionHomeBox subject="hanzi" text="Insert Text here" date="29-11-11" image={hanzi}/>
                        <SectionHomeBox subject="hanzi" text="Insert Text here" date="29-11-11" image={hanzi}/>
                        <SectionHomeBox subject="hanzi" text="The first newspaper, Siraj-ul-Akhbar (Lamp of the News) was initially published on January 11
                        , 1906, with Abdul-Rauf as editor. After this first and only issue in Persian language, its publication stopped.
                         It was revived in October 1911 by Mahmud Tarzi, the editor and owner of the newspaper who was critical of the friendship
                          between the British Empire and Afghanistan. Mahmud Tarzi became known as the pioneer of Afghan journalism, in 1916 he famously wrote:
                           'Siraj Al Akhbar Afghaniya is neither British, nor Russian nor French nor Italian nor German nor Chinese or Japanese.
                            It is a Muslim newspaper and, in that, it is specifically an Afghan newspaper. Whatever it says, whatever melody it sings,
                             is from an Afghan point of view and stems from the tone of Afghan national dignity.'
                              In 1919, under King Amanullah Khan, Aman-i-Afghan (Afghan Peace) replaced Siraj al-Akhbar, serving as an organ
                               of the government, while several smaller private journals appeared under different ministries.[11] Along with these developments,
                                Radio Kabul began broadcasting in 1925, which inaugurated a new era of mass media in the country.[11] The 1964 Constitution of
                                 Afghanistan and the Press Law of 1965 provided for freedom of the press, within the boundaries of appropriate behavior. The 
                                 press was editorially independent from government but was instructed to safeguard the interests of the state and constitutional monarchy,
                                  Islam, and public order. Afghan journalism progressed and developed from the 1950s through to the 1970s, though it remained limited. " date="29-11-11" image={hanzi}/>
                        <SectionHomeBox subject="hanzi" text="Insert Text here" date="29-11-11" image={hanzi}/>
            </div>
        </div>);
  }
}

export default Home;


