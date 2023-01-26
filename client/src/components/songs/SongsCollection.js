import {useEffect, useState} from "react"
import { Item } from 'semantic-ui-react'


import SongCard from "../songs/SongCard"


export default function SongsCollection() {

  const [songs, setSongs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch("/songs")
    .then(r => r.json())
    .then(songsData => {
      setSongs(songsData)
    })
  }, [])

  const filteredSongs = songs.filter(song => {
    return (
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
      ||song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      ||song.genre.toLowerCase().includes(searchQuery.toLowerCase())
      ||Number(song.users.length).toString().includes(searchQuery)
    )
  })

  const mappedSongs = filteredSongs.map(song => {
    return <SongCard key={song.id} song={song} />
  })

  return (
    <>
    
    <input
     type="text"
     id="song-search"
     placeholder="Search for song.."
     value={searchQuery}
     onChange={(e) => setSearchQuery(e.target.value)}
    >
   
    </input>
    <Item.Group >
      {mappedSongs}
    </Item.Group>
    </>
  )
}