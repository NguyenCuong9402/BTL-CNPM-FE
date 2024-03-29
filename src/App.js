import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./containers/home/home";
import DonHang from "./containers/don_hang/don_hang"
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import NotFound from "./containers/notFound/NotFound";
import Detail from "./containers/detail/detail"
import Profile from './containers/thongtin/thongtin';
import Cart from "./containers/cart/cart"
import LoginAdmin from "./containers/admin/login/loginAdmin"
import Main from "./containers/admin/main/main"
import Add_item from "./containers/admin/add_product/add_item"
import Fix_item from "./containers/admin/fix_product/fix_item"
import Khach_Hang from "./containers/admin/khach_hang/khach_hang"
import Nhan_Vien from "./containers/admin/nhan_vien/nhan_vien"

import HoaDon from "./containers/admin/hoa_don/hoa_don"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/index" component={Home} />

        <Route path="/register" component={Register} />
        <Route path="/order" component={DonHang} />

        <Route path="/detail/:id" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin/main" component={Main} />
        <Route path="/admin/add" component={Add_item} />
        <Route path="/admin/fix/:id" component={Fix_item} />
        <Route path="/admin/order" component={HoaDon} />
        <Route path="/admin/user" component={Khach_Hang} />
        <Route path="/admin/nhan_vien" component={Nhan_Vien} />

        <Route path="/admin/login" component={LoginAdmin} />
        <Route path="/notfound" component={NotFound} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
