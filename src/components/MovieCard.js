import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/movieCard.css'

const MovieCard = ({books,handleDelete}) => {
    const {id} = useParams()
    const book= books.filter((book)=>book._id==id)
  return (
    <div className="card">
        <h1>Book Name : {book[0].title}</h1>
        <h1>Author Name : {book[0].author}</h1>
        <h1>Published Year : {book[0].publishYear}</h1>
        <button onClick={()=>handleDelete(id)}>Delete</button>
      </div>
  )
}

export default MovieCard