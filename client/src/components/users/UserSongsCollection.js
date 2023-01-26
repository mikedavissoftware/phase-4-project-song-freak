import { Item } from 'semantic-ui-react'

import SongCard from "../songs/SongCard"


export default function UserSongsCollection({user}) {


  const mappedSongs = user.songs.map(song => {
    return <SongCard key={song.id} song={song} />
  })

  return (
    <Item.Group >
      {mappedSongs}
    </Item.Group>
  )
}