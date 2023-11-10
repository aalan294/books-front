import React from 'react'
import Show from './Show'
import Loader from './Loader'
import '../styles/home.css'

const Home = ({books,loader}) => {
  return (
    <div className="home">
    {loader ? (<Loader />) :(<Show books = {books}/>)}
    {/*  */}
    </div>
  )
}

export default Home