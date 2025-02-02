import React, { useEffect, useState } from 'react'
import { useBooksContext } from '../hooks/useBooksContext'
import GenreBookDisplay from '../components/GenreBookDisplay'
import { booksReducer } from '../context/booksContext'

const Genre = () => {
  
  let url = window.location.href.split("/")
  let finalurl = url.pop();
  
  if(finalurl == "Science%20Fiction"){
    finalurl = ["Science Fiction"]
  }
  
  const {books, dispatch} = useBooksContext()
  
  
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://fablebackend.onrender.com/api/books')
      const json = await response.json();
      const genre = json.filter((book) => book.genre == finalurl)

      if (response.ok) {
        dispatch({type: 'SET_BOOKS',
            payload: genre})
            



       
      }
      //setGenreBooks(json.filter((book)=> json.genre == url[0]))
    
      
    }


    fetchBooks()
    
  }, [])



      
  return (
    
    <div className="popular-books">
      
    <h2 className='large-text dark center'>{finalurl}</h2>
    <div className="pop-book-display">
        {books && books.map((book) => (
            <GenreBookDisplay book={book}/>
        ))}
    </div>

</div>
  )
}

export default Genre
