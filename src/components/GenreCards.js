import React from 'react'

const GenreCards = () => {
    const address = "/"
    const genres = [{title: "Mystery", descr: "Mystery books, a subgenre of narrative fiction, are often thought of as detective stories that involve a crime or mysterious death to be solved."}, {title: "Fantasy", descr: "Fantasy literature is literature set in an imaginary universe, often but not always without any locations, events, or people from the real world. "}, {title: "Romance", descr: "Romance novels are often about the development of a romantic relationship between two people, and the challenges they face. "}, {title: "Science Fiction", descr: "Science fiction, or sci-fi, is a fictional genre that explores imaginative and futuristic concepts, such as advanced technology, space exploration, and time travel."}];


  return (
    <div className='home-genre-container'>
      {genres && genres.map((genre) => (
        <div className='card' key={genre.title}>
            <h2>{genre.title}</h2>
            <p className='body-text dark card-text'>{genre.descr}</p>
            <a href={address + genre.title} className='btn'>View {genre.title} books</a>
        </div>
      ))}
    </div>
  )
}

export default GenreCards
