

const PopularBookDisplay = ({book}) => {
    let address = "../public/" + book._id + ".jpg"
    
    const url = "/" + book._id
 
  return (
    <div id="book-display">
        <img src={address} alt="" className="book-img"/>
      <h2 id="book-title">{book.title}</h2>
      
      <p className="body-text dark">{book.author}</p>
      <p className="card-text">{book.price}</p>
      <a href={url} className='btn'>View Book</a>
    </div>
  )
}

export default PopularBookDisplay
