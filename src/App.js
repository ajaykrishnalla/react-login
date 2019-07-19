import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import DetailsState from "./context/details/DetailsState";
import AlertState from "./context/alert/AlertState";
import Details from "./components/Details";
import Alert from "./components/Alert";
import LoginArea from "./components/LoginArea";
import AuthState from "./context/auth/AuthState";
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  return (
    <AuthState>
      <DetailsState>
        <AlertState>
          <Router>
            <div>
              <Header />
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <Alert />
                    <Switch>
                      <PrivateRoute exact path="/" component={Form} />
                      <Route exact path="/login" component={LoginArea} />
                    </Switch>
                  </div>
                  <div className="col-sm-6">
                    <Details />
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </AlertState>
      </DetailsState>
    </AuthState>
  );
};

export default App;
