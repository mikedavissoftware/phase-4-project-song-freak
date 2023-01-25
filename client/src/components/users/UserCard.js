import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react"


export default function UserCard({user}) {

  const {id, name, age, bio, image, fav_genre, fav_song_id} = user

  return (
    <Card 
      image={image}
      header={name}
      meta={`${age} | ${fav_genre} | ${fav_song_id}`}
      
      description={`${bio.substring(0,300)}...`}

      extra={<Link to={`/users/${id}`}>More Information</Link>}
    />
  )
}