import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getTasksData,deleteTodo} from "./taskListAction";
import ButtonComp from '../components/Button';



export class TaskList extends React.Component { 
  componentWillMount() {
     this.props.onGetTaskList();
  }
constructor(props){
        super();
        this.deleteRow = this.deleteRow.bind(this);
}
	deleteRow(rowIndex) {
   this.props.onDeleteTodo(rowIndex);
	}

  render() {
    const {taskListData} = this.props;
    return (
 <Table responsive>
    <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Description</th>
        <th>Due Date</th>
        <th>Task State</th>
      </tr>
    </thead>
    <tbody>
       {taskListData['taskListData']? taskListData['taskListData'].map((taskList, taskIndex)=>(
        <tr key={taskIndex}>
        <td>{taskList.id}</td>
        <td>{taskList.category}</td>
        <td>{taskList.description}</td>
        <td>{taskList.duedate}</td>
        <td>{taskList.taskState ?'done':'pending'}</td>
        <td><ButtonComp name="Delete" onSave={() => this.deleteRow(taskList.id)}/></td>
        </tr>
        )): null}
    </tbody>
  </Table>

    );
  }
}



function mapStateToProps(state) {
    return {
        taskListData: state.get('taskList')
    }
}

function mapDispathToProps(dispatch) {
    debugger;
    return {
        onGetTaskList: (evt) => dispatch(getTasksData()),
        onDeleteTodo: (evt) => dispatch(deleteTodo(evt))
    }
}


export default connect(mapStateToProps, mapDispathToProps)(TaskList);
