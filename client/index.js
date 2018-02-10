import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Pronto from './Pronto';

render((
  <Router>
    <div>
    <Route exact path="/" component={Pronto}/>
    </div>
  </Router>
), document.getElementById('app'));
