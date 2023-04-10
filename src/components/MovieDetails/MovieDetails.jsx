import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const movie = useSelector((store) => store.movieDetails);
  const history = useHistory();

  const backHandler = () => {
    history.goBack();
  }

  return (
    <>
    {movie[0]?.title && 
      <div id="movie_details" key={movie.id}>
        <button onClick={backHandler}>BACK</button>
        <h3>{movie[0].title}</h3>
        <img src={movie[0].poster} alt={movie[0].title} />
        <h5>Description: {movie[0].description}</h5>
        <h5>Genres:</h5>
        {movie.map((item) => (
          <span key={item.id}>{item.name} </span>
        ))}
      </div>
}
    </>
  );
}

export default MovieDetails;
