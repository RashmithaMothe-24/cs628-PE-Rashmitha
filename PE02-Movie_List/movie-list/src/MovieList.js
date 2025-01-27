import React, { useState } from 'react';

function MovieList() {
  const movies = [
    { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div>
      <label htmlFor="genre-filter">Filter by Genre: </label>
      <select
        id="genre-filter"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleClick(movie.title)}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
