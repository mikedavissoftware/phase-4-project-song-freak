import {useState, useEffect} from "react"
import { Card } from "semantic-ui-react";
import UserCard from "./UserCard"


export default function UsersCollection() {

  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(usersData => {
      setUsers(usersData)
    })
  }, [])

  console.log(users)

  const filteredUsers = users.filter(user => {
    return (
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
      ||user.age.toLowerCase().includes(searchQuery.toLowerCase())
      //||user..toLowerCase().includes(searchQuery.toLowerCase())
      // ||Number(song.users.length).toString().includes(searchQuery)
    )
  })


  const mappedUsers = filteredUsers.map(user => {
    return <UserCard key={user.id} user={user} />
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

    <Card.Group itemsPerRow={3} >
      {mappedUsers}
    </Card.Group>
    </>
  )
}