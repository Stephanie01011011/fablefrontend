import React from 'react'

const GenreBookDisplay = ({book}) => {
    let address = book._id + ".jpg"
    const url = "fablefrontend/" + book._id
    
  return (
    <div id='genre-display'>
       <img src={address} alt="" className="book-img"/>
      <h2>{book.title}</h2>
      <p className="body-text dark">{book.author}</p>
      <p className="card-text">{book.price}</p>
      <a href={url} className='btn'>View Book</a>
    </div>
  )
}

export default GenreBookDisplay
