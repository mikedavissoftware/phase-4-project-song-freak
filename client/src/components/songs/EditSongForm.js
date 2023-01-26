import {useEffect, useState} from "react"
// import {useParams} from "react-router-dom"

export default function EditSongForm({song}){
    const [editTitle, setEditTitle] = useState("");
    const [editArtist, setEditArtist] = useState("");
    const [editGenre, setEditGenre] = useState("");
    const [editLink, setEditLink] = useState("");
    
    const [editSong, setEditSong] = useState([])

    // console.log(song)
    function handleSubmit(e) {
        e.preventDefault();
        

    const editSong = {
            title: editTitle,
            artist: editArtist,
            genre: editGenre,
            link: editLink
        };

        // const {id} = useParams()
        console.log(editSong)
        
        fetch(`/songs/${song.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editSong),
        })
        .then((r) => r.json())
        .then(editSong => console.log(editSong))
        console.log(editSong)
            
    }

    function handleChange(event) {
        console.log(event.target.name);
        setEditSong({...editSong, [event.target.name]: event.target.value})
    }


    return (
        <form onSubmit={handleSubmit}>

        <label><strong>Edit Song Title:</strong></label>
        <input
            type="text"
            id="title"
            placeholder="Enter Song Title..."
            value={editTitle.title}
            onChange={(e) => setEditTitle(e.target.value)}
        />

        <label><strong> Edit Song Artist:</strong></label>
        <input
            type="text"
            id="artist"
            placeholder="Enter Song Artist..."
            value={editArtist.artist}
            onChange={(e) => setEditArtist(e.target.value)}
        />

        <label><strong>Edit Song Genre:</strong></label>
        <input
            type="text"
            id="genre"
            placeholder="Enter Song Genre..."
            value={editGenre.genre}
            onChange={(e) => setEditGenre(e.target.value)}
        />

        <label><strong>Edit Spotify Song Link:</strong></label>
        <input
            type="text"
            id="link"
            placeholder="Enter Spotify Song Link..."
            value={editSong.link}
            onChange={(e) => setEditLink(e.target.value)}
        />

        <button className="ui button" type="submit">
            Update Song
        </button>
        </form>
    )

}