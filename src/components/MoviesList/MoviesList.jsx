import { Link, ListItem } from './MoviesList.styled';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title ?? movie.name}</Link>
        </ListItem>
      ))}
    </ul>
  );
}
