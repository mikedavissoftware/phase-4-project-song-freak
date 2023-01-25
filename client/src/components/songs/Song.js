import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export default function Song() {

  const [song, setSong] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/songs/${id}`)
    .then(r => r.json())
    .then(songData => {
      setSong(songData)
    })
  }, [id])

  console.log(song)

  if (!song) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{song.title}</h2>
    </div>
  )
}