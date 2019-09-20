import * as types from './../constants/ActionType';
	var s4 = () => {
      return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
   }
    var generateID = () => {
      return s4() + s4() + '-' +s4() + '-' + s4() + '-' + s4();
   }
	var findIndex = (value, id) =>{
		var result = -1;
		value.forEach((elment, index) =>{
			if (elment.id === id) {
				result = index;
			}
		});
		return result;
	}
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var myReducer = (state = initialState, action) =>{
	var id = '';
	var index = -1;
	switch(action.type){
		case types.LIST : 
			return state;
		case types.SAVE_TASK :
			var newTask = {
				id : action.task.id,
				name : action.task.name,
				status : (action.task.status === 'true' || 
					action.task.status === true) ? true : false
			};
			if (!newTask.id) {
				newTask.id = generateID();
				state.push(newTask);
			}
			else {
				index = findIndex(state, newTask.id);
				state[index] = newTask;
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS :
			id = action.id;
			index = findIndex(state, id);
			state[index] = {
				 ...state[index],
				 status : ! state[index].status
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK :
			id = action.id;
			index = findIndex(state, id);
			state.splice(index, 1);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		default: return state;
	}
};
export default myReducer;