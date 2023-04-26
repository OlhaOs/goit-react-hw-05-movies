import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import MoviesList from '../components/MoviesList';
import { Section, Input, Button, Notification, Query } from './Movies.styled';

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
      <Section>
        <Input
          type="text"
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
          placeholder="Enter movie"
        />
        <Button type="submit" onClick={handleSearchButton}>
          Search
        </Button>

        {loading ? (
          <p>
            <InfinitySpin width="100" color="#680d7a" />
          </p>
        ) : (
          movies && movies.length > 0 && <MoviesList movies={movies} />
        )}

        {isMovieFound && !loading && (
          <Notification>
            No movies were found for your request <Query>{query}</Query>.
            Please, type something else and press search button.
          </Notification>
        )}
      </Section>
    </>
  );
}
