import { useSelector } from "react-redux";

function MovieDetails() {
  const movie = useSelector((store) => store.movieDetails);
  console.log(movie);

  return (
    <>
      <div id="movie_details" key={movie.id}>
        <h3>{movie.title}</h3>
        <img src={movie[0].poster} alt={movie[0].title} />
        <h5>Description: {movie[0].description}</h5>
        <h5>Genres:</h5>
        {movie[0]?.name && movie.map((item) => (
          <li>{item.name}</li>
        ))}
      </div>
    </>
  );
}

export default MovieDetails;
