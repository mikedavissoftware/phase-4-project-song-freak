import { Link } from "react-router-dom"



export default function SongCard({song}) {

  const {title, artist, genre, link, id} = song

  const editedLink = `https://open.spotify.com/embed/track/${link.slice(31,53)}?utm_source=generator`

  console.log(song.users)

  return (
    <>
    <h3>{title}</h3>
    <h4>{artist} | <em>{genre}</em> | Liked by {} users</h4>

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

    <Link to={`${id}`}>More Information</Link>
    
    <hr width="80%"></hr>
    </>
  )
}