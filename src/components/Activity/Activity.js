import React from 'react';
import {connect} from 'react-redux'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const generateIcon = (type = '', value = 0) => {
  switch(type) {
    case 'money':
      return <AttachMoneyIcon fontSize='small'/>
    case 'people':
      return <PersonRoundedIcon fontSize='small'/>
    default: 
    return;
  }
}

const generateIconType = (type) => (number = 0) => {
  const icons = [];
  for (let count = 0; count < number; count++) {
    const icon = generateIcon(type)
    icons.push(icon);
  }

  return icons;
}

const generateIcons = (type='', value = 0) => {
  
  let amount;
  switch (type) {
    case 'money':
      const makeDollarSigns = generateIconType('money');
      amount = Math.floor(value * 100 / 25) + 1;
      return makeDollarSigns(amount);
    case 'people':
      const makePeopleIcons = generateIconType('people')
      return makePeopleIcons(value)
    default:
    return;
  }

}

const Activity = ({current, className = 'Activity'}) => {
  const {activity, key, link, participants, price, type} = current;
  return (
    <section className={className} eid={key}>
      <header>
        <h4>Try this:</h4>
        <p>{activity}</p>
      </header>
      <section>
        <p>Particpants: {generateIcons('people', participants)}</p>
        <p>Price: {generateIcons('money', price)}</p>
        <p>Type: <span>{type}</span></p>

      </section>
    </section>
  )
}
export default Activity
