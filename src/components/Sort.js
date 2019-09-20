import React,{ Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class Sort extends Component{

   componentWillReceiveProps(nextProps){
   }

   onClick = (sortBy, sortValue) =>{
      this.props.onSort({
         by : sortBy,
         value : sortValue
      });
   }
   render(){
      return(
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
               <button 
                  type="button" 
                  aria-haspopup="true"
                  aria-expanded="true"
                  className="btn btn-primary dropdown-toggle"
                  id="dropdownMenu1"
                  data-toggle="dropdown">
                     Sắp xếp<span className="caret"></span>
               </button>
               <ul className="dropdown-menu"aria-labelledby="dropdownMenu1">
                  <li onClick={ () => this.onClick('name', 1) }>
                     <a 
                        href="#top"
                        role="button" 
                        className={(this.props.sort.by === 'name' &&
                           this.props.sort.value === 1) ? 'sort_selected' : ''}
                     >
                        Tên:A-Z
                     </a>
                  </li>
                  <li onClick={ () => this.onClick('name', -1) }>
                     <a
                        href="#top" 
                        role="button" 
                        className={(this.props.sort.by === 'name' &&
                           this.props.sort.value === -1) ? 'sort_selected' : ''}
                     >
                        <span>
                           Tên:Z-A
                        </span>
                     </a>
                  </li>
                  <li onClick={ () => this.onClick('status', 1) }>
                     <a 
                        href="#top"
                        role="button" 
                        className={(this.props.sort.by === 'status' &&
                           this.props.sort.value === 1) ? 'sort_selected' : ''}
                     >
                        Trạng thái kích hoạt
                     </a>
                  </li>
                  <li onClick={ () => this.onClick('status', -1) }>
                     <a 
                        href="#top"
                        role="button" 
                        className={(this.props.sort.by === 'status' &&
                           this.props.sort.value === -1) ? 'sort_selected' : ''}
                     >
                        Trang thái ẩn
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}
const mapStateToProps = (state) =>{
   return {
      sort : state.sort 
   }
};
const mapDispatchToProps = (dispatch, props) =>{
   return{
      onSort : (sort) =>{
         dispatch(actions.sortTask(sort));
      }
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
