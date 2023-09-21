import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./containers/main/main";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import NotFound from "./containers/notFound/NotFound";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login" component={Register} />
        <Route path="/main" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
