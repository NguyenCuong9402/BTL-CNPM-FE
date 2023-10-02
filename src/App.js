import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Main from "./containers/main/main";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import PlayGame from "./containers/playgame/playgame";
import NotFound from "./containers/notFound/NotFound";
import History from "./containers/history/history";
import Profile from "./containers/profile/profile";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/playgame" component={PlayGame} />
        <Route path="/history" component={History} />
        <Route path="/profile" component={Profile} />
        <Route path="/notfound" component={NotFound} />
        <Redirect exact from="/" to="/login" />
        {/* Điều hướng mặc định từ "/" sẽ chuyển hướng đến "/login" */}
      </Switch>
    </Router>
  );
};

export default App;
