import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react"


export default function UserCard({user, allSongs}) {

  const {id, name, age, bio, image, fav_genre, fav_song_id} = user

  if (!allSongs) return <h4>Loading...</h4>;

  // console.log(allSongs[fav_song_id].title)

  return (
    <Card 
      image={image}
      header={name}
      meta={`${age} | ${fav_genre} | ${allSongs[fav_song_id - 1].title}`}
      
      description={`${bio.substring(0,300)}...`}

      extra={<Link to={`/users/${id}`}>More Information</Link>}
    />
  )
}