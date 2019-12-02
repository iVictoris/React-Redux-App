import React from "react";

import "./App.css";
import View from "./components/View";
import { connect } from "react-redux";
import {getActivity} from './redux/actions/creators'
  
// boredapi.com
const App = (props) => {
  return (
    <div className="App">
      <View />
      <button type='button'
        onClick={() => {
          props.getActivity()
        }}
      >Get Activity</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps, {getActivity})(App);
