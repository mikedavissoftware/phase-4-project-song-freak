import React from "react"
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react"

// import logo from './logo.svg';
import './App.css';

import CreateAccount from "./components/account/CreateAccount"
import User from "./components/users/User"
import UsersCollection from "./components/users/UsersCollection"
import AddNewSong from "./components/songs/AddNewSong"
import Song from "./components/songs/Song"
import SongsCollection from "./components/songs/SongsCollection"
import MyAccount from "./components/account/MyAccount"
import Login from "./components/account/Login"
import NavBar from "./components/NavBar"


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <h1>ayyy</h1>
      
      <NavBar />

      <Switch>

        <Route path="/users/create">
          <CreateAccount />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/users">
          <UsersCollection />
        </Route>

        <Route path="/songs/new">
          <AddNewSong />
        </Route>
        <Route path="/songs/:id">
          <Song />
        </Route>
        <Route path="/songs">
          <SongsCollection />
        </Route>

        <Route path="/me">
          <MyAccount />
        </Route>
        <Route path="/">
          <Login />
        </Route>

      </Switch>

      <NavBar />
    </div>
  );
}

export default App;
