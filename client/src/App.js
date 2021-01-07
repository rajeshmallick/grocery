import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Navbars from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import Alert from "./components/alert/Alert";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className='container-fluid main'>
        <Router>
          <Navbars />
          <Alert />
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/product' component={Product} />
            <PrivateRoute exact path='/cart' component={Cart} />
            <Route path='*' component={Login} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
