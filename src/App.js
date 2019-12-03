import React from "react";

import "./App.css";
import { connect } from "react-redux";
import { getActivity } from "./redux/actions/creators";
import ActivityCard from "./components/Activity/ActivityCard";

import './scss/index.scss';

// boredapi.com
const App = props => {
  const {current} = props;
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          props.getActivity();
        }}
      >
        Get Activity
      </button>
      {!!current && <ActivityCard />}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getActivity })(App);
