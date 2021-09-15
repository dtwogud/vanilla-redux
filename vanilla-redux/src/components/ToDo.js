import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store"

function ToDo({text,onBtnClick}) {
  return(
  <li>
    {text} <button onClick={onBtnClick}>Del</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps)
  return{
    onBtnClick: () => dispatch(actionCreators.delTodo(ownProps.id))
}
}

export default connect(null, mapDispatchToProps) (ToDo);