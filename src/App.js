import React from "react";

import "./App.css";
import { connect } from "react-redux";
import { getActivity } from "./redux/actions/creators";
import CurrentActivityCard from "./components/Activity/CurrentActivityCard";
import PreviousActivities from './components/Activity/PreviousActivities';

import './scss/index.scss';

// boredapi.com
const App = props => {
  const {current, previous} = props;
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
      {!current && <p>No Activities, click the button above</p>}
      {!!current && <CurrentActivityCard />}
      {!previous.length && <p>No previous activities, consider clicking the button above</p>}
      {!!previous.length && <PreviousActivities />}
    </div>
  );
};

const mapStateToProps = state => (state)

export default connect(mapStateToProps, { getActivity })(App);
