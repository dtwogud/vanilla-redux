import React from "react";
import {connect} from "react-redux";
// import {actionCreators} from "../store"
import {remove} from "../store"
import {Link} from "react-router-dom";

function ToDo({text,onBtnClick, id}) {
  return(
  <li>
    <Link to={`/${id}`}>
      {text}
    </Link>
    <button onClick={onBtnClick}>Del</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps)
  return{
    onBtnClick: () => dispatch(remove(ownProps.id))
}
}

export default connect(null, mapDispatchToProps) (ToDo);