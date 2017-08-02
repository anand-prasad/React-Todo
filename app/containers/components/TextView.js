import React from 'react';

export default class TextFieldComp extends React.Component {
    constructor(props){
        super();
        this.onTextChange = this.onTextChange.bind(this)
    }
    componentWillMount() {
       var state = {};
    }
    componentWillReceiveProps(newProps) {
    }
    
    render() {
        return (
            <div>
            <label>{this.props.label}</label> 
            <div><input type='text' name={this.props.name} onChange={this.onTextChange} /></div>
            </div>
        );
    }

    onTextChange(e){
        const name = e.target.value;
        this.props.onValueChange(e);
    }
    
          
}

