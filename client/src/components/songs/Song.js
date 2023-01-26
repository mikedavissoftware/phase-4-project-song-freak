import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import EditSongForm from "./EditSongForm"
import SongUsersCollection from "./SongUsersCollection"


export default function Song() {

  const [song, setSong] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/songs/${id}`)
    .then(r => r.json())
    .then(songData => {
      setSong(songData)
    })
  }, [id])

  // console.log(song)

  if (!song) return <h2>Loading...</h2>;

  const editedLink = `https://open.spotify.com/embed/track/${song.link.slice(31,53)}?utm_source=generator`

  if (song) return (
    <div>
      <h2>{song.title}</h2>
      <h3><em>by {song.artist}</em></h3>
      <h4>{song.users.length} Likes</h4>
      <iframe
        // style="border-radius:12px"
        src={editedLink}
        width="50%"
        height="352"
        frameBorder=""
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
      </iframe>
      <EditSongForm song={song}/>
      <SongUsersCollection users={song.users} />
    </div>
  )
}