import { useEffect } from "react"
import { Link } from "react-router-dom"



export default function UserSongCard({song}) {

  const {title, artist, genre, link, id, users} = song

  const editedLink = `https://open.spotify.com/embed/track/${link.slice(31,53)}?utm_source=generator`

  // console.log(users)

  return (
    <>
    <br></br>
    {/* <span><h3>{title}<em> by {artist}</em></h3></span>
    <h4><em>{genre}</em> | {song.users.length} Likes</h4> */}

    <span><strong>{title}</strong><em> by {artist} | </em><Link to={`/songs/${id}`}>More Information</Link></span>
    <iframe
      // style="border-radius:12px"
      src={editedLink}
      width="90%"
      height="200"
      frameBorder=""
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    >
    </iframe>
    
    <hr width="30%"></hr>
    </>
  )
}