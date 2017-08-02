import React from 'react';

export default class ButtonComp extends React.Component {
    constructor(props){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
    }
    render() {
    return (
    <div>
    <button onClick={this.handleClick} type="button">{this.props.name}</button>       
    </div>
    );
    }

    handleClick(e){
        this.props.onSave(e);
	}
}


