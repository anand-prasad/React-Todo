import React from 'react';

export default class  SelectViewComp extends  React.Component {
	constructor(props) {
    	super();

    }
	componentWillMount() {
		
	}
	componentWillReceiveProps(nextProps, nextState) {
	
	}	

	onChangeHandler(event) {
		        this.props.onValueChange(event);
	} 
	render() {

		return (
			<div>
				<label>{this.props.label}</label> 
				<div><select onChange={(event) => this.onChangeHandler(event)} name={this.props.name}>
					<option>--- select ----</option>
					{this.props.options && this.props.options.formData ? 
					this.props.options.formData.map((repo,i)=> (<option key={i}  value={repo.key}>{repo.Value}</option>)) : ""}
				</select></div>
			</div> 
		);
	}
}
