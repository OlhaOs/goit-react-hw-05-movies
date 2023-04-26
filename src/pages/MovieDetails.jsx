import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieListItem from 'components/MovieListItem/';
import { Link,ArrowSvg } from './MovieDetails.styled';

import { FiChevronLeft } from 'react-icons/fi';

const API_KEY = '53f91c80aac0fdf8257fab8d211f13b5';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=images`;
  useEffect(() => {
    fetch(URL)
      .then(respons => respons.json())
      .then(data => {
        setMovie(data);
      });
  }, [URL]);

  return (
    
     
      <MovieListItem movie={movie} > 
      <Link to="/">
        <ArrowSvg>
          <FiChevronLeft />
        </ArrowSvg>
        <ArrowSvg>Back to main</ArrowSvg>
      </Link>
    </MovieListItem>
  );
}
