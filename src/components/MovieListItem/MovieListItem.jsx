import { Link, Outlet } from 'react-router-dom';
import {
  Card,
  CardItem,
  Title,
  Overview,
  Genres,
  Text,
  AddInfo,
  Section,
} from './MovieListItem.styled';

export default function MovieListItem({ movie }) {
  const { title, poster_path, vote_average, overview, genres } = movie || {};

  return (
    <>
      {movie && (
        <>
          <Section>
            <Card>
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt="poster"
              />
              <CardItem>
                <Title>{title}</Title>
                <Text>
                  User Score: <span>{vote_average}</span>
                </Text>
                <Overview>Overview</Overview>
                <Text>{overview}</Text>
                <Genres>Genres</Genres>
                <Text>{genres.map(genre => genre.name).join(', ')}</Text>
              </CardItem>
            </Card>
          </Section>
          <Section>
            <AddInfo>Additional information</AddInfo>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </Section>
          <Outlet />
        </>
      )}
    </>
  );
}