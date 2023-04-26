import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Section, Notification } from './Review.styled';
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
        <Section>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <Author>Author: {author}</Author> <p>{content}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <Section>
          <Notification>We don't have reviews on this movie</Notification>
        </Section>
      )}
    </>
  );
}
