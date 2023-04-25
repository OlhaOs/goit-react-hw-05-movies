import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Author } from './Review.styled';
const API_KEY = '53f91c80aac0fdf8257fab8d211f13b5';

export default function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then(respons => respons.json())
      .then(data => {
        if (data.results.length === 0) {
          return;
        }
        setReviews(data.results);
      })
      .catch(error => console.error('Error', error));
  }, [URL]);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>Author: {author}</Author> <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have reviews on this movie</p>
      )}
    </>
  );
}
