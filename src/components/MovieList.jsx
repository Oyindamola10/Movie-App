

import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard 
        key={index}
        title={movie.title}
        description={movie.description}
        rating={movie.rating}
        posterURL={movie.posterURL}
         />
      ))}
    </div>
  );
};

export default MovieList;
