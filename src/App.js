import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import AddUser from "./components/AddUser/AddUser";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Products from "./components/Products/Products";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route exact path="/AddUser">
              <AddUser></AddUser>
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/update/:productId">
              <UpdateProduct></UpdateProduct>
            </Route>
            <Route path="/">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;