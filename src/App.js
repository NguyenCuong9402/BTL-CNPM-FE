import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./containers/main/main";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import PlayGame from "./containers/playgame/playGame";
import NotFound from "./containers/notFound/NotFound";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/playgame" component={PlayGame} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
