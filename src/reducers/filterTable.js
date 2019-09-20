import * as types from './../constants/ActionType';

var initialState = {
	name : '',
	status : 0
};
var myReducer = (state = initialState, action) =>{
	switch(action.type){
		case types.FILTER_TABLE :
			return {
				name : action.filter.name,
				status : parseInt(action.filter.status)
			};
		default : 
			return state;
	}
};
export default myReducer;