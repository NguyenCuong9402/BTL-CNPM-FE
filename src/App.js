import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./containers/home/home";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import NotFound from "./containers/notFound/NotFound";
import Detail from "./containers/detail/detail"
import Profile from './containers/thongtin/thongtin';
import Cart from "./containers/cart/cart"
import LoginAdmin from "./containers/admin/login/loginAdmin"
import Main from "./containers/admin/main/main"
import Add_item from "./containers/admin/add_product/add_item"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/index" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin/main" component={Main} />
        <Route path="/admin/add" component={Add_item} />

        <Route path="/admin/login" component={LoginAdmin} />
        <Route path="/notfound" component={NotFound} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
