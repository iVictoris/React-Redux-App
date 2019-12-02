import React from "react";

import "./App.css";
import View from "./components/View";
import { connect } from "react-redux";
import { getActivity } from "./redux/actions/creators";
import Activity from "./components/Activity/Activity";

import './less/index.less';

// boredapi.com
const App = props => {
  const {current} = props;
  return (
    <div className="App">
      <View />
      <button
        type="button"
        onClick={() => {
          props.getActivity();
        }}
      >
        Get Activity
      </button>

      {!!current && <Activity />}
    </div>
  );
};

const mapStateToProps = ({current}) => {
  return { ...current };
};

export default connect(mapStateToProps, { getActivity })(App);
