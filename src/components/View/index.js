import React from "react";
import { connect } from "react-redux";

const View = (props) => {
  console.log(props);
  return <div></div>;
};

const mapStateToProps = ({ current }) => {
  return {
    current
  };
};

export default connect(mapStateToProps)(View);
