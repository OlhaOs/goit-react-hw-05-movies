import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import { Title } from './Home.styled';

const API_KEY = '53f91c80aac0fdf8257fab8d211f13b5';
const URL = `  https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(respons => respons.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  return (
    <main>
      <Title>Trending movies with week:</Title>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
}
