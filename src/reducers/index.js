import {combineReducers} from 'redux';
import tasks from './tasks';
import toggleForm from './toggleForm';
import itemEdit from './itemEdit';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
const myReducer = combineReducers({
	tasksed : tasks,  // : tasks là value lấy từ file tasks.js
	toggleForm : toggleForm,
	itemEdit : itemEdit,
	filterTable : filterTable,
	search : search,
	sort : sort
});
export default myReducer;