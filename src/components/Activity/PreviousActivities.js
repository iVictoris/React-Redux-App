import React from "react";
import { connect } from "react-redux";

import Activity from "./Activity";
import Card from "../hoc/Card";

const PreviousActivities = ({ previous, className = 'PreviousActivities' }) => {
  const prevActivities = previous.map(activity => {
    const { key } = activity;
    return (
      <Card key={key}>
        <Activity current={activity} />
      </Card>
    );
  });

  return (
  <section>
    <section className={className}>
    <h2>Previous Activities:</h2>
      {prevActivities}</section>
    </section>
    );
};

const mapStateToProps = ({previous}) => ({
  previous
})

export default connect(mapStateToProps, {})(PreviousActivities);
