import React, { useEffect } from 'react'
import { useBooksContext } from '../hooks/useBooksContext'

const BookInfo = () => {
    
    const {books, dispatch} = useBooksContext()
    let url = window.location.pathname.split("/").slice(1)[0]
    let address = url + ".jpg"
    
  
    useEffect(() => {
      const fetchBooks = async () => {
        const response = await fetch('https://fablebackend.onrender.com/' + url)
        const json = await response.json();
        const book = json.filter((b) => b._id == url)
        
  
        if (response.ok) {
          dispatch({type: 'SET_BOOKS',
              payload: book})
              

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
            <h2 className='large-text dark'>{books[0].title}</h2>
            <p className='medium-text dark'>{books[0].author}</p>
            <p className='body-text dark'>{books[0].description}</p>
            <div className="info-text-container">
            <p className='medium-text'><span style={{fontSize: '16px'}}>publisher: </span> {books[0].publisher}</p>
            <p>{books[0].pages} pages</p>
            </div>
            <p className='large-text dark'>{books[0].price}</p>
            
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
