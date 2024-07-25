import React, { useEffect } from 'react'
import { useBooksContext } from '../hooks/useBooksContext'

const BookInfo = () => {
    
    const {books, dispatch} = useBooksContext()
    let url = window.location.href.split("/")
    let finalurl = url.pop();
    let address = finalurl + ".jpg"
    
  
    useEffect(() => {
      const fetchBooks = async () => {
        const response = await fetch('https://fablebackend.onrender.com/api/books/' + finalurl)
        const json = await response.json();
        //const book = json.filter((b) => b._id == finalurl)
        
  
        if (response.ok) {
          dispatch({type: 'SET_BOOKS',
              payload: json})
              

          }
      }
  
  
      fetchBooks()
      
    }, [])
    
     
//let address = books[0]._id + ".jpg"

  return (
    <div>
        {books && 
        <div className="info-container">
            <div className="text">
            <h2 className='large-text dark'>{books.title}</h2>
            <p className='medium-text dark'>{books.author}</p>
            <p className='body-text dark'>{books.description}</p>
            <div className="info-text-container">
            <p className='medium-text'><span style={{fontSize: '16px'}}>publisher: </span> {books.publisher}</p>
            <p>{books.pages} pages</p>
            </div>
            <p className='large-text dark'>{books.price}</p>
            
            </div>
            <div className="image">
                <img src={address} alt="" id='book-info-img'/>
            </div>
        </div>
        
        }
      
      
    </div>
  )
}

export default BookInfo
