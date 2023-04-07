import { useSelector } from "react-redux";

function MovieDetails() {
  const movie = useSelector((store) => store.movieDetails);
  console.log(movie);

  return (
    <>
      <div id="movie_details" key={movie.id}>
        <h3>{movie.title}</h3>
        <img
          src={movie.poster}
          alt={movie.title}
        />
        <h5>Description: {movie.description}</h5>
      </div>
    </>
  );
}

export default MovieDetails;
