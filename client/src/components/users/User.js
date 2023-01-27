import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Item, Card } from 'semantic-ui-react'

import UserSongsCollection from "./UserSongsCollection"


export default function User({allSongs}) {

  console.log(allSongs)

  const [user, setUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    fetch(`/users/${id}`)
    .then(r => r.json())
    .then(userData => {
      setUser(userData)
    })
  }, [id])

  if (!user) return <h2>Loading...</h2>;

  console.log(user.fav_song_id)

  // const favoriteSong = () => {
  //   if (allSongs) {
  //     return allSongs[user.fav_song_id - 1].title
  //   } else {
  //     return "Loading..."
  //   }
  // }



  if (user && allSongs) return (
    <>
    <div idName="user-detail">
      <h2>{user.username}</h2>
      <Item.Image size='medium' src={user.image} />
      <Item.Content>
        
        <Item.Meta>
          <em>Age:</em> {user.age} | <em>Favorite Genre:</em> {user.fav_genre} | <em>Favorite Song:</em> {allSongs[user.fav_song_id - 1].title}
          <br></br>
        </Item.Meta>
        <Item.Description>{user.bio}</Item.Description>
      </Item.Content>
    </div>
    <UserSongsCollection user={user} />
    </>
  )
}