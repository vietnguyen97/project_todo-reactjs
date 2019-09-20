import * as types from './../constants/ActionType';
export const listt = () =>{
	return{
		type : types.LIST        //types lấy từ actiontype.js 
	}
}
export const saveTask = (task) =>{
	return {
		type : types.SAVE_TASK,
		task : task
	}
}
export const toggleForm = () =>{
	return {
		type : types.TOGGLE_FORM,

	}
}
export const editForm = () =>{
	return {
		type : types.EDIT_FORM,
	}
}
export const closeForm = () =>{
	return {
		type : types.CLOSE_FORM,
		
	}
}
export const updateStatus = (id) =>{
	return {
		type : types.UPDATE_STATUS,
		id : id 
	}
}
export const deleteTask = (id) =>{
	return{
		type : types.DELETE_TASK,
		id : id
	}
}
export const editTask = (task) =>{
	return{
		type : types.EDIT_TASK,
		task : task 
	}
}
export const filterTask = (filter) =>{
	return{
		type : types.FILTER_TABLE,
		filter : filter  // -> filterName , filterStatus
	}
}
export const searchTask = (key) =>{
	return{
		type : types.SEARCH,
		key : key 
	}
}
export const sortTask = (sort) =>{
	return{
		type : types.SORT,
		sort : sort 
	}
}