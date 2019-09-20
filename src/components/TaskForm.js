import React,{ Component } from 'react'
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component{

   constructor(props){
      super(props);
      this.state = {
         id : '',
         name : '',
         status : false
      };
   }

   componentWillMount(){
      if (this.props.task && this.props.task.id !== null) {
         this.setState({
            id : this.props.task.id,
            name : this.props.task.name,
            status : this.props.task.status
         });
      }else{
         this.onClear();
      }
   }

   componentWillReceiveProps(nextProps){
      if (nextProps && nextProps.task) {
         this.setState({
            id : nextProps.task.id,
            name : nextProps.task.name,
            status : nextProps.task.status
         });
      }else {
         this.onClear(); 
      }
   }
   onCloseForm = () =>{
      this.props.onClose();
   }

   onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      if (name === 'status') {
         value = target.value === 'true' ? true : false;
      }
      this.setState({
         [name] : value
      });
   }
   onSave = (event) =>{
      event.preventDefault();
      this.props.onSaveTask(this.state);
      this.onClear();
      this.onCloseForm();
   }
   onClear = () =>{
      this.setState({
         name : '',
         status : false
      });
   }
   render(){
      if (!this.props.isDisplayForm) {
         return null;
      }
      return(
         <div className="panel panel-warning">
            <div className="panel-heading">
               <h3 className="panel-title">
                  {this.state.id ? 'Cập nhập công việc' : 'Thêm công việc'}
                  <span 
                     className="fa fa-times-circle mt30"
                     onClick={this.onCloseForm}
                  ></span>
               </h3>
            </div>
            <div className="panel-body">
               <form onSubmit={this.onSave}>
                  <div className="form-group">
                     <label>Tên :</label>
                     <input 
                        type="text" 
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                     />
                  </div>
                  <label>Trạng Thái :</label>
                  <select 
                     name="status" 
                     className="form-control"
                     value={this.state.status}
                     onChange={this.onChange}
                  >
                     <option value={true}>Kích Hoạt</option>
                     <option value={false}>Ẩn</option>
                  </select><br/>
                  <button type="submit" className="btn btn-primary">
                     Lưu
                  </button>&nbsp;
                  <button 
                     type="button" 
                     className="btn btn-primary"
                     onClick={this.onClear}
                  >
                     <span><i className="fas fa-trash-alt"></i>
                     </span>
                     Hủy bỏ
                  </button>
               </form>
            </div>
         </div>
      )
   }
}
const mapStateToProps = (state) =>{
   return {
      isDisplayForm : state.toggleForm,
      task : state.itemEdit // itemEdit lấy từ index.js trên store
   }
}
const mapDispatchToProps = (dispatch, props) =>{
   return{
      onSaveTask : (task) =>{
         dispatch(actions.saveTask(task));  
      },
      onClose : () =>{
         dispatch(actions.closeForm());
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
