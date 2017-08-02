import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getTasksData} from "./taskListAction";


export class TaskList extends React.Component { 
  componentWillMount() {
     this.props.onGetTaskList();
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
        onGetTaskList: (evt) => dispatch(getTasksData())
    }
}


export default connect(mapStateToProps, mapDispathToProps)(TaskList);
