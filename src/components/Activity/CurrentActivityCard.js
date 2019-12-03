import React from 'react'
import {connect} from 'react-redux';

import Card from '../hoc/Card';
import Activity from './Activity';

const ActivityCard = ({current, className = 'Activity Card'}) => {
  return (
    <Card className={className}>
      <Activity current={current}/>
    </Card>
  )
}

const mapStateToProps = ({current}) => ({
  current
})

export default connect(mapStateToProps, null)(ActivityCard)
