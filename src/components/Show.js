import React from 'react'
import { Link } from 'react-router-dom'

const Show = ({books}) => {
  return (
    <>
        <ul>
            {books.length ?
            books.map((book)=>(
                <Link to={`/${book._id}`} ><li key={book._id}>BOOK NAME : {book.title}</li></Link>
            )):<div>No books to show</div>
          
            }
        </ul>
    </>
  )
}

export default Show