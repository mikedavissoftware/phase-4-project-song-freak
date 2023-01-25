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

  const filteredGamers = gamers.filter(gamer => {
    return (
      gamer.name.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || Number(gamer.age).toString().includes(searchQuery)
      || gamer.origin.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || gamer.gender.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || gamer.favorite.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || gamer.bio.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const mappedSongs = songs.map(song => {
    return <SongCard key={song.id} song={song} />
  })

  return (
    <>
    <input></input>
    <Item.Group >
      {mappedSongs}
    </Item.Group>
    </>
  )
}