import React, { Component } from 'react';
import { TextInput } from 'react-native';

export class FromToExercice extends Component() {
    
    constructor(props) {
        super(props);
        //languageFrom = "CH", languageTo = "num"
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
      
        this.setState({name:value});
    }

    render() {
        return (
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleInputChange()}
            value={this.state.text}
          />
        );
      }
}
