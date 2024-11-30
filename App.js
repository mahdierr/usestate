// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'Un thriller de science-fiction réalisé par Christopher Nolan.',
      posterURL: 'https://imageurl.com/inception.jpg',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'Un film de science-fiction avec Keanu Reeves.',
      posterURL: 'https://imageurl.com/matrix.jpg',
      rating: 8.7,
    },
    {
      title: 'The Godfather',
      description: 'Un chef-d\'œuvre de Francis Ford Coppola.',
      posterURL: 'https://imageurl.com/godfather.jpg',
      rating: 9.2,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFilterChange = (filter) => {
    const filtered = movies.filter(
      (movie) =>
        (filter.title ? movie.title.toLowerCase().includes(filter.title.toLowerCase()) : true) &&
        (filter.rating ? movie.rating >= filter.rating : true)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies([...movies, newMovie]);
      setFilteredMovies([...movies, newMovie]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    }
  };

  return (
    <div className="App">
      <h1>Application de Cinéma</h1>

      <Filter setFilter={handleFilterChange} />
      
      <div className="add-movie">
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL de l'image"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Note"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={handleAddMovie}>Ajouter le film</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
