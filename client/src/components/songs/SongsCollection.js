import {useEffect} from "react"




export default function SongsCollection() {

  useEffect(() => {
    fetch("/songs")
    .then(r => r.json())
    .then(userData => {console.log(userData)})
  }, [])

  return (
    <div>
      <h1>These are the songs.</h1>
    </div>
  )
}