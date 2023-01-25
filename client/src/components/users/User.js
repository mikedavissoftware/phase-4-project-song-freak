import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Item, Card } from 'semantic-ui-react'



export default function User() {

  const [user, setUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    fetch(`/users/${id}`)
    .then(r => r.json())
    .then(userData => {
      setUser(userData)
    })
  }, [id])

  console.log(user)

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`/users`)
    .then(r => r.json())
    .then(usersData => {
      setUsers(usersData)
    })
  }, [])

  // const userSongs = user.songs.map((song) => {
  //   return (
  //     <Item>
  //       <Item.Image size='tiny' src={song.game.image} />
  //       <Item.Content>
  //         <Item.Header><strong>"{song.title}"</strong></Item.Header>
  //         <Item.Meta><em>{song.title} | {song.rating}/10</em></Item.Meta>
  //         <Item.Description>"{song.text}"</Item.Description>
  //       </Item.Content>
  //     </Item>
  //   )
  // })

  // const otherUsers = users.filter((otherUser) => {
  //   if (otherUser.id != User.id) return otherUser
  // })
  // const otherUserCards = otherUsers.map((otherUser) => {
  //   return (
  //     <Card 
  //       image={otherUser.image}
  //       header={<Link to={`/users/${otherUser.id}`}>{otherUser.name}</Link>}
  //     />
  //   )
  // })

  return (
    <>
      {/* <div idName="user-detail">
        <Item.Image size='medium' src={user.image} />
        <Item.Content>
          <Item.Header><strong>{user.name}</strong></Item.Header>
          <h2>{user.name}</h2>
          <Item.Meta>
            <em>Age{user.age} | {user.fav_genre} | {user.fav_song_id}</em>
            <br></br>
            <em><strong>Favorite Game: </strong></em>
          </Item.Meta>
          <Item.Description>{user.bio}</Item.Description>
        </Item.Content>
      </div>
      <hr></hr>
      <h2>Songs from this user:</h2>
      <div idName="user-songs">
        {userSongs}
      </div>

      <hr></hr>
      
      <Card.Group itemsPerRow={5} >
        {otherUserCards}
      </Card.Group> */}
    </>
  )
}