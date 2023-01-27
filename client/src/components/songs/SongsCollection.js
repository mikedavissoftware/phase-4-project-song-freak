import {useEffect, useState} from "react"
import { Item } from 'semantic-ui-react'
import AddNewSong from "./AddNewSong"


import SongCard from "../songs/SongCard"


export default function SongsCollection({currentUser}) {

  console.log(currentUser.songs)
  const [songs, setSongs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [userSongIds, setUserSongIds] = useState(
    currentUser.songs.map((song) => {
    return song.id
    })
  )

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
    return <SongCard key={song.id} song={song} currentUser={currentUser} userSongIds={userSongIds} setUserSongIds={setUserSongIds} />
  })

  // function handleAddNewSong(newSong) {
  //   setSongs([...songs, newSong])
  // }

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
    {/* <AddNewSong onAddNewSong={handleAddNewSong}/> */}
    <Item.Group itemsPerRow={2}>
      {mappedSongs}
    </Item.Group>

    </>
    
  )
}