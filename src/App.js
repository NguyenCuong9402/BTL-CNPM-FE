import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./containers/home/home";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import NotFound from "./containers/notFound/NotFound";
import Detail from "./containers/detail/detail"
import Profile from './containers/thongtin/thongtin';
import Changepass from "./containers/changepass/changpass"
import Cart from "./containers/cart/cart"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/index" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/changepass" component={Changepass} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/notfound" component={NotFound} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
