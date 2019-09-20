import * as types from './../constants/ActionType';

var initialState = '';
var myReducer = (state = initialState, action) =>{
	switch(action.type){
		case types.SEARCH :
			return action.key;
		default : 
			return state;
	}
};
export default myReducer;