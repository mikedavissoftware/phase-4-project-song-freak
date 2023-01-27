import React, { useState } from "react";

export default function SignUp({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState(0)
  const [favGenre, setFavGenre] = useState("")
  const [favSongId, setFavSongId] = useState(1)
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
        title: "",
        artist: "",
        genre: "",
        link: "",
    })

    const genres = [
      "Rock",
      "Hip Hop",
      "Electronic",
      "Metal",
      "Pop",
      "Classical",
      "Country",
      "Experimental",
      "R&B",
      "Jazz"
    ]

    const genreOptions = genres.map((genre) => {
      return <option value={genre}>{genre}</option>
    })

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image,
        bio,
        age,
        fav_genre: favGenre,
        fav_song_id: favSongId
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



  return (
    <form onSubmit={handleSubmit}>
      
      <label><strong>Username:</strong></label>
      <input 
        type="text" 
        id="username" 
        placeholder="Enter username..." 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />

      <label><strong>Password:</strong></label>
      <input 
        type="password" 
        id="password" 
        placeholder="Enter password..." 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />

      <label><strong>Confirm Password:</strong></label>
      <input 
        type="password" 
        id="password_confirmation" 
        placeholder="Confirm password..." 
        value={passwordConfirmation} 
        onChange={(e) => setPasswordConfirmation(e.target.value)} 
      />

      <label><strong>Image:</strong></label>
      <input 
        type="text" 
        id="image" 
        placeholder="Enter profile image url..." 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />

      <label><strong>Bio:</strong></label>
      <input 
        type="text" 
        id="bio" 
        placeholder="Create bio..." 
        value={bio} 
        onChange={(e) => setBio(e.target.value)} 
      />

      <label><strong>Age:</strong></label>
      <input 
        type="number" 
        id="age" 
        placeholder="Enter age..." 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />

      <select id="genre" name="genre" onChange={(e) => setFavGenre(e.target.value)}>
        <option value={["unspecified"]} disabled selected>Select Genre...</option>
        {genreOptions}
      </select>

      <label><strong>Favorite Song:</strong></label>
      <input 
        type="number" 
        id="favSongId" 
        placeholder="Enter favorite song..." 
        value={favSongId} 
        onChange={(e) => setFavSongId(e.target.value)} 
      />

      <button className="ui button" type="submit">
        Create Account
      </button>
    </form>
  )
}