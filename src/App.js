import React from 'react';
import axios from 'axios';

import './App.css';

// boredapi.com
const App = () => {
  axios.get('http://www.boredapi.com/api/activity/').then(console.log).catch((e) => console.log('get went wrong'));
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
