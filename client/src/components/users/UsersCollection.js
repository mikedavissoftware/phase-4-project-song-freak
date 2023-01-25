import {useEffect} from "react"



export default function UsersCollection() {

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(userData => {console.log(userData)})
  }, [])

  return (
    <div>
      <h1>These are the users.</h1>
    </div>
  )
}