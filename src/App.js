import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Main from "./containers/main/main";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import NotFound from "./containers/notFound/NotFound";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/notfound" component={NotFound} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
