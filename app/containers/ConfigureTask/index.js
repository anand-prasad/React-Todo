import React from 'react';
import { FormattedMessage } from 'react-intl';
import TextFieldComp from '../components/TextView';
import SelectViewComp from '../components/SelectView';
import DatePicker from 'react-bootstrap-date-picker';
import ButtonComp from '../components/Button';
import CheckBoxField from '../components/checkBoxView'
import {Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import {getCategoryData} from "./ConfigureTaskAction";
import {addTodo} from "./ConfigureTaskAction";




class HomePage extends React.PureComponent { 
      constructor(props){
        super();
        this.onValueChange = this.onValueChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.state = {
        formData:{},
        todoData:{}
      }    
    }
 componentWillMount() {
     this.props.onGetCategoryData();
  }

onValueChange(e){
			let todoData = {};
			if(e.target.name === "taskState"){
        todoData[e.target.name] = e.target.checked;
        this[e.target.name] = e.target.checked;
			}
			else{
        todoData[e.target.name] =  e.target.value;
        this[e.target.name] = e.target.value;
      }
}

addRow(){
    	var state = {
   			...this.state
      };
      console.log(state);
  		state.todoData = [...state.todoData,
  			{
  				description: this.description,
  				category: this.category,
				  taskState : this.taskState
			}];
      this.setState(state);
      if(state.todoData){
        this.props.onAddTodo(state.todoData)
      }
}

  render() {
    const {formData} = this.props;

    return (
      <div>
        <TextFieldComp name="description" label="Description" onValueChange={this.onValueChange}/>
        <SelectViewComp name="category" label="Category"  options={formData} onValueChange={this.onValueChange}/>
        <CheckBoxField name="taskState" label="TaskState" onValueChange={this.onValueChange}/>
        <ButtonComp name="Add" onSave={this.addRow}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    formData : state.get('formData'),
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAddTodo: (evt) => dispatch(addTodo(evt)),
    onGetCategoryData: (evt) => dispatch(getCategoryData()),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
