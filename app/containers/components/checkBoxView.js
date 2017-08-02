import React from 'react';

export default class CheckBoxField extends React.Component {
    componentWillMount() {
       var state = {};
        this.setState(state);
    }

    render() {
        return (
        <div>
          <input type="checkbox" name={this.props.name} onChange={this._onTextChange.bind(this)} checked={this.state.checked}/>
          <label className="icon-chkbx">{this.props.label}</label>
        </div>
        );
    }

    _onTextChange(evt){
      this.props.onValueChange(evt);
    }
}


