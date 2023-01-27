import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Icon, Label} from "semantic-ui-react"



export default function SongCard({song, currentUser}) {

  const {title, artist, genre, link, users} = song

  const editedLink = `https://open.spotify.com/embed/track/${link.slice(31,53)}?utm_source=generator`

  const songIds = currentUser.songs.map((song) => {
    return song.id
  })
  console.log(songIds)

  console.log(currentUser.likes)

  function handleLikeCreate() {
    fetch(`/likes`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({user_id: currentUser.id, song_id: song.id})
    })
    console.log(currentUser)
    console.log(currentUser.songs.length)
  }

  // function handleLikeDestroy() {
  //   fetch(`/likes/${id}`, {
  //     method: "DELETE"
  //   })
  //   console.log(currentUser)
  //   console.log(currentUser.songs.length)
  // }
  
  

  return (
    <>
    <span><h3>{title}<em> by {artist}</em></h3></span>

    <div>
      <Button as='div' labelPosition='right'>
        <Button icon onClick={handleLikeCreate}>
          {(songIds.includes(song.id)) ?
            <Icon name='heart' />
             :
            <Icon name='heart outline' />
          }
        </Button>
        <Label as='a' basic pointing='left'>
          {song.users.length} Likes
        </Label>
      </Button>

    </div>

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

    <Link to={`/songs/${song.id}`}>More Information</Link>
    
    <hr width="80%"></hr>
    </>
  )
}