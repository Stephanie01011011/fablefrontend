import React, { useEffect, useState } from 'react'
import PopularBookDisplay from '../components/PopularBookDisplay'
import GenreCards from '../components/GenreCards'
import { useBooksContext } from '../hooks/useBooksContext'
import SocialFeed from '../components/SocialFeed'

const Home = () => {
    const {books, dispatch} = useBooksContext()
   
    useEffect(() => {
        const fetchBooks = async () => {
          const response = await fetch('https://fablebackend.onrender.com/api/books/')
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_BOOKS',
                payload: json})
          }
          
          
        }
    
        fetchBooks()
      }, [])
   
      
  return (
    <div className="">

    <div className='hero-container'>
      <div className="text">
        <h2 className='large-text light'>Get lost in a good book.</h2>
        <p className='body-text'>Your Gateway to Literary Adventures! Take a chance on a new book. Discover a World of Stories, Knowledge, and Inspiration. Dive into Our Curated Collection and Let Your Next Great Read Find You. Happy Reading!</p>
      </div>
    </div>


    <div className="popular-books">
        <h2 className='large-text dark center'>Our Most Popular Books Today</h2>
        <div className="pop-book-display">
            {books && books.slice(0,4).map((book) => (
                <PopularBookDisplay key={book._id} book={book}/>
            ))}
        </div>

    </div>
    
    <div className="genre-section">
        <h2 className='large-text dark center'>View Books By Genre</h2>
       <GenreCards />

    </div>

    <div className="social-section">
        <h2 className='large-text dark center'>Social Media Feed</h2>
            <p className='medium-text dark center' style={{width: '50%', margin: 'auto', marginBottom: '60px'}}>See how other readers are spending time with their new books and how Fable is helping them do what they do best.</p>
            <SocialFeed />

    </div>


    </div>
  )
}

export default Home
