import { Item } from 'semantic-ui-react'

import UserSongCard from "./UserSongCard"


export default function UserSongsCollection({user}) {


  const mappedSongs = user.songs.map(song => {
    return <UserSongCard key={song.id} song={song} />
  })

  return (
    <>
    <hr width="80%"></hr>
    <h3>Songs Liked by {user.username}</h3>
    <Item.Group >
      {mappedSongs}
    </Item.Group>
    </>
  )
}