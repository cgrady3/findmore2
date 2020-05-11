import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Profile from "./pages/profile";
import NoMatch from "./pages/noMatch";
import Login from "./pages/login";
import Register from "./pages/register";
import FAQs from "./pages/faq"
import isAuthenticated from "../src/config/passport-config";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} isAuthenticated/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} isAuthenticated/>
          <Route exact path="/faqs" component={FAQs} isAuthenticated/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
