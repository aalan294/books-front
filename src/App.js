import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Edit from './components/Edit'
import api from './api/api';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import Nav from './components/Nav';
import NewPost from './components/NewPost';

function App() {

const [books,setBooks] = useState([])
const [title,setTitle] = useState('')
const [author,setAuthor] = useState('')
const [publishYear,setPublishYear] = useState(null)
const [loader,setLoader] = useState(true)
const navigate = useNavigate()
const [flag,setFlag] = useState('false')


  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const fetch = await api.get('/books')
        setBooks(fetch.data)
        setFlag(false)
        console.log(books)
        setLoader(false)
      } catch (err) {
        console.log(err.message)
        setLoader(false)
      }
    }
    fetchData()
  },[flag])

  const handleDelete=async(id)=>{
      try {
        navigate('/')
        const book= books.filter((book)=>book._id!=id)
        setBooks(book)
        const response = await api.delete(`/books/${id}`)
        console.log(response)
      } catch (err) {
        console.log(err.message)
      }
  }
  const handleSubmit = async(e)=>{
      e.preventDefault()
      const updated = {title:title,author:author,publishYear:publishYear}
      await api.post('/books',updated)
      setFlag(true)
      setAuthor('')
      setTitle('')
      setPublishYear(null)
      setBooks([...books,updated])
      navigate('/')
  }

 return(
<>
  <Nav />
  <Routes>
    <Route path='/' element={<Home books = {books} loader = {loader} />} />
    <Route path='/:id' element={<MovieCard  books = {books} handleDelete={handleDelete} />} />
    <Route path='/edit' element={<Edit />} />
    <Route path='/newbook' element={<NewPost handleSubmit={handleSubmit} title ={title} setTitle={setTitle} author={author} setAuthor={setAuthor} publishYear = {publishYear} setPublishYear = {setPublishYear}  />} />
  </Routes>
  </>
 )
}

export default App;
