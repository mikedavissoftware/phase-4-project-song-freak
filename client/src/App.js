import React from "react"
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react"

// import logo from './logo.svg';
import './App.css';


import User from "./components/users/User"
import UsersCollection from "./components/users/UsersCollection"
import AddNewSong from "./components/songs/AddNewSong"
import Song from "./components/songs/Song"
import SongsCollection from "./components/songs/SongsCollection"
import MyAccount from "./components/account/MyAccount"
import Login from "./components/account/Login"
import NavBar from "./components/NavBar"
import EditSongForm from "./components/songs/EditSongForm"



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [allSongs, setAllSongs] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/songs")
    .then(r => r.json())
    .then(songsData => {
      setAllSongs(songsData)
      console.log(allSongs)
    })
  }, [])

  return (
    <div className="App">
      <h1>ayyy</h1>

      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      {!currentUser ? <Login onLogin={setCurrentUser} /> :
      <Switch>

        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/users">
          <UsersCollection allSongs={allSongs} />
        </Route>

        <Route path="/songs/new">
          <AddNewSong/>
        </Route>
        <Route path="/songs/:id">
          <Song />
        </Route>
        <Route path="/songs">
          <SongsCollection />
        </Route>

        <Route path="/me">
          <MyAccount currentUser={currentUser} />
        </Route>
        <Route path="/">
          {console.log(currentUser)}
          <Login onLogin={setCurrentUser} />
        </Route>

      </Switch>}

      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
