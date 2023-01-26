import {useState, useEffect} from "react"
import { Card } from "semantic-ui-react";
import UserCard from "../users/UserCard"


export default function SongUsersCollection({users}) {

  console.log(users)

  const mappedUsers = users.map(user => {
    return <UserCard key={user.id} user={user} />
  })

  return (
    <>
    <Card.Group itemsPerRow={5} >
      {mappedUsers}
    </Card.Group>
    </>
  )
}