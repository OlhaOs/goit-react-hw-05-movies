import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title ?? movie.name}</Link>
        </li>
      ))}
    </ol>
  );
}
