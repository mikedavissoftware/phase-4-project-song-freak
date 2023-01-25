import {useEffect, useState} from "react"
import { Item } from 'semantic-ui-react'


import SongCard from "../songs/SongCard"


export default function SongsCollection() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("/songs")
    .then(r => r.json())
    .then(songsData => {
      setSongs(songsData)
    })
  }, [])

  const mappedSongs = songs.map(song => {
    return <SongCard key={song.id} song={song} />
  })

  return (
    <Item.Group >
      {mappedSongs}
    </Item.Group>
  )
}