import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Main from "./containers/main/main";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import PlayGame from "./containers/playgame/playgame";
import NotFound from "./containers/notFound/NotFound";
import History from "./containers/history/history";
import Profile from "./containers/profile/profile";
import Changepass from "./containers/changepass/changpass";
import LoginAdmin from './containers/admin/login/loginAdmin';
import AdminMain from './containers/admin/main/Adminmain';
import Fix from './containers/admin/fix/fix';

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
        <Route path="/admin/login" component={LoginAdmin} />
        <Route path="/admin/main" component={AdminMain} />
        <Route path="/changepass" component={Changepass} />
        <Route path="/admin/fix" component={Fix} />

        <Route path="/notfound" component={NotFound} />
        <Redirect exact from="/" to="/login" />
        <Redirect exact from="/admin" to="/admin/login" />
        {/* Điều hướng mặc định từ "/" sẽ chuyển hướng đến "/login" */}
      </Switch>
    </Router>
  );
};

export default App;
