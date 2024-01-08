
import TopBar from "../src/Components/TopBar/TopBar";
import Register from "./pages/Register/Register";
import Single from "./pages/Single/Single";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css"


function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
