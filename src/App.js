import React,{ Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
// import {findIndex} from 'lodash';
import {connect} from 'react-redux';
import * as actions from './actions/index';
class App extends Component{
   onToggle = () => {
      var { itemEdit} = this.props;
      if (itemEdit && itemEdit.id !== '') {
         this.props.onOpenForm();
      }else{
         this.props.onToggleForm();
      }
      this.props.onClearTask({
         id : '',
         name : '',
         status : false
      });
   }
   onShow = () =>{
      this.setState({
         isDisplayForm : true
      });
   }

   onSort = (sortBy, sortValue) => {
      this.setState({
         sortBy : sortBy,
         sortValue : sortValue
      });
   }
   render(){
      var {isDisplayForm} =this.props;
      return(
         <div className="container">
            <div className="text-center">
               <h1>Quản Lý Công Việc</h1><hr/>
            </div>
            <div className="row">
               <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ' ' }>
                  <TaskForm/>
               </div>
               <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                  <button 
                     type="button" 
                     className="btn btn-primary" 
                     onClick={this.onToggle}>
                        <span className="fa fa-plus ml-5"> </span>Thêm công việc
                  </button>&nbsp;
                     <Control/>
                     <TaskList/>
               </div> 
            </div>
         </div>
      )
   }
}
const mapStateToProps = (state) =>{
   return{
      isDisplayForm : state.toggleForm,
      itemEdit : state.itemEdit
   };
};
const mapDispatchToProps = (dispatch, props) =>{
   return {
      onToggleForm : () =>{
         dispatch (actions.toggleForm());
      },
      onClearTask : (task) =>{
         dispatch(actions.editTask(task));  
      },
      onOpenForm : () =>{
         dispatch(actions.editForm());
      }
   };
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
