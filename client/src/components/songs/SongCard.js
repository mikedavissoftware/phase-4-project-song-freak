import { useEffect } from "react"
import { Link } from "react-router-dom"



export default function SongCard({song}) {

  console.log(song)
  const {title, artist, genre, link, id, users} = song

  const editedLink = `https://open.spotify.com/embed/track/${link.slice(31,53)}?utm_source=generator`

  // console.log(users)

  return (
    <>
    <span><h3>{title}<em> by {artist}</em></h3></span>
    <h4><em>{genre}</em> | {} Likes</h4>

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

    <br></br>

    <Link to={`/songs/${id}`}>More Information</Link>
    
    <hr width="80%"></hr>
    </>
  )
}