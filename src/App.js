import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./containers/main/main";
import Login from "./containers/login/Login";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
