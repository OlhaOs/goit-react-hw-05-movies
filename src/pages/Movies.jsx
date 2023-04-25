import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import MoviesList from '../components/MoviesList';

const API_KEY = '53f91c80aac0fdf8257fab8d211f13b5';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMovieFound, setisMovieFound] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const query = searchParam.get('query') ?? '';

  useEffect(() => {
    if (movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

  const handleSearchButton = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(
        () =>
          fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
          )
            .then(response => response.json())
            .then(data => {
              setMovies(data.results);
              setLoading(false);
              setisMovieFound(data.results.length === 0 ? true : false);
            })
            .catch(error => {
              console.error('Error fetching movies:', error);
              setLoading(false);
            }),
        2000
      );
    }
  }, [query, loading]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setSearchParams({ query: e.target.value })}
      />
      <button type="submit" onClick={handleSearchButton}>
        Search
      </button>
      {loading ? (
        <p>
          <InfinitySpin width="200" color="#4fa94d" />
        </p>
      ) : (
        movies && <MoviesList movies={movies} />
      )}
      {isMovieFound && <p>We didn't found any movie</p>}
    </>
  );
}
