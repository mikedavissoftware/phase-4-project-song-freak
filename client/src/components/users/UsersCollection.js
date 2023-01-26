import {useState, useEffect} from "react"
import { Card } from "semantic-ui-react";
import UserCard from "./UserCard"


export default function UsersCollection({allSongs}) {

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
      || Number(user.age).toString().includes(searchQuery)
      || user.fav_genre.toLowerCase().includes(searchQuery.toLowerCase())
      || user.fav_song.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })


  const mappedUsers = filteredUsers.map(user => {
    return <UserCard key={user.id} user={user} allSongs={allSongs} />
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