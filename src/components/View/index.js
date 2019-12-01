import React from "react";
import { connect } from "react-redux";

const View = props => {
  return <div></div>;
};

const mapStateToProps = ({
  isFetching,
  errors,
  current = {},
  previous = []
}) => {
  return { previous, current, isFetching, errors };
};

export default connect(mapStateToProps)(View);
