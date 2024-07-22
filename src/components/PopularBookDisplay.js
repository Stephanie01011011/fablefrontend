import { Link } from "react-router-dom"

const PopularBookDisplay = ({book}) => {
    let address = book._id + ".jpg"
    
    const url = "/" + book._id
 
  return (
    <div id="book-display">
        <img src={address} alt="" className="book-img"/>
      <h2 id="book-title">{book.title}</h2>
      
      <p className="body-text dark">{book.author}</p>
      <p className="card-text">{book.price}</p>
      <Link to={url} className='btn'>View Book</Link>
    </div>
  )
}

export default PopularBookDisplay
