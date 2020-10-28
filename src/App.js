import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Registrieren";
import Login from "./components/Login";
import UserVerwalten from "./components/UserVerwalten";
import Ticketerfassen from "./components/Ticketerfassen";
import NotFoundPage from "./components/404";
import Verkaufsseite from "./components/Verkaufsseite";

function App() {
  const [user,setUser] = useState({});
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Register user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/user">
          <UserVerwalten user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/verkaufsseite">
          <Verkaufsseite/>
        </Route>
        <Route exact path="/ticketerfassen">
          <Ticketerfassen/>
        </Route>
        <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
