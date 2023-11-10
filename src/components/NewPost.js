import React from 'react'
import '../styles/newPost.css'

const NewPost = ({handleSubmit,title,author,publishYear,setTitle,setAuthor,setPublishYear}) => {
  return (
    <div className="newpost">
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title"></label>
            <input type='text' id='title' value={title} required onChange={(e)=>setTitle(e.target.value)} placeholder='Title of the Book'/><br />
            <label htmlFor="author"></label>
            <input type='text' id='author' value={author} required onChange={(e)=>setAuthor(e.target.value)} placeholder='Name of the Author'/><br />
            <label htmlFor="year"></label>
            <input type='number' id='year' value={publishYear} required onChange={(e)=>setPublishYear(e.target.value)} placeholder='Published Year'/><br />
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default NewPost