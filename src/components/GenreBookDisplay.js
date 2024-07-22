import React from 'react'
import { Link } from 'react-router-dom'

const GenreBookDisplay = ({book}) => {
    let address = book._id + ".jpg"
    const url = "/" + book._id
    
  return (
    <div id='genre-display'>
       <img src={address} alt="" className="book-img"/>
      <h2>{book.title}</h2>
      <p className="body-text dark">{book.author}</p>
      <p className="card-text">{book.price}</p>
      <Link to={url} className='btn'>View Book</Link>
    </div>
  )
}

export default GenreBookDisplay
