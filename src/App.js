import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav/Nav";
import LoginPage from "./pages/LoginPage"
import CreateProject from "./components/CreateProjectForm/CreateProject"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id">
          <ProjectPage />
          </Route>
          <Route path="/projects/">
          <CreateProject />
          </Route>
          <Route path="/profile/me/">
          <ProfilePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
          <HomePage />
          </Route>
          {/* <Route path="/pledge">
          <Pledge />
          </Route> */}
        </Switch>

      </div>
    </Router>
  );
}




export default App;