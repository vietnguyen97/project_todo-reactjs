import React,{ Component } from 'react';
import ListContent from './ListContent';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskList extends Component{
   constructor(props){
      super(props);
      this.state = {
         filterName : '',
         filterStatus : 0 // all : -1, active : 1, deactive : 0
      }
   }
   onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var filter = {
         name : name === 'filterName' ? value : this.state.filterName,
         status : name === 'filterStatus' ? value : this.state.filterStatus
      };
      this.props.onFilterTable(filter);
      this.setState({
         [name] : value
      });
   }
   render(){
      var {tasks, filterTable, keyword, sort} = this.props;
      if (filterTable.name) {
         tasks = tasks.filter((task) =>{
            return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) 
               !== -1;
         });
      }
      tasks = tasks.filter((task) =>{
         if (filterTable.status === 0) {
            return tasks
         }else{
            return task.status === (filterTable.status === 1 ? true : false);
         }
      });
      
      if(keyword){
         tasks = tasks.filter((result) =>{
            return result.name.toLowerCase().indexOf(keyword) !== -1
         });
      }
      if (sort.by === 'name') {
         tasks.sort((a, b) =>{
            if (a.name > b.name) {return -sort.value;}
            else if (a.name < b.name) {return sort.value;}
            else  {return 0;}
         });
      }else{
         tasks.sort((a, b) =>{
            if (a.status > b.status) {return -sort.value;}
            else if (a.status < b.status) {return sort.value;}
            else  {return 0;}
         });
      }
      
      var el = tasks.map((value,index) => {
         return( <ListContent 
                  key={value.id} 
                  index={index} 
                  list={value}
               />
            )
      });

      return(
         <table className="table table-bordered table-hover mt-15">
            <thead>
               <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng thái</th>
                  <th className="text-center">Hành động</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td></td>
                  <td>
                     <input 
                        type="text" 
                        name="filterName" 
                        className="form-control"
                        value={this.state.filterName}
                        onChange = {this.onChange}
                     />
                  </td>
                  <td>
                     <select 
                        name="filterStatus" 
                        className="form-control"
                        value={this.state.filterStatus}
                        onChange = {this.onChange}
                     >
                        <option value={0}>Tất cả</option>
                        <option value={1}>Kích hoạt</option>
                        <option value={-1}>Ẩn</option>
                     </select>
                  </td>
                  <td></td>
               </tr>
               {el}
            </tbody>
         </table>
      )
   }
}
const mapStateToProps = (state) =>{
   return {
      tasks : state.tasksed,
      filterTable : state.filterTable,
      keyword : state.search,
      sort : state.sort 
   }
};
const mapDispatchToProps = (dispatch, props) =>{
   return{
      onFilterTable : (filter) =>{
         dispatch(actions.filterTask(filter));
      }
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
