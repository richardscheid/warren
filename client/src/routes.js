import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import Rescue from './pages/Rescue';
import Deposit from './pages/Deposit';
import Payment from './pages/Payment';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        {/* <Route path='/rescue' component={Rescue} />*/}
        <Route path='/payment' component={Payment} />
        <Route path='/Deposit' component={Deposit} />
      </Switch>
    </BrowserRouter>
  );
}
