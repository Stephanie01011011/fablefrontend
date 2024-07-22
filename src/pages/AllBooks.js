import React, { useEffect } from 'react'
import { useBooksContext } from '../hooks/useBooksContext'
import PopularBookDisplay from '../components/PopularBookDisplay'

const AllBooks = () => {
    const {books, dispatch} = useBooksContext()

    useEffect(() => {
        const fetchBooks = async () => {
          const response = await fetch('https://fablebackend.onrender.com/api/books')
          const json = await response.json();
          
          
    
          if (response.ok) {
            dispatch({type: 'SET_BOOKS',
                payload: json})
                
  
            }
        }
    
    
        fetchBooks()
        
      }, [])
      
  return (
    <div>
       <div className="All-books">
        <h2 className='large-text dark center'>All Books</h2>
        <div className="all-book-display">
            {books && books.map((book) => (
                <PopularBookDisplay key={book._id} book={book}/>
            ))}
        </div>

    </div>
    </div>
  )
}

export default AllBooks
