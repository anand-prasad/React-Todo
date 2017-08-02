import { createSelector } from 'reselect'

//const taskListSelector = (state) => state.get('taskList')


const taskListSelector = () => createSelector(
  (state) => state.get('taskList')
);

export {
taskListSelector
};
