import {useState} from "react"


export default function AddNewSong() {
  const [formData, setFormData] = useState({
      title: "",
      artist: "",
      genre: "",
      link: "",
  })

  function handleSubmit(e) {
    e.preventDefault();

    const newSong = {
      title: formData.title,
      artist: formData.artist,
      genre: formData.genre,
      link: formData.link,
    };
      
    fetch("/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    })
    .then(
      setFormData({
        title: "",
        artist: "",
        genre: "",
        link: "",
      })
    )
  }

  function handleChange(event) {
      console.log(event.target.value);
      setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="new-shoe-form">
      <h2>Post Your Favorite Songs</h2>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Song Title" onChange={handleChange} value={formData.title} />
        <input type="text" name="artist" placeholder="Artist Name" onChange={handleChange} value={formData.artist} />
        <input type="text" name="genre" placeholder="Genre" onChange={handleChange} value={formData.genre} />
        <input type="text" name="link" placeholder="Spotify Song Link" onChange={handleChange} value={formData.link} />
        <button type="submit">Post Song</button>
      </form>

    </div>
  );
}