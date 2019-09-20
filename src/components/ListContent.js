import React,{ Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class ListContent extends Component{
   onUpdata = () => {
      this.props.onUpdataStatus(this.props.list.id);
   }
   onDelete = () =>{
      this.props.onDeleteTask(this.props.list.id);
      this.props.onClose();
   }
   onRepair = () =>{
      this.props.onOpenForm();
      this.props.onEitTask(this.props.list);
   }
   render(){
      var {list, index} = this.props;
      return(
         <tr>
            <td>{index + 1}</td>
            <td>{list.name}</td>
            <td className="text-center">
               <span className={list.status === true ? "label label-danger" : 
                           "label label-success"} 
                           onClick={this.onUpdata}>
                  {list.status === true ? "Kích hoạt" : "Ẩn"}
               </span>
            </td>
            <td className="text-center">
               <button 
                  type="button" 
                  className="btn btn-warning"
                  onClick={this.onRepair}
               >
                  <span>Sửa</span>
               </button>
               &nbsp;
               <button 
                  type="button" 
                  className="btn btn-denger"
                  onClick={this.onDelete}
               >
                  <span>Xóa</span>
               </button>  
            </td>
         </tr>
      )
   }
}
const mapStateToProps = state =>{
   return{

   };
}
const mapDispatchToProps = (dispatch, props) =>{
   return{
      onUpdataStatus : (id) =>{
         dispatch(actions.updateStatus(id));
      },
      onDeleteTask : (id) =>{
         dispatch(actions.deleteTask(id));
      },
      onClose : () =>{
         dispatch(actions.closeForm());
      },
      onOpenForm : () =>{
         dispatch(actions.editForm());
      },
      onEitTask : (task) =>{
         dispatch(actions.editTask(task));
      }
   };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListContent);
