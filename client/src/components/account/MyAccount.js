import React, { useState } from "react";

export default function MyAccount({currentUser}) {
  //console.log(currentUser)
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editPasswordConfirmation, setEditPasswordConfirmation] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editAge, setEditAge] = useState("")
  const [editFavGenre, setEditFavGenre] = useState("")
  const [editFavSongId, setEditFavSongId] = useState("")
  const [editErrors, setErrors] = useState([]);
  const [editAccount, setEditAccount] = useState([])

  // console.log(currentUser)
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const editAccount = {
      username: editUsername,
      password: editPassword,
      passwordConfirmation: editPasswordConfirmation,
      image: editImage,
      bio: editBio,
      age: editAge,
      fav_genre: editFavGenre,
      fav_song_id: editFavSongId
    };
    console.log(editAccount)

    fetch("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editAccount),
    })
    .then((r) => r.json())
    .then( (editAccount)=> console.log(editAccount))
      setEditAccount({
        username: "",
        password: "",
      })
  }



  return (
    <form onSubmit={handleSubmit}>

      <label><strong>Edit Username:</strong></label>
      <input
        type="text"
        id="username"
        placeholder={`Change from ${currentUser.username}`}
        value={editUsername.username}
        onChange={(e) => setEditUsername(e.target.value)}
      />

      <label><strong> Edit Password:</strong></label>
      <input
        type="password"
        id="password"
        placeholder="Enter new password..."
        value={editPassword.password}
        onChange={(e) => setEditPassword(e.target.value)}
      />

      <label><strong>Confirm Edited Password:</strong></label>
      <input
        type="password"
        id="password_confirmation"
        placeholder="Confirm new password..."
        value={editPasswordConfirmation.passwordConfirmation}
        onChange={(e) => setEditPasswordConfirmation(e.target.value)}
      />

      <label><strong>Edit Profile Image:</strong></label>
      <input
        type="text"
        id="image"
        placeholder="Enter new profile image URL..."
        value={editImage.image}
        onChange={(e) => setEditImage(e.target.value)}
      />

      <label><strong>Edit Bio:</strong></label>
      <input
        type="text"
        id="bio"
        placeholder="Enter new bio..."
        value={editBio.bio}
        onChange={(e) => setEditBio(e.target.value)}
      />

      <label><strong>Edit Age:</strong></label>
      <input
        type="number"
        id="age"
        placeholder="Enter new age..."
        value={editAge}
        onChange={(e) => setEditAge(e.target.value)}
      />

      <label><strong>Edit Favorite Genre:</strong></label>
      <input
        type="text"
        id="favGenre"
        placeholder="Enter new favorite genre..."
        value={editFavGenre}
        onChange={(e) => setEditFavGenre(e.target.value)}
      />

      <label><strong>Edit Favorite Song:</strong></label>
      <input
        type="number"
        id="favSongId"
        placeholder="Enter new favorite song..."
        value={editFavSongId}
        onChange={(e) => setEditFavSongId(e.target.value)}
      />

      <button className="ui button" type="submit">
        Update Account
      </button>
    </form>
  )
}