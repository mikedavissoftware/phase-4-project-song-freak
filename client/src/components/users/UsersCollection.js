import {useState, useEffect} from "react"
import { Card } from "semantic-ui-react";
import UserCard from "./UserCard"


export default function UsersCollection() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(userData => {
      setUsers(userData)
    })
  }, [])

  console.log(users)


  const mappedUsers = users.map(user => {
    return <UserCard key={user.id} user={user} />
  })

  return (
    <Card.Group itemsPerRow={3} >
      {mappedUsers}
    </Card.Group>
  )
}